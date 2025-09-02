import { writable } from 'svelte/store';
import { auth } from '$lib/firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';

// Create a writable store for the user
export const user = writable<User | null>(null);

// Initialize auth state listener
export function initAuth() {
    onAuthStateChanged(auth, (firebaseUser) => {
        user.set(firebaseUser);
    });
}
