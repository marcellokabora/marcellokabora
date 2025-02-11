<script lang="ts">
  import { user } from "./store";
  import { supabase } from "./supabaseClient";

  let { showModal = $bindable() } = $props();
  let email = $state("");
  let password = $state("");
  let error = $state("");
  let loading = $state(false);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    error = "";
    loading = true;
    supabase.auth
      .signInWithPassword({
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.error) {
          error = response.error.message;
          loading = false;
        } else {
          user.set(response.data.user);
          loading = false;
          showModal = false;
        }
      });
  }
</script>

<form method="POST" action="?/login" onsubmit={handleSubmit}>
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
  <button disabled={loading} type="submit"
    >{loading ? "Loading..." : "Login"}</button
  >
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
    input,
    button {
      flex: 1;
      padding: 1em 1.5em;
      border-radius: 0.5em;
      border: none;
      background-color: rgb(230, 230, 230);
    }
    button {
      margin-top: 1em;
    }
    .error {
      font-size: small;
      color: red;
      text-align: center;
    }
  }
</style>
