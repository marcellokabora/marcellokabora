import { supabase } from "$lib/supabaseClient";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return {
    user,
  };
};
