<script lang="ts">
  import { enhance } from "$app/forms";
  import type { User } from "@supabase/supabase-js";
  import { user } from "./store";
  import Icon from "@iconify/svelte";

  let { showModal = $bindable() } = $props();
  let email = $state("");
  let password = $state("");
  let error = $state();
  let loading = $state(false);
  let valid = $derived(email && password);
</script>

<form
  method="POST"
  action="/?/login"
  use:enhance={() => {
    loading = true;
    error = null;
    return async ({ result }) => {
      loading = false;
      if (result.type === "success") {
        error = result?.data?.error;
        if (!error) {
          showModal = false;
          if (result?.data?.user) user.set(result.data.user as User);
        }
      }
    };
  }}
  class="flex flex-col gap-4 p-8"
>
  <label class="flex flex-col">
    <span class="text-sm">Email</span>
    <!-- svelte-ignore a11y_autofocus -->
    <input
      name="email"
      type="email"
      autofocus
      placeholder="Email"
      autocomplete=""
      bind:value={email}
      class="flex-1 p-4 px-6 rounded-lg bg-white/40 border border-gray-300"
    />
  </label>
  <label class="flex flex-col">
    <span class="text-sm">Password</span>
    <input
      name="password"
      type="password"
      placeholder="Email"
      autocomplete=""
      bind:value={password}
      class="flex-1 p-4 px-6 rounded-lg bg-white/40 border border-gray-300"
    />
  </label>
  <button
    disabled={loading || !valid}
    type="submit"
    class="mt-4 rounded-full bg-black text-white flex justify-center items-center gap-4 p-4 px-6 relative disabled:opacity-50"
  >
    {#if loading}
      <span>Loading...</span>
    {:else}
      <span>Login</span>
      <Icon
        icon="material-symbols:login"
        class="absolute right-4 text-2xl scale-80"
      />
    {/if}
  </button>
  {#if error}
    <div class="text-sm text-red-500 text-center">{error}</div>
  {/if}
</form>
