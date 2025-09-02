import { supabase } from '$lib/server/supabaseClient.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Fetch all projects from Supabase
    const { data: projects, error } = await supabase
        .from('projects')
        .select('*');

    if (error) {
        console.error('Error fetching projects from Supabase:', error);
        return {
            projects: [],
            error: error.message
        };
    }

    return {
        projects: projects || [],
        error: null
    };
};
