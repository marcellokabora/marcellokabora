import { supabase } from "$lib/server/supabaseClient";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const { data } = await supabase.auth.getUser();

  return {
    user: data.user,
  };
};
