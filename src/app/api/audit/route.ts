import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

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

const normalizePropertyName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

const normalizeWebsite = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
};

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isValidWebsite = (value: string) => {
  try {
    const url = new URL(normalizeWebsite(value));
    return Boolean(url.hostname.includes("."));
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

export async function POST(req: Request) {
  try {
    const databaseId = process.env.NOTION_AUDITBASE_ID;

    if (!process.env.NOTION_API_KEY || !databaseId) {
      return NextResponse.json(
        { ok: false, message: "Audit API configuration is missing." },
        { status: 500 }
      );
    }

    const { website = "", email = "", focus = "" } =
      (await req.json()) as AuditPayload;

    const cleanWebsite = normalizeWebsite(website);
    const cleanEmail = email.trim();
    const cleanFocus = focus.trim();

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

    if (!cleanFocus) {
      return NextResponse.json(
        { ok: false, message: "Select a focus area." },
        { status: 400 }
      );
    }

    const database = await notion.databases.retrieve({
      database_id: databaseId,
    });

    if (!("properties" in database)) {
      return NextResponse.json(
        { ok: false, message: "Audit database properties are unavailable." },
        { status: 500 }
      );
    }

    const properties = database.properties as Record<string, DatabaseProperty>;
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
      parent: { database_id: databaseId },
      properties: pageProperties,
    });

    return NextResponse.json({
      ok: true,
      message: "Audit request submitted successfully.",
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Audit submission failed.";

    console.error("Audit submission error:", error);

    return NextResponse.json(
      {
        ok: false,
        message,
      },
      { status: 500 }
    );
  }
}
