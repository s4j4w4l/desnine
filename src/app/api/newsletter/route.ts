import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import {
  cleanText,
  invalidPayload,
  isValidEmail,
  payloadTooLarge,
  protectPublicForm,
  readJsonBody,
  safeApiError,
} from "@/lib/api-security";

// Initialize Notion client
const notionClient = process.env._TOKEN
  ? new Client({ auth: process.env._TOKEN })
  : null;

export async function POST(req: Request) {
  const blocked = protectPublicForm(req, "newsletter", 5);
  if (blocked) return blocked;

  try {
    const rawBody = await readJsonBody(req);
    if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
      return invalidPayload("Invalid newsletter request.");
    }
    const email = cleanText((rawBody as Record<string, unknown>).email, 254).toLowerCase();

    // Validate email
    if (!isValidEmail(email)) {
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
  } catch (err: unknown) {
    if (err instanceof SyntaxError) {
      return invalidPayload("Invalid JSON payload.");
    }
    if (err instanceof Error && err.message === "PAYLOAD_TOO_LARGE") {
      return payloadTooLarge();
    }
    console.error("Newsletter submission failed.");
    return safeApiError("Newsletter submission failed. Please try again later.");
  }
}
