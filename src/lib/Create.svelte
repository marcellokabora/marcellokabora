<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Projecto } from "./database.types";
  import { user } from "./store";
  import { supabase } from "./supabaseClient";

  let {
    showCreate = $bindable(),
    project,
  }: {
    showCreate: boolean;
    project?: Projecto;
  } = $props();
  let loading = $state(false);
  let error = $state("");
  let data: Projecto = $state(
    project
      ? project
      : {
          name: "",
          title: "",
          slogan: "",
          info: "",
          lang: [],
          code: "",
          link: "",
          cover: "",
          type: "",
          more: [],
          date: new Date().toISOString(),
          gallery: [],
          user_id: $user?.id,
          email: $user?.email ?? "",
        }
  );

  let isValid = $derived(data.name);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if ($user) {
      loading = true;
      error = "";
      if (isValid) {
        supabase
          .from("projects")
          .insert([data])
          .then((result) => {
            if (result.error) {
              error = result.error.message;
              loading = false;
            } else {
              loading = false;
              showCreate = false;
              goto("/projecto/" + data.name);
            }
          });
      } else {
        error = "Missing";
      }
    } else {
      error = "Error";
    }
  }
</script>

<form onsubmit={handleSubmit}>
  <div class="main">
    <div class="columns">
      <label>
        <span>Name*</span>
        <input type="text" bind:value={data.name} />
      </label>
      <label>
        <span>Title</span>
        <input type="text" bind:value={data.title} />
      </label>
      <label>
        <span>Slogan</span>
        <input type="text" bind:value={data.slogan} />
      </label>
      <label>
        <span>Lang</span>
        <input type="text" bind:value={data.lang} />
      </label>
      <label>
        <span>Code</span>
        <input type="text" bind:value={data.code} />
      </label>
      <label>
        <span>Link</span>
        <input type="text" bind:value={data.link} />
      </label>
      <label>
        <span>More</span>
        <input type="text" bind:value={data.more} />
      </label>
    </div>
    <label>
      <span>Infos</span>
      <textarea bind:value={data.info}></textarea>
    </label>
  </div>
  <div class="actions">
    {#if error}
      <span class="error">{error}</span>
    {/if}
    <button onclick={() => (showCreate = false)}>Cancel</button>
    <button
      type="submit"
      class="login"
      disabled={!isValid}
      style:opacity={!isValid ? 0.2 : 1}
    >
      {#if loading}
        <span>Loading...</span>
      {:else}
        <span>Create</span>
      {/if}
    </button>
  </div>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: rgb(20, 20, 20);
    .main {
      display: flex;
      flex-direction: column;
      gap: 1em;
      overflow: auto;
      padding: 2em;
    }
    .columns {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1em;
      max-width: 600px;
    }
    label {
      display: flex;
      flex-direction: column;
      span {
        font-size: small;
      }
      input,
      textarea {
        padding: 1em;
        border-radius: 0.5em;
        border: none;
        background-color: rgba(255, 255, 255, 0.4);
      }
      textarea {
        min-height: 80px;
      }
    }
    .error {
      color: red;
      font-size: small;
      max-width: 400px;
    }
    .actions {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 1em;
      padding: 2em;
      padding-top: 0;
      button {
        &.login {
          background-color: rgb(41, 41, 41);
          color: white;
          border-radius: 100px;
          padding: 1em 1.5em;
        }
      }
    }
  }
</style>
