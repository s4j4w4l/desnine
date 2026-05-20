import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");

const nullIfEmpty = (v: unknown) => {
  const s = clean(v);
  return s.length ? s : null;
};

export async function POST(req: Request) {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        { ok: false, message: "Notion env vars are missing." },
        { status: 500 }
      );
    }

    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    const body = await req.json();

    const fullName = clean(body.fullName);
    const email = clean(body.email);
    const companyName = nullIfEmpty(body.companyName);
    const phone = nullIfEmpty(body.phone);
    const serviceNeeded = clean(body.serviceNeeded);
    const timeline = nullIfEmpty(body.timeline);
    const projectDetails = clean(body.projectDetails);

    if (!fullName || !email || !serviceNeeded || !projectDetails) {
      return NextResponse.json(
        { ok: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        "Full Name": {
          title: [{ text: { content: fullName } }],
        },

        "Company Name": companyName
          ? { rich_text: [{ text: { content: companyName } }] }
          : { rich_text: [] },

        Email: {
          email,
        },

        Phone: {
          phone_number: phone,
        },

        "Service Needed": {
          multi_select: [{ name: serviceNeeded }],
        },

        Timeline: timeline
          ? { multi_select: [{ name: timeline }] }
          : { multi_select: [] },

        "Project Details": {
          rich_text: [{ text: { content: projectDetails } }],
        },
      },
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