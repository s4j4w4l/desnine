import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function GET() {
  try {
    console.log("TOKEN:", process.env.NOTION_TOKEN);

    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    const response = await notion.users.me();

    return NextResponse.json({
      ok: true,
      response,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({
      ok: false,
      message: error.message,
    });
  }
}