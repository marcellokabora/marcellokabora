<script lang="ts">
  import { signInWithEmailAndPassword, signOut } from "firebase/auth";
  import { auth } from "$lib/config/firebase";
  import { onMount } from "svelte";

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

<svelte:head>
  <title>Login - Marcello Annicchiarico</title>
</svelte:head>

<div
  class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
>
  <div class="max-w-md w-full space-y-8">
    {#if user}
      <!-- User is logged in -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Welcome!</h2>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <p class="text-gray-600 mb-4">You are logged in as:</p>
          <p class="font-medium text-gray-900 mb-6">{user.email}</p>
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
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">
          Sign In
        </h2>

        <form on:submit|preventDefault={handleLogin} class="space-y-6">
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              bind:value={email}
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              bind:value={password}
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          {#if error}
            <div
              class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm"
            >
              {error}
            </div>
          {/if}

          <button
            type="submit"
            disabled={loading}
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    {/if}
  </div>
</div>
