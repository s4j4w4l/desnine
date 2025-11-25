import { NextResponse } from "next/server";
import { Client as NotionClient } from "@notionhq/client";

const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // basic validation (same as your form)
    if (!body.fullName || !body.email || !body.serviceNeeded || !body.projectDetails) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Create a new lead in your Notion CRM database
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        // Title field
        Name: {
          title: [{ text: { content: body.fullName } }],
        },

        "Company Name": {
          rich_text: [{ text: { content: body.companyName || "" } }],
        },

        Email: {
          email: body.email || "",
        },

        Phone: {
          rich_text: [{ text: { content: body.phone || "" } }],
        },

        Service: {
          rich_text: [{ text: { content: body.serviceNeeded || "" } }],
        },

        Timeline: {
          rich_text: [{ text: { content: body.timeline || "" } }],
        },

        Project: {
          rich_text: [{ text: { content: body.projectDetails || "" } }],
        },

        // Optional: set default status
        Status: {
          select: { name: "New" }, // make sure "New" exists as an option in Notion
        },
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e: any) {
    console.error("Notion API error:", e);
    return NextResponse.json(
      { ok: false, message: e?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
