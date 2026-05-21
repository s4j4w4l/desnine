import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(req: Request) {
  try {
    if (!process.env.NOTION_TOKEN) {
      return NextResponse.json(
        { ok: false, message: "Missing NOTION_TOKEN" },
        { status: 500 }
      );
    }

    if (!process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        { ok: false, message: "Missing NOTION_DATABASE_ID" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const {
      fullName,
      companyName,
      email,
      phone,
      serviceNeeded,
      timeline,
      projectDetails,
    } = body;

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
        "Company Name": {
          rich_text: [{ text: { content: companyName || "" } }],
        },
        Email: {
          email: email,
        },
        Phone: {
          phone_number: phone || null,
        },
        "Service Needed": {
          select: { name: serviceNeeded },
        },
        Timeline: {
          select: timeline ? { name: timeline } : null,
        },
        "Project Discription": {
          rich_text: [{ text: { content: projectDetails } }],
        },
      },
    });

    return NextResponse.json(
      { ok: true, message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        ok: false,
        message: error.message || "Something went wrong.",
        code: error.code,
      },
      { status: 500 }
    );
  }
}