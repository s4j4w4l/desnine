import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Optional: ensure this route never gets statically evaluated
export const dynamic = "force-dynamic";

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const anon = process.env.SUPABASE_ANON_KEY;

  if (!url || !anon) {
    // Throwing here will show a clear message during build/dev if envs are missing
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_ANON_KEY. Set them in .env.local or your hosting env."
    );
  }

  return createClient(url, anon, {
    auth: { persistSession: false },
  });
}

export async function GET() {
  // sanity check route exists
  return NextResponse.json({ ok: true });
}

export async function POST(req: Request) {
  const supabase = getSupabase();

  try {
    const body = await req.json();
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

    const { data, error } = await supabase.from("Client").insert([payload]).select();

    if (error) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true, data }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, message: e?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
