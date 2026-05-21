import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(req: Request) {
  try {
    // CHECK ENV VARIABLES
    if (!process.env.NOTION_TOKEN) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing NOTION_TOKEN",
        },
        { status: 500 }
      );
    }

    if (!process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing NOTION_DATABASE_ID",
        },
        { status: 500 }
      );
    }

    // GET FORM DATA
    const body = await req.json();

    console.log("FORM BODY:", body);

    const {
      fullName,
      companyName,
      email,
      phone,
      service,
      timeline,
      projectDescription,
    } = body;

    // REQUIRED FIELDS
    if (!fullName || !email || !service || !projectDescription) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // CREATE NOTION PAGE
    const response = await notion.pages.create({
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

        "Service Needed": service
          ? {
              select: {
                name: service,
              },
            }
          : {
              select: null,
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

    console.log("NOTION SUCCESS:", response);

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("NOTION ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Notion request failed",
        message: error.message,
        status: error.status,
        code: error.code,
      },
      { status: 500 }
    );
  }
}