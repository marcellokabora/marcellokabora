import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPERBASE_URL,
} from "$env/static/public";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

export const supabase = createClient<Database>(
  PUBLIC_SUPERBASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
);
