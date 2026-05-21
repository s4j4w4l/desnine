import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(req: Request) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!process.env.NOTION_TOKEN) {
      return NextResponse.json(
        { error: "Missing NOTION_TOKEN" },
        { status: 500 }
      );
    }

    if (!databaseId) {
      return NextResponse.json(
        { error: "Missing NOTION_DATABASE_ID" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const {
      fullName,
      companyName,
      email,
      phone,
      service,
      timeline,
      projectDescription,
    } = body;

    if (!fullName || !email || !service || !projectDescription) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        "Full Name": {
          title: [
            {
              text: {
                content: fullName,
              },
            },
          ],
        },

        "Company Name": {
          rich_text: [
            {
              text: {
                content: companyName || "",
              },
            },
          ],
        },

        Email: {
          email: email,
        },

        Phone: {
          phone_number: phone || null,
        },

        "Service Needed": {
          select: {
            name: service,
          },
        },

        Timeline: timeline
          ? {
              select: {
                name: timeline,
              },
            }
          : {
              select: null,
            },

        "Project Discription": {
          rich_text: [
            {
              text: {
                content: projectDescription,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("NOTION_ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to submit form.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}