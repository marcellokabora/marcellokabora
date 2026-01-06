import type { Projecto } from "$lib/types/database.types";
import { db } from "$lib/config/firebase";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    try {
        // Fetch all projects
        const projectsCollection = collection(db, "projects");
        const projectsSnapshot = await getDocs(projectsCollection);
        const projects = projectsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as unknown as Projecto[];

        return { projects };
    } catch (error) {
        console.error("Error fetching projects:", error);
        return { projects: [] };
    }
};

export const actions: Actions = {
    migrate: async ({ request }) => {
        const formData = await request.formData();
        const oldId = formData.get("oldId") as string;
        const newId = formData.get("newId") as string;

        if (!oldId || !newId) {
            return { success: false, error: "Missing oldId or newId" };
        }

        try {
            // Get the old document
            const oldDocRef = doc(db, "projects", oldId);
            const oldDocSnap = await getDoc(oldDocRef);

            if (!oldDocSnap.exists()) {
                return { success: false, error: `Document with ID ${oldId} not found` };
            }

            const projectData = oldDocSnap.data() as Projecto;

            // Create new document with name as ID
            const newDocRef = doc(db, "projects", newId);
            await setDoc(newDocRef, {
                ...projectData,
                id: newId,
                name: newId
            });

            return {
                success: true,
                message: `Successfully migrated project from ${oldId} to ${newId}`
            };
        } catch (error) {
            console.error("Migration error:", error);
            return {
                success: false,
                error: `Migration failed: ${error instanceof Error ? error.message : 'Unknown error'}`
            };
        }
    }
};