import type { Projecto } from "$lib/database.types";
import { supabase } from "$lib/server/supabaseClient";
import { error, type Actions, type ServerLoad } from "@sveltejs/kit";

let projectData: Projecto;

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
  } else {
    projectData = project;
  }
  return { project };
};

export const actions: Actions = {
  delete: async () => {
    const { data, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", projectData?.id!);
    let photos: string[] = [];
    if (projectData.cover) photos = [...photos, projectData.cover];
    if (projectData.gallery) photos = [...photos, ...projectData.gallery];
    supabase.storage.from("marcellokabora").remove(photos);
    if (error) return { error };
    return { data };
  },
  cover: async ({ request }) => {
    const form = await request.formData();
    const cover = form.get("cover");
    if (cover && projectData) {
      if (projectData.cover)
        supabase.storage.from("marcellokabora").remove([projectData.cover]);
      projectData.cover = projectData.name + "/" + Date.now();
      const req1 = await supabase.from("projects").upsert(projectData);
      const { data, error } = await supabase.storage
        .from("marcellokabora")
        .upload(projectData.cover, cover, {
          cacheControl: "3600",
          upsert: true,
        });
      if (error) return { error: error.message };
      return { cover: data.path };
    }
  },
};
