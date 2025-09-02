import type { Projecto } from "./database.types";
import { storage } from "./firebase";
import { ref, getDownloadURL } from "firebase/storage";

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

// Firebase Storage image URL generator
export async function getFirebaseImageUrl(imagePath: string): Promise<string> {
  try {
    const imageRef = ref(storage, imagePath);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error getting image URL from Firebase Storage:", error);
    return imgPlaceholder;
  }
}

// Synchronous function for immediate use (returns Firebase Storage URL pattern)
export function getImg(img: string) {
  if (!img) return imgPlaceholder;
  // Firebase Storage URL pattern - you might need to adjust the bucket name
  const bucketName = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'your-project.appspot.com';
  return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(img)}?alt=media`;
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
