import { db } from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    try {
        // Fetch all projects from Firebase
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projects = projectsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return {
            projects: projects || [],
            error: null
        };
    } catch (error) {
        console.error('Error fetching projects from Firebase:', error);
        return {
            projects: [],
            error: 'Failed to fetch projects from Firebase'
        };
    }
};
