import { SUPABASE_ANON_KEY, SUPERBASE_URL } from "$env/static/private";
import type { Database } from "$lib/database.types";
import { createClient } from "@supabase/supabase-js";
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async () => {
  const supabase = createClient<Database>(SUPERBASE_URL, SUPABASE_ANON_KEY);
  let { data: projects } = await supabase.from("projects").select();

  return {
    projects,
  };
};
