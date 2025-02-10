import type { User } from "@supabase/supabase-js";
import { writable } from "svelte/store";

export let user = writable<User | null>(null);
