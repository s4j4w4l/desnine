import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wpucfphdmlnyoelpzben.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseServiceKey) {
  throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set in env");
}

// This client has full access → only use inside API routes or server actions!
export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);
