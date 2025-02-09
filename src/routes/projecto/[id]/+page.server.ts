import { SUPABASE_ANON_KEY, SUPERBASE_URL } from "$env/static/private";
import type { Database } from "$lib/database.types";
import { createClient } from "@supabase/supabase-js";
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ params }) => {
  const supabase = createClient<Database>(SUPERBASE_URL, SUPABASE_ANON_KEY);
  const id = params.id ? params.id : "";
  let { data: project } = await supabase
    .from("projects")
    .select()
    .eq("name", id)
    .single();

  return { project };
};
