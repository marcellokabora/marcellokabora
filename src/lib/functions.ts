import type { Projecto } from "./database.types";

export function getLang(lang: string) {
  lang = lang.trim();
  return lang === "angular"
    ? "//angular.dev"
    : lang === "svelte"
    ? "//svelte.dev"
    : lang === "firebase"
    ? "//firebase.google.com"
    : lang === "material"
    ? "//material.io"
    : lang === "d3"
    ? "//d3js.org"
    : lang === "figma"
    ? "//d3js.org"
    : lang === "react"
    ? "//react.dev"
    : lang === "builder"
    ? "//builder.io"
    : lang === "bootstrap"
    ? "//getbootstrap.com"
    : lang === "jquery"
    ? "//jquery.com"
    : lang === "mysql"
    ? "//mysql.com"
    : "";
}

export default function supabaseLoader({
  src = "",
  width = 500,
  quality = 100,
}) {
  return `https://iluuzburwyhjbrpihdte.supabase.co/storage/v1/object/public/marcellokabora/${src}?width=${width}&quality=${quality}`;
}

export const urlStore =
  "https://iluuzburwyhjbrpihdte.supabase.co/storage/v1/object/public/marcellokabora/";

export const imgPlaceholder = "/gallery/styling.jpg";

export const productPlaceholder: Projecto = {
  name: "",
  title: "",
  slogan: "",
  info: "",
  lang: [],
  code: "",
  link: "",
  cover: "",
  type: "",
  more: [],
  date: new Date().toISOString(),
  gallery: [],
  user_id: "",
  email: "",
};

export function formatDate(date: string) {
  return new Date(date)
    .toDateString()
    .split(" ")
    .filter((_, index) => index !== 0 && index !== 2)
    .join(" ");
}
