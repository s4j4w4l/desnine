import { NextResponse } from "next/server";
import { Client as NotionClient } from "@notionhq/client";

const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic validation (same rules as your form)
    if (!body.fullName || !body.email || !body.serviceNeeded || !body.projectDetails) {
      return NextResponse.json(
        { ok: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        { ok: false, message: "Notion env vars are missing." },
        { status: 500 }
      );
    }

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        // Title field: Name
        Name: {
          title: [{ text: { content: body.fullName } }],
        },

        // Text: Company Name
        "Company Name": {
          rich_text: [{ text: { content: body.companyName || "" } }],
        },

        // Email: Email
        Email: {
          email: body.email,
        },

        // phone_number: Phone
        Phone: {
          phone_number: body.phone || "",
        },

        // multi_select: Service
        Service: {
          multi_select: body.serviceNeeded
            ? [{ name: body.serviceNeeded }]
            : [],
        },

        // multi_select: Timeline
        Timeline: {
          multi_select: body.timeline
            ? [{ name: body.timeline }]
            : [],
        },

        // Text: Project (project details from form)
        Project: {
          rich_text: [{ text: { content: body.projectDetails || "" } }],
        },
        // 👇 no Status here on purpose – you manage it manually in Notion
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err: any) {
    console.error("Notion API error:", err);

    const message =
      err?.body?.message ||
      err?.message ||
      "Something went wrong while submitting the form.";

    return NextResponse.json(
      { ok: false, message },
      { status: 500 }
    );
  }
}
