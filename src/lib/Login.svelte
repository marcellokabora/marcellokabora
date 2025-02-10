<script lang="ts">
  import { supabase } from "./supabaseClient";

  let { showModal = $bindable(), user = $bindable() } = $props();
  let email = $state("");
  let password = $state("");

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const response = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log(response);

    user = response.data.user;

    showModal = false;
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
  <button type="submit">Login</button>
</form>

<style lang="scss">
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
  }
</style>
