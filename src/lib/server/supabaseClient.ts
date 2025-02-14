import { SUPABASE_ANON_KEY, SUPABASE_URL } from "$env/static/private";
import type { Database } from "$lib/database.types";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
