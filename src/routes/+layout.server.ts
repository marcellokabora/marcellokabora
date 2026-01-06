import type { Projecto } from "$lib/types/database.types";
import { db } from "$lib/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  try {
    // Fetch all projects from Firestore
    const projectsCollection = collection(db, "projects");
    const projectsSnapshot = await getDocs(projectsCollection);
    const projects = projectsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as unknown as Projecto[];

    return {
      user: null, // Firebase Auth will be handled client-side
      projects: projects,
    };
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    return {
      user: null,
      projects: [],
    };
  }
};
