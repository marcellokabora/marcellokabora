import {
  PRIVATE_SUPABASE_ANON_KEY,
  PRIVATE_SUPERBASE_URL,
} from "$env/static/private";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

export const supabase = createClient<Database>(
  PRIVATE_SUPERBASE_URL,
  PRIVATE_SUPABASE_ANON_KEY
);
