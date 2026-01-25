import { query } from '$app/server';

// Type for validation result
export type ValidationResult = { valid: boolean; error: string | null };

/**
 * Remote validation for username
 * Checks if username is available (not already taken)
 */
export const validateUsername = query('unchecked', async ({ username }: { username: string }): Promise<ValidationResult> => {
    // Simulate server-side validation delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // List of "taken" usernames for testing
    const takenUsernames = ['admin', 'user', 'test', 'demo', 'marcello'];

    if (!username || username.trim().length === 0) {
        return { valid: false, error: 'Username is required' };
    }

    if (username.length < 3) {
        return { valid: false, error: 'Username must be at least 3 characters' };
    }

    if (username.length > 20) {
        return { valid: false, error: 'Username must be less than 20 characters' };
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return { valid: false, error: 'Username can only contain letters, numbers, and underscores' };
    }

    if (takenUsernames.includes(username.toLowerCase())) {
        return { valid: false, error: 'This username is already taken' };
    }

    return { valid: true, error: null };
});

/**
 * Remote validation for email
 * Checks if email is valid and not already registered
 */
export const validateEmail = query('unchecked', async ({ email }: { email: string }): Promise<ValidationResult> => {
    // Simulate server-side validation delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // List of "registered" emails for testing
    const registeredEmails = [
        'admin@example.com',
        'test@example.com',
        'demo@example.com'
    ];

    if (!email || email.trim().length === 0) {
        return { valid: false, error: 'Email is required' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { valid: false, error: 'Please enter a valid email address' };
    }

    if (registeredEmails.includes(email.toLowerCase())) {
        return { valid: false, error: 'This email is already registered' };
    }

    return { valid: true, error: null };
});

/**
 * Remote validation for phone number
 * Checks if phone number is valid format
 */
export const validatePhone = query('unchecked', async ({ phone }: { phone: string }): Promise<ValidationResult> => {
    // Simulate server-side validation delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!phone || phone.trim().length === 0) {
        return { valid: false, error: 'Phone number is required' };
    }

    // Simple phone validation (10-15 digits, optionally with +, -, or spaces)
    const phoneRegex = /^[\d\s\-+()]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        return { valid: false, error: 'Please enter a valid phone number' };
    }

    // Check if phone contains at least 10 digits
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
        return { valid: false, error: 'Phone number must contain at least 10 digits' };
    }

    return { valid: true, error: null };
});
