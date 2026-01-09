import { query } from '$app/server';
import { db } from '$lib/config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { Project } from "$lib/types/project.types";

export const getProjects = query(async () => {
    // Fetch projects directly from Firestore
    const projectsCollection = collection(db, "projects");
    const projectsSnapshot = await getDocs(projectsCollection);
    const projects = projectsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })) as unknown as Project[];

    return projects;
});
