// This file is deprecated - use authStore.ts for Firebase auth instead
import { writable } from "svelte/store";

// Legacy store - no longer used
export let user = writable<any>(null);
