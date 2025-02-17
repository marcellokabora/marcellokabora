import type { Projecto } from "$lib/database.types";
import { supabase } from "$lib/server/supabaseClient";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const { data } = await supabase.auth.getUser();
  let { data: projects } = await supabase.from("projects").select();

  return {
    user: data.user,
    projects: projects as Projecto[],
  };
};
