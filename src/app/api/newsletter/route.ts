import { NextResponse } from "next/server";
import { Client as NotionClient } from "@notionhq/client";

// Initialize Notion client
const notion = new NotionClient({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!process.env.NOTION_TOKEN || !process.env.NOTION_NEWSLETTER_DB_ID) {
      return NextResponse.json(
        { ok: false, error: "Server configuration missing." },
        { status: 500 }
      );
    }

    // Create Notion row in Newsletter DB
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_NEWSLETTER_DB_ID },
      properties: {
        Email: {
          email: email,
        },
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Newsletter Notion error:", err);

    const message =
      err?.body?.message ||
      err?.message ||
      "Newsletter submission failed.";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
