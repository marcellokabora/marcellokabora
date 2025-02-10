export function getLang(lang: string) {
  return lang === "angular" ? "//angular.dev" : "";
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
