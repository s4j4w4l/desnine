import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env._TOKEN });

const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");
const nullIfEmpty = (v: unknown) => {
  const s = clean(v);
  return s.length ? s : null;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Env check first
    if (!process.env._TOKEN || !process.env._DATABASE_ID) {
      return NextResponse.json(
        { ok: false, message: " env vars are missing." },
        { status: 500 }
      );
    }

    // Normalize inputs (prevents "" going into )
    const fullName = clean(body.fullName);
    const email = clean(body.email);
    const companyName = nullIfEmpty(body.companyName);
    const phone = nullIfEmpty(body.phone); // ✅ null instead of ""
    const serviceNeeded = clean(body.serviceNeeded);
    const timeline = nullIfEmpty(body.timeline);
    const projectDetails = clean(body.projectDetails);

    // Basic validation (same rules as your form)
    if (!fullName || !email || !serviceNeeded || !projectDetails) {
      return NextResponse.json(
        { ok: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    await notion.pages.create({
      parent: { database_id: process.env._DATABASE_ID },
      properties: {
        // ✅ Title property
        "Full Name": {
          title: [{ text: { content: fullName } }],
        },

        // ✅ Rich text (send [] when empty)
        "Company Name": companyName
          ? { rich_text: [{ text: { content: companyName } }] }
          : { rich_text: [] },

        // ✅ Email property
        Email: {
          email,
        },

        // ✅ Phone property MUST be string or null
        Phone: {
          phone_number: phone, // ✅ null ok, "" NOT ok
        },

        // ✅ Keep multi_select ONLY if your  field is multi-select
        "Service Needed": {
          multi_select: serviceNeeded ? [{ name: serviceNeeded }] : [],
        },

        // ✅ Keep multi_select ONLY if your  field is multi-select
        "Timeline": {
          multi_select: timeline ? [{ name: timeline }] : [],
        },

        // ✅ Rich text (send [] when empty)
        "Project Details": {
          rich_text: [{ text: { content: projectDetails } }],
        },
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err: any) {
    console.error(" API error:", err);

    const message =
      err?.body?.message ||
      err?.message ||
      "Something went wrong while submitting the form.";

    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
