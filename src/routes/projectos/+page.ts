import type { Project } from "$lib/interfaces";
import { supabase } from "$lib/supabaseClient";
import type { PageLoad } from "./$types";
export const load: PageLoad = async () => {
  let { data: projects } = await supabase.from("projects").select();
  return {
    projects,
  };
};
