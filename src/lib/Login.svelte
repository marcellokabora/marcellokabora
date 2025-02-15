<script lang="ts">
  import { enhance } from "$app/forms";
  import type { User } from "@supabase/supabase-js";
  import { user } from "./store";

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
>
  <label>
    <span>Email</span>
    <!-- svelte-ignore a11y_autofocus -->
    <input
      name="email"
      type="email"
      autofocus
      placeholder="Email"
      autocomplete=""
      bind:value={email}
    />
  </label>
  <label>
    <span>Password</span>
    <input
      name="password"
      type="password"
      placeholder="Email"
      autocomplete=""
      bind:value={password}
    />
  </label>
  <button disabled={loading || !valid} type="submit">
    {#if loading}
      <span>Loading...</span>
    {:else}
      <span>Login</span>
      <i class="material-icons">login</i>
    {/if}
  </button>
  {#if error}
    <div class="error">{error}</div>
  {/if}
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;
    label {
      display: flex;
      flex-direction: column;
      span {
        font-size: small;
      }
    }
    input {
      flex: 1;
      padding: 1em 1.5em;
      border-radius: 0.5em;
      border: none;
      background-color: rgba(255, 255, 255, 0.4);
      border: 1px solid silver;
    }
    button {
      margin-top: 1em;
      border-radius: 100px;
      background-color: black;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      padding: 1em 1.5em;
      position: relative;
      i {
        zoom: 0.8;
        position: absolute;
        right: 1em;
      }
    }
    .error {
      font-size: small;
      color: red;
      text-align: center;
    }
  }
</style>
