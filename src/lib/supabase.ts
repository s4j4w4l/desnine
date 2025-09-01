import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://wpucfphdmlnyoelpzben.supabase.co'
const supabaseServiceKey = process.env.SUPABASE_KEY!

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);
