import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";
import {
  cleanText,
  invalidPayload,
  isValidEmail,
  payloadTooLarge,
  protectPublicForm,
  readJsonBody,
  safeApiError,
} from "@/lib/api-security";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

type AuditPayload = {
  website?: string;
  email?: string;
  focus?: string;
};

type DatabaseProperty = {
  type: string;
};

type PageProperties = NonNullable<
  Parameters<Client["pages"]["create"]>[0]["properties"]
>;
type PageParent = NonNullable<Parameters<Client["pages"]["create"]>[0]["parent"]>;

const normalizePropertyName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

const normalizeWebsite = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
};

const isValidWebsite = (value: string) => {
  try {
    const url = new URL(normalizeWebsite(value));
    return (
      (url.protocol === "https:" || url.protocol === "http:") &&
      url.hostname.length <= 253 &&
      url.hostname.includes(".")
    );
  } catch {
    return false;
  }
};

const findProperty = (
  properties: Array<[string, DatabaseProperty]>,
  type: string,
  candidates: string[]
) => {
  const normalizedCandidates = candidates.map(normalizePropertyName);

  return (
    properties.find(
      ([name, property]) =>
        property.type === type &&
        normalizedCandidates.includes(normalizePropertyName(name))
    )?.[0] ??
    properties.find(
      ([name, property]) =>
        property.type === type &&
        normalizedCandidates.some((candidate) =>
          normalizePropertyName(name).includes(candidate)
        )
    )?.[0] ??
    properties.find(([, property]) => property.type === type)?.[0]
  );
};

const getAuditSchema = async (targetId: string) => {
  const database = await notion.databases.retrieve({
    database_id: targetId,
  });

  if ("properties" in database) {
    return {
      parent: { database_id: targetId } satisfies PageParent,
      properties: database.properties as Record<string, DatabaseProperty>,
    };
  }

  const dataSourceId =
    "data_sources" in database ? database.data_sources?.[0]?.id : undefined;

  if (!dataSourceId) {
    throw new Error("Audit database needs a connected data source.");
  }

  const dataSource = await notion.dataSources.retrieve({
    data_source_id: dataSourceId,
  });

  if (!("properties" in dataSource)) {
    throw new Error("Audit data source properties are unavailable.");
  }

  return {
    parent: { data_source_id: dataSourceId } satisfies PageParent,
    properties: dataSource.properties as Record<string, DatabaseProperty>,
  };
};

export async function POST(req: Request) {
  const blocked = protectPublicForm(req, "audit", 4);
  if (blocked) return blocked;

  try {
    const databaseId = process.env.NOTION_AUDITBASE_ID;

    if (!process.env.NOTION_API_KEY || !databaseId) {
      return NextResponse.json(
        { ok: false, message: "Audit API configuration is missing." },
        { status: 500 }
      );
    }

    const rawBody = await readJsonBody(req);
    if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
      return invalidPayload("Invalid audit request.");
    }
    const body = rawBody as AuditPayload;

    const cleanWebsite = normalizeWebsite(cleanText(body.website, 2048));
    const cleanEmail = cleanText(body.email, 254).toLowerCase();
    const cleanFocus = cleanText(body.focus, 80);
    const allowedFocusAreas = new Set([
      "SEO & search rankings",
      "Page speed & performance",
      "Design & user experience",
      "Conversion & leads",
      "Full website audit",
    ]);

    if (!isValidWebsite(cleanWebsite)) {
      return NextResponse.json(
        { ok: false, message: "Enter a valid website or domain." },
        { status: 400 }
      );
    }

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { ok: false, message: "Enter a valid email address." },
        { status: 400 }
      );
    }

    if (!allowedFocusAreas.has(cleanFocus)) {
      return NextResponse.json(
        { ok: false, message: "Select a focus area." },
        { status: 400 }
      );
    }

    const { parent, properties } = await getAuditSchema(databaseId);
    const databaseProperties = Object.entries(properties);

    const titleProperty = findProperty(databaseProperties, "title", [
      "name",
      "website",
      "website url",
      "domain",
    ]);

    if (!titleProperty) {
      return NextResponse.json(
        { ok: false, message: "Audit database needs a title property." },
        { status: 500 }
      );
    }

    const emailProperty = findProperty(databaseProperties, "email", [
      "email",
      "work email",
    ]);
    const urlProperty = findProperty(databaseProperties, "url", [
      "website",
      "website url",
      "domain",
      "url",
    ]);
    const focusSelectProperty = findProperty(databaseProperties, "select", [
      "focus",
      "focus area",
      "what matters most",
    ]);
    const focusTextProperty = findProperty(databaseProperties, "rich_text", [
      "focus",
      "focus area",
      "what matters most",
    ]);
    const submittedAtProperty = findProperty(databaseProperties, "date", [
      "submitted at",
      "created",
      "date",
    ]);

    const pageProperties: PageProperties = {
      [titleProperty]: {
        title: [{ text: { content: cleanWebsite } }],
      },
    };

    if (emailProperty) {
      pageProperties[emailProperty] = {
        email: cleanEmail,
      };
    }

    if (urlProperty && urlProperty !== titleProperty) {
      pageProperties[urlProperty] = {
        url: cleanWebsite,
      };
    }

    if (focusSelectProperty) {
      pageProperties[focusSelectProperty] = {
        select: { name: cleanFocus },
      };
    } else if (focusTextProperty) {
      pageProperties[focusTextProperty] = {
        rich_text: [{ text: { content: cleanFocus } }],
      };
    }

    if (submittedAtProperty) {
      pageProperties[submittedAtProperty] = {
        date: { start: new Date().toISOString() },
      };
    }

    await notion.pages.create({
      parent,
      properties: pageProperties,
    });

    return NextResponse.json({
      ok: true,
      message: "Audit request submitted successfully.",
    });
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      return invalidPayload("Invalid JSON payload.");
    }
    if (error instanceof Error && error.message === "PAYLOAD_TOO_LARGE") {
      return payloadTooLarge();
    }
    console.error("Audit submission failed.");
    return safeApiError("Audit submission failed. Please try again later.");
  }
}
