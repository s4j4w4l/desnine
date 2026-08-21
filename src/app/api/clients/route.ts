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

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(req: Request) {
  const blocked = protectPublicForm(req, "clients", 5);
  if (blocked) return blocked;

  try {
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        { ok: false, message: "Form submission is not configured yet. Please contact us directly." },
        { status: 500 }
      );
    }

    const rawBody = await readJsonBody(req);
    if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
      return invalidPayload("Invalid form submission.");
    }

    const body = rawBody as Record<string, unknown>;
    const fullName = cleanText(body.fullName, 100);
    const companyName = cleanText(body.companyName, 120);
    const email = cleanText(body.email, 254).toLowerCase();
    const phone = cleanText(body.phone, 40);
    const serviceNeeded = cleanText(body.serviceNeeded, 80);
    const timeline = cleanText(body.timeline, 40);
    const projectDetails = cleanText(body.projectDetails, 2000);

    const allowedServices = new Set([
      "SEO Optimization",
      "Website Design & Development",
      "AI Automation & Bots",
      "Smart Analytics",
      "Branding & Identity",
      "Print & Packaging Design",
      "Digital Design",
      "Advertising Design",
      "Content Creation & Visual Support",
      "Industry-Specific Design",
      "Social Media Management",
      "Multiple Services",
      "Other",
    ]);
    const allowedTimelines = new Set(["", "ASAP", "2–4 weeks", "4–8 weeks", "Flexible"]);

    if (!fullName || !isValidEmail(email) || !allowedServices.has(serviceNeeded) || !projectDetails) {
      return invalidPayload("Please complete all required fields with valid information.");
    }

    if (!allowedTimelines.has(timeline)) {
      return invalidPayload("Select a valid project timeline.");
    }

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
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      return invalidPayload("Invalid JSON payload.");
    }
    if (error instanceof Error && error.message === "PAYLOAD_TOO_LARGE") {
      return payloadTooLarge();
    }
    console.error("Contact submission failed.");
    return safeApiError();
  }
}
