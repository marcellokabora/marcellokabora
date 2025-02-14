import type { Projecto } from "$lib/database.types";
import { supabase } from "$lib/server/supabaseClient";
import type { User } from "@supabase/supabase-js";
import type { Actions, PageServerLoad } from "./$types";

let account: User;

export const load: PageServerLoad = async ({ parent }) => {
  const { user } = await parent();
  if (user) account = user;
  return {};
};

export const actions: Actions = {
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
        account = user.user;
        return { user: user.user };
      }
    }
  },
  logout: async () => {
    await supabase.auth.signOut();
    return { success: true };
  },
  create: async ({ request }) => {
    const form = await request.formData();
    const data: Projecto = {
      name: form.get("name")?.toString() ?? "",
      date: form.get("date")?.toString() ?? "",
      title: form.get("title")?.toString() ?? "",
      cover: form.get("cover")?.toString(),
      lang: form.get("lang")?.toString().split(","),
      slogan: form.get("slogan")?.toString(),
      type: form.get("type")?.toString(),
      info: form.get("info")?.toString(),
      link: form.get("link")?.toString(),
      code: form.get("code")?.toString(),
      more: form.get("more")?.toString().split(","),
      user_id: account.id,
      email: account.email,
    };
    const id = Number(form.get("id"));
    let sendata;
    if (id) {
      data.id = id;
      sendata = await supabase.from("projects").update(data).eq("id", data.id);
    } else {
      sendata = await supabase.from("projects").insert(data);
    }
    return { success: true };
  },
};
