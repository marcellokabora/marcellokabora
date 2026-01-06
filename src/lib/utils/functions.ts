import type { Projecto } from "$lib/types/database.types";
import { storage, db } from "$lib/config/firebase";
import { ref, getDownloadURL, deleteObject } from "firebase/storage";
import { collection, addDoc, updateDoc, doc, deleteDoc, setDoc } from "firebase/firestore";

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

// Client-side function to save/update projects
export async function saveProject(projectData: Projecto): Promise<{ success: boolean; error?: string; id?: string }> {
  try {
    // Use the name as the document ID
    const projectRef = doc(db, "projects", projectData.name);

    // Set the id to match the name for consistency
    const dataToSave = {
      ...projectData,
      id: projectData.name
    };

    // setDoc will create or update the document (merge: true for updates)
    await setDoc(projectRef, dataToSave, { merge: true });
    return { success: true, id: projectData.name };
  } catch (error) {
    console.error("Error saving project:", error);
    let errorMessage = "Failed to save project";

    // More specific error messages based on Firebase error codes
    if (error instanceof Error) {
      if (error.message.includes("permission-denied")) {
        errorMessage = "Permission denied. Please check your authentication.";
      } else if (error.message.includes("network-request-failed")) {
        errorMessage = "Network error. Please check your internet connection.";
      } else if (error.message.includes("quota-exceeded")) {
        errorMessage = "Storage quota exceeded.";
      } else {
        errorMessage = `Error: ${error.message}`;
      }
    }

    return { success: false, error: errorMessage };
  }
}

// Client-side function to delete projects
export async function deleteProject(projectData: Projecto): Promise<{ success: boolean; error?: string }> {
  try {
    if (!projectData.name) {
      return { success: false, error: "Project name is required for deletion" };
    }

    // Delete document from Firestore using name as document ID
    const projectRef = doc(db, "projects", projectData.name);
    await deleteDoc(projectRef);

    // Delete images from Firebase Storage
    const photos: string[] = [
      ...[projectData.cover ?? ""],
      ...(projectData.gallery ?? []),
    ];

    for (const photo of photos.filter(p => p)) {
      try {
        const storageRef = ref(storage, photo);
        await deleteObject(storageRef);
      } catch (error) {
        console.error(`Failed to delete image ${photo}:`, error);
        // Continue with other deletions even if one fails
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    let errorMessage = "Failed to delete project";

    if (error instanceof Error) {
      if (error.message.includes("permission-denied")) {
        errorMessage = "Permission denied. You don't have permission to delete this project.";
      } else if (error.message.includes("network-request-failed")) {
        errorMessage = "Network error. Please check your internet connection.";
      } else {
        errorMessage = `Error: ${error.message}`;
      }
    }

    return { success: false, error: errorMessage };
  }
}
