import type { Projecto } from "$lib/database.types";
import { db, storage } from "$lib/firebase";
import { doc, deleteDoc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytes, deleteObject } from "firebase/storage";
import { error, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

let project: Projecto;

// Firebase Storage helper functions
async function uploadToFirebaseStorage(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return path;
}

async function deleteFromFirebaseStorage(path: string): Promise<void> {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
}

export const load: PageServerLoad = async ({ params, parent }) => {
  const { projects } = await parent();
  const id = params.id ? params.id : "";

  try {
    // Query Firestore for project with matching name
    const projectsCollection = collection(db, "projects");
    const q = query(projectsCollection, where("name", "==", id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      error(404, {
        message: "Not found",
      });
    }

    const projectDoc = querySnapshot.docs[0];
    project = {
      id: projectDoc.id,
      ...projectDoc.data()
    } as unknown as Projecto;

  } catch (err) {
    console.error("Error fetching project:", err);
    error(500, {
      message: "Failed to load project",
    });
  }

  return { project: project, projects };
};

export const actions: Actions = {
  delete: async () => {
    try {
      // Delete document from Firestore
      const projectDoc = doc(db, "projects", String(project.id));
      await deleteDoc(projectDoc);

      // Delete images from Firebase Storage
      let photos: string[] = [
        ...[project.cover ?? ""],
        ...(project.gallery ?? []),
      ];

      for (const photo of photos.filter(p => p)) {
        try {
          await deleteFromFirebaseStorage(photo);
        } catch (error) {
          console.error(`Failed to delete image ${photo}:`, error);
        }
      }

      return { success: true };
    } catch (err) {
      console.error("Error deleting project:", err);
      return { error: "Failed to delete project" };
    }
  },
  cover: async ({ request }) => {
    const form = await request.formData();
    const cover = form.get("cover") as File;
    if (cover && project) {
      // Delete old cover from Firebase Storage
      if (project.cover) {
        try {
          await deleteFromFirebaseStorage(project.cover);
        } catch (error) {
          console.error("Failed to delete old cover:", error);
        }
      }

      // Upload new cover to Firebase Storage
      const coverPath = `${project.name}/${Date.now()}_cover`;
      try {
        await uploadToFirebaseStorage(cover, coverPath);
        project.cover = coverPath;

        // Update project in Firestore
        const projectDoc = doc(db, "projects", String(project.id));
        await updateDoc(projectDoc, { cover: coverPath });

        return { cover: coverPath };
      } catch (error) {
        return { error: `Failed to upload cover: ${error}` };
      }
    }
  },
  gallery: async ({ request }) => {
    const form = await request.formData();
    const files = form.getAll("gallery") as File[];
    let uploadPromises: Promise<string>[] = [];

    files.forEach((file, index) => {
      const name = `${project.name}/${Date.now()}_${index}`;
      project.gallery = [...(project.gallery ?? []), name];
      uploadPromises.push(uploadToFirebaseStorage(file, name));
    });

    try {
      await Promise.all(uploadPromises);

      // Update project in Firestore
      const projectDoc = doc(db, "projects", String(project.id));
      await updateDoc(projectDoc, { gallery: project.gallery });

      return { project };
    } catch (error) {
      return { error: `Failed to upload gallery images: ${error}` };
    }
  },
  remove: async ({ request }) => {
    const form = await request.formData();
    const name = form.getAll("name").toString();

    // Delete from Firebase Storage
    try {
      await deleteFromFirebaseStorage(name);
    } catch (error) {
      console.error(`Failed to delete image ${name}:`, error);
    }

    // Remove from project gallery and update Firestore
    project.gallery = project.gallery?.filter((value) => value !== name);

    const projectDoc = doc(db, "projects", String(project.id));
    await updateDoc(projectDoc, { gallery: project.gallery });

    return { project };
  },
};
