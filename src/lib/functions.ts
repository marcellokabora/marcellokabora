import type { Projecto } from "./database.types";

export function getLang(lang: string) {
  return URLS.find(value => value.name === lang.trim())
}

export const URLS: { name: string, url: string }[] = [
  {
    name: "angular",
    url: "//angular.dev"
  },
  {
    name: "svelte",
    url: "//svelte.dev"
  },
  {
    name: "firebase",
    url: "//firebase.google.com"
  },
  {
    name: "material",
    url: "//material.io"
  },
  {
    name: "d3",
    url: "//d3js.org"
  },
  {
    name: "figma",
    url: "//figma.com"
  },
  {
    name: "react",
    url: "//react.dev"
  },
  {
    name: "builder",
    url: "//builder.io"
  },
  {
    name: "bootstrap",
    url: "//getbootstrap.com"
  },
  {
    name: "tailwindcss",
    url: "//tailwindcss.com"
  },
  {
    name: "jquery",
    url: "//jquery.com"
  },
  {
    name: "mysql",
    url: "//mysql.com"
  },
  {
    name: "highcharts",
    url: "//highcharts.com"
  },
  {
    name: "google map",
    url: "//developers.google.com/maps"
  },
  {
    name: "nuxt",
    url: "//nuxt.com"
  },
  {
    name: "aws",
    url: "//aws.com"
  },
  {
    name: "next",
    url: "//nextjs.org"
  },
  {
    name: "neon",
    url: "//neon.tech"
  },
  {
    name: "github",
    url: "//github.com"
  },
  {
    name: "vue",
    url: "//vuejs.org"
  },
]


export default function supabaseLoader({
  src = "",
  width = 500,
  quality = 100,
}) {
  return `https://iluuzburwyhjbrpihdte.supabase.co/storage/v1/object/public/marcellokabora/${src}?width=${width}&quality=${quality}`;
}

export function getImg(img: String) {
  return (
    "https://iluuzburwyhjbrpihdte.supabase.co/storage/v1/object/public/marcellokabora/" +
    img
  );
}

export const imgPlaceholder = "/gallery/styling.jpg";

export const productPlaceholder: Projecto = {
  name: "",
  title: "",
  slogan: "",
  info: "",
  lang: "",
  code: "",
  link: "",
  cover: "",
  type: "",
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
