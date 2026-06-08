import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        { ok: false, message: "Form submission is not configured yet. Please contact us directly." },
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

    // TEST DATABASE CONNECTION
    await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    // CREATE PAGE
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
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
          phone_number: phone || "",
        },

        "Service Needed": {
          select: {
            name: serviceNeeded,
          },
        },

        "Ideal Timeline": timeline
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
                content: projectDetails,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({
      ok: true,
      message: "Form submitted successfully!",
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}