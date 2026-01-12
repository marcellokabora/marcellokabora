<script lang="ts">
  import { signInWithEmailAndPassword, signOut } from "firebase/auth";
  import { auth } from "$lib/config/firebase";
  import { onMount } from "svelte";
  import MetaTags from "$lib/components/MetaTags.svelte";

  let email = "";
  let password = "";
  let loading = false;
  let error = "";
  let user: any = null;

  onMount(() => {
    // Listen to auth state changes
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      user = firebaseUser;
    });

    return unsubscribe;
  });

  async function handleLogin() {
    if (!email || !password) {
      error = "Please fill in all fields";
      return;
    }

    loading = true;
    error = "";

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      error = "Invalid email or password";
    } finally {
      loading = false;
    }
  }

  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (err: any) {
      error = err.message;
    }
  }
</script>

<MetaTags
  title="Login | Marcello Annicchiarico"
  url="https://marcellokabora.com/login"
/>

<div
  class="min-h-screen flex items-center justify-center bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8"
>
  <div class="max-w-md w-full space-y-8">
    {#if user}
      <!-- User is logged in -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Welcome!</h2>
        <div
          class="bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-800"
        >
          <p class="text-zinc-400 mb-4">You are logged in as:</p>
          <p class="font-medium text-white mb-6">{user.email}</p>
          <button
            on:click={handleSignOut}
            class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    {:else}
      <!-- Login form -->
      <div>
        <h2 class="text-3xl font-bold text-center text-white mb-8">Sign In</h2>

        <form on:submit|preventDefault={handleLogin} class="space-y-6">
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-zinc-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              bind:value={email}
              required
              class="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder:text-zinc-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-zinc-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              bind:value={password}
              required
              class="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder:text-zinc-500"
              placeholder="Enter your password"
            />
          </div>

          {#if error}
            <div
              class="bg-red-950/50 border border-red-800 text-red-400 px-4 py-3 rounded-md text-sm"
            >
              {error}
            </div>
          {/if}

          <button
            type="submit"
            disabled={loading}
            class="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    {/if}
  </div>
</div>
