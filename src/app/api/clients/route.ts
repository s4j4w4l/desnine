import { NextResponse } from "next/server";
import { Client as NotionClient } from "@notionhq/client";

const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Incoming body:", body);
    console.log("Has NOTION_TOKEN?", !!process.env.NOTION_TOKEN);
    console.log("NOTION_DATABASE_ID:", process.env.NOTION_DATABASE_ID);

    // 1) Check env vars first
    if (!process.env.NOTION_TOKEN) {
      return NextResponse.json(
        { ok: false, message: "NOTION_TOKEN is missing (check .env.local)" },
        { status: 500 }
      );
    }

    if (!process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        { ok: false, message: "NOTION_DATABASE_ID is missing (check .env.local)" },
        { status: 500 }
      );
    }

    // 2) Basic validation (same as your frontend)
    if (!body.fullName || !body.email || !body.serviceNeeded || !body.projectDetails) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // 3) Try to create page in Notion
    try {
      const page = await notion.pages.create({
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
          // make sure "New" exists as an option in the Status select
          Status: {
            select: { name: "New" },
          },
        },
      });

      console.log("Created Notion page:", page.id);

      return NextResponse.json({ ok: true }, { status: 201 });
    } catch (err: any) {
      console.error("Notion error:", err);

      // Try to surface useful info from Notion error
      const message =
        err?.body?.message ||
        err?.message ||
        "Unknown Notion error. Check server logs for details.";

      return NextResponse.json(
        {
          ok: false,
          message,
          raw: err?.body ?? null, // so you can see exact Notion error in the response
        },
        { status: 500 }
      );
    }
  } catch (e: any) {
    console.error("Route error:", e);
    return NextResponse.json(
      { ok: false, message: e?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
