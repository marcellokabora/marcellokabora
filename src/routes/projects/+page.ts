import { supabase } from "$lib/supabaseClient";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  let { data: projects, error } = await supabase.from("projects").select();
  console.log(projects);

  return {
    projects,
  };
};
