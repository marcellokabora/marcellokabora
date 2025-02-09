import type Project from "$lib/Project.svelte";
import { supabase } from "$lib/supabaseClient";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  let { data: project } = await supabase
    .from("projects")
    .select()
    .eq("name", params.id)
    .single();

  return { project };
};
