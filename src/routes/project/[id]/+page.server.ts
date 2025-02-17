import type { Projecto } from "$lib/database.types";
import { supabase } from "$lib/server/supabaseClient";
import { error, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { User } from "@supabase/supabase-js";

let project: Projecto;
let account: User;

export const load: PageServerLoad = async ({ params, parent }) => {
  const { user } = await parent();

  if (user) account = user;

  const id = params.id ? params.id : "";
  let { data } = await supabase
    .from("projects")
    .select()
    .eq("name", id)
    .single();
  if (!data) {
    error(404, {
      message: "Not found",
    });
  } else {
    project = data;
  }
  return { project };
};

export const actions: Actions = {
  delete: async () => {
    const { data, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", project?.id!);
    let photos: string[] = [
      ...[project.cover ?? ""],
      ...(project.gallery ?? []),
    ];
    supabase.storage.from("marcellokabora").remove(photos);
    if (error) return { error };
    return { data };
  },
  cover: async ({ request }) => {
    const form = await request.formData();
    const cover = form.get("cover");
    if (cover && project) {
      if (project.cover)
        supabase.storage.from("marcellokabora").remove([project.cover]);
      project.cover = project.name + "/" + Date.now();
      const req1 = await supabase.from("projects").upsert(project);
      const { data, error } = await supabase.storage
        .from("marcellokabora")
        .upload(project.cover, cover, {
          cacheControl: "3600",
          upsert: true,
        });
      if (error) return { error: error.message };
      return { cover: data.path };
    }
  },
  gallery: async ({ request }) => {
    const form = await request.formData();
    const files = form.getAll("gallery");
    let prosimese: any = [];
    files.forEach((file, index) => {
      const name = project.name + "/" + Date.now().toString() + index;
      project.gallery = [...(project.gallery ?? []), name];
      prosimese.push(
        supabase.storage.from("marcellokabora").upload(name, file)
      );
    });
    await Promise.all(prosimese);
    await supabase.from("projects").upsert(project);
    return { project };
  },
  remove: async ({ request }) => {
    const form = await request.formData();
    const name = form.getAll("name").toString();
    supabase.storage.from("marcellokabora").remove([name]);
    project.gallery = project.gallery?.filter((value) => value !== name);
    await supabase.from("projects").upsert(project);
    return { project };
  },
};
