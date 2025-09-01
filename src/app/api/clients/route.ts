import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // map expected fields to your "Client" columns
    const payload = {
      client_name: body.fullName ?? null,
      client_company_name: body.companyName ?? null,
      client_email: body.email ?? null,
      client_phone: body.phone ?? null,
      client_service: body.serviceNeeded ?? null,
      client_budget: body.budget ?? null,
      client_project_details: body.projectDetails ?? null,
      client_timeline: body.timeline ?? null,
    };

    const { data, error } = await supabaseServer.from("Client").insert([payload]).select();

    if (error) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true, data }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ ok: false, message: e?.message ?? "Server error" }, { status: 500 });
  }
}