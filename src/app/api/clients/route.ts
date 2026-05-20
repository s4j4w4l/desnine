import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const trimString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const optionalString = (value: unknown) => {
  const trimmed = trimString(value);
  return trimmed.length ? trimmed : null;
};

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(req: Request) {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        { ok: false, message: "Notion env vars are missing." },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));

    const fullName = trimString(body.fullName);
    const email = trimString(body.email);
    const companyName = optionalString(body.companyName);
    const phone = optionalString(body.phone);
    const serviceNeeded = trimString(body.serviceNeeded);
    const timeline = optionalString(body.timeline);
    const projectDetails = trimString(body.projectDetails);

    if (!fullName || !email || !serviceNeeded || !projectDetails) {
      return NextResponse.json(
        { ok: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const properties: Record<string, any> = {
      "Full Name": {
        title: [{ text: { content: fullName } }],
      },
      Email: {
        email,
      },
      "Project Details": {
        rich_text: [{ text: { content: projectDetails } }],
      },
      "Service Needed": {
        select: { name: serviceNeeded },
      },
    };

    if (companyName) {
      properties["Company Name"] = {
        rich_text: [{ text: { content: companyName } }],
      };
    }

    if (phone) {
      properties.Phone = {
        phone_number: phone,
      };
    }

    if (timeline) {
      properties.Timeline = {
        select: { name: timeline },
      };
    }



    await notionClient.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties,
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err: any) {
    console.error("Notion API error:", err);

    const message =
      err?.body?.message ||
      err?.message ||
      "Something went wrong while submitting the form.";

    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}