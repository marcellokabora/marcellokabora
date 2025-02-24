import { supabase } from "$lib/server/supabaseClient";
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ parent }) => {
  const { projects } = await parent();
  return {
    projects,
  };
};
