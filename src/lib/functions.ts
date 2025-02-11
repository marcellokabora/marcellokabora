export function getLang(lang: string) {
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
    ? "//figma.com"
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
