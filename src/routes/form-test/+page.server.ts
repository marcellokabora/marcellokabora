import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
    return {
        title: 'Remote Validation Test'
    };
};

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const username = data.get('username')?.toString() || '';
        const email = data.get('email')?.toString() || '';
        const phone = data.get('phone')?.toString() || '';

        const errors: Record<string, string> = {};

        // Server-side validation (same logic as remote validation)
        if (!username || username.length < 3) {
            errors.username = 'Username must be at least 3 characters';
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!phone || phone.replace(/\D/g, '').length < 10) {
            errors.phone = 'Phone number must contain at least 10 digits';
        }

        if (Object.keys(errors).length > 0) {
            return fail(400, { errors, values: { username, email, phone } });
        }

        return {
            success: true,
            message: 'Form submitted successfully!'
        };
    }
};
