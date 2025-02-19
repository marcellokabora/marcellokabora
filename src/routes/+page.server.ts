import type { Projecto } from "$lib/database.types";
import { supabase } from "$lib/server/supabaseClient";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
  const { projects } = await parent();
  return {
    projects,
  };
};

export const actions: Actions = {
  create: async ({ request }) => {
    const form = await request.formData();
    const data: Projecto = {
      name: form.get("name")?.toString() ?? "",
      date: form.get("date")?.toString() ?? "",
      title: form.get("title")?.toString() ?? "",
      cover: form.get("cover")?.toString(),
      lang: form.get("lang")?.toString().trim().toLocaleLowerCase(),
      slogan: form.get("slogan")?.toString(),
      type: form.get("type")?.toString(),
      info: form.get("info")?.toString(),
      link: form.get("link")?.toString(),
      code: form.get("code")?.toString(),
      user_id: form.get("user_id")?.toString(),
      email: form.get("email")?.toString(),
    };
    const id = Number(form.get("id"));
    if (id) {
      data.id = id;
      await supabase.from("projects").update(data).eq("id", data.id);
    } else {
      await supabase.from("projects").insert(data);
    }
    return { success: true };
  },
  login: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();
    if (email && password) {
      const { data: user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        return { error: error.message };
      } else if (user) {
        return { user: user.user };
      }
    }
  },
  logout: async () => {
    await supabase.auth.signOut();
    return { success: true };
  },
};
