import { supabase } from "$lib/supabaseClient";
import { error, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ params }) => {
  const id = params.id ? params.id : "";
  let { data: project } = await supabase
    .from("projects")
    .select()
    .eq("name", id)
    .single();

  if (!project) {
    error(404, {
      message: "Not found",
    });
  }

  return { project };
};
