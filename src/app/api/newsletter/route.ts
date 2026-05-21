import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Initialize Notion client
const notionClient = process.env._TOKEN
  ? new Client({ auth: process.env._TOKEN })
  : null;

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

    if (!notionClient || !process.env._NEWSLETTER_DB_ID) {
      return NextResponse.json(
        { ok: false, error: "Server configuration missing." },
        { status: 500 }
      );
    }

    // Create newsletter row in Newsletter DB
    await notionClient.pages.create({
      parent: { database_id: process.env._NEWSLETTER_DB_ID },
      properties: {
        number: {
          title: [{ text: { content: email } }],
        },
        Email: {
          email: email,
        },
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Newsletter  error:", err);

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
