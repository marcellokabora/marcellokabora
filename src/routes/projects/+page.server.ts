import { supabase } from "$lib/server/supabaseClient";
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async () => {
  let { data: projects } = await supabase.from("projects").select();

  return {
    projects,
  };
};
