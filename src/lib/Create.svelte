<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Projecto } from "./database.types";
  import { user } from "./store";
  import { supabase } from "./supabaseClient";

  let {
    showCreate = $bindable(),
    project = $bindable(),
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

  let more = $state(data.more.join());
  let lang = $state(data.lang.join());
  let isValid = $derived(data.name);

  // $effect(() => {
  //   if (project) {
  //   }
  // });

  function handleSubmit() {
    if ($user) {
      loading = true;
      error = "";
      if (isValid) {
        data.more = more.split(",");
        data.lang = lang.split(",");
        if (project) {
          supabase
            .from("projects")
            .upsert(data)
            .then((result) => {
              if (result.error) {
                error = result.error.message;
                loading = false;
              } else {
                loading = false;
                showCreate = false;
              }
            });
        } else {
          supabase
            .from("projects")
            .insert(data)
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
        }
      } else {
        error = "Missing";
      }
    } else {
      error = "Error";
    }
  }
</script>

<div class="form">
  <div class="main">
    <div class="columns">
      {#if !project}
        <label>
          <span>Name*</span>
          <input type="text" bind:value={data.name} />
        </label>
      {/if}
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
        <input type="text" bind:value={lang} />
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
        <input type="text" bind:value={more} />
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
      class="login"
      disabled={!isValid}
      style:opacity={!isValid ? 0.2 : 1}
      onclick={handleSubmit}
    >
      {#if loading}
        <span>Loading...</span>
      {:else}
        <span>Create</span>
      {/if}
    </button>
  </div>
</div>

<style lang="scss">
  .form {
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
      min-width: 50vw;
      max-height: 100vw;
    }
    .columns {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1em;
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
        field-sizing: content;
      }
      textarea {
        min-height: 80px;
        resize: vertical;
      }
    }
    .actions {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 1em;
      padding: 2em;
      padding-top: 0;
      .error {
        color: red;
        font-size: x-small;
        max-width: 200px;
        position: absolute;
        left: 4em;
      }
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
