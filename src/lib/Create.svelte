<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Projecto } from "./database.types";
  import { productPlaceholder } from "./functions";
  import { user } from "./store";
  import { supabase } from "./supabaseClient";

  let {
    showCreate = $bindable(),
    project = $bindable(),
  }: {
    showCreate: boolean;
    project?: Projecto | null;
  } = $props();

  let loading = $state(false);
  let error = $state("");
  let data: Projecto = $state(initData());
  // svelte-ignore state_referenced_locally
  let more = $state(data.more.join());
  // svelte-ignore state_referenced_locally
  let lang = $state(data.lang.join());
  let isValid = $derived(data.name);
  let showConfirm = $state(false);

  $effect(() => {
    if (showCreate) {
      showConfirm = false;
    }
  });

  function initData() {
    return project
      ? project
      : {
          ...productPlaceholder,
          user_id: $user?.id,
          email: $user?.email ?? "",
        };
  }

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

                goto("/projecto/" + data.name);
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
                data = initData();
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

  function onDelete() {
    supabase.storage
      .from("marcellokabora")
      .remove([data.cover, ...data.gallery]);
    supabase
      .from("projects")
      .delete()
      .eq("id", data.id!)
      .then(() => {
        goto("/projectos");
      });
  }
</script>

<div class="form">
  <div class="main">
    <div class="columns">
      <label>
        <span>Name*</span>
        <input type="text" bind:value={data.name} />
      </label>
      <label>
        <span>Date</span>
        <input type="date" bind:value={data.date} />
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
        <input type="text" bind:value={lang} />
      </label>
      <label>
        <span>Code</span>
        <input type="text" bind:value={data.code} />
      </label>
      <label>
        <span>Type</span>
        <select bind:value={data.type}>
          <option value="design">Design</option>
          <option value="website">Website</option>
          <option value="webapp">Webapp</option>
        </select>
      </label>
      <label>
        <span>Link</span>
        <input type="text" bind:value={data.link} />
      </label>
      <label>
        <span>Related</span>
        <input type="text" bind:value={more} />
      </label>
    </div>
    <label>
      <span>Infos</span>
      <textarea bind:value={data.info}></textarea>
    </label>
  </div>
  <div class="actions">
    <div class="block">
      {#if project}
        <div>
          {#if showConfirm}
            <button class="confirm" onclick={onDelete}>
              <i class="material-icons">check</i>
              <span>Confirm</span>
            </button>
          {:else}
            <button class="delete" onclick={() => (showConfirm = true)}>
              <i class="material-icons">delete</i>
              <span>Delete</span>
            </button>
          {/if}
        </div>
      {/if}
      {#if error}
        <span class="error">{error}</span>
      {/if}
    </div>
    <div class="block">
      <button onclick={() => (showCreate = false)}>Cancel </button>
      <button
        class="login"
        disabled={!isValid}
        style:opacity={!isValid ? 0.2 : 1}
        onclick={handleSubmit}
      >
        {#if loading}
          <span>Loading...</span>
        {:else}
          <span>{project ? "Update" : "Create"}</span>
        {/if}
        <i class="material-icons">save</i>
      </button>
    </div>
  </div>
</div>

<style>
  .form {
    display: flex;
    flex-direction: column;
    color: rgb(20, 20, 20);
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow: auto;
    padding: 2em;
    width: 80vw;
    max-height: 100vw;
    max-width: 600px;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1em;
  }
  label {
    display: flex;
    flex-direction: column;
    span {
      font-size: small;
    }
    input,
    textarea,
    select {
      padding: 1em;
      border-radius: 0.5em;
      border: none;
      background-color: rgba(255, 255, 255, 0.4);
      border: 1px solid silver;
    }
    select {
      height: 45px;
    }
    textarea {
      field-sizing: content;
      min-height: 80px;
      resize: vertical;
    }
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    padding: 2em;
    padding-top: 0;
    .error {
      color: red;
      font-size: x-small;
    }
    .block {
      display: flex;
      align-items: center;
      gap: 1em;
    }
    button {
      display: flex;
      align-items: center;
      gap: 1em;
      &.login,
      &.delete,
      &.confirm {
        background-color: rgb(41, 41, 41);
        color: white;
        border-radius: 100px;
        padding: 1em 1.5em;
      }
      &.delete {
        color: red;
        border: 1px solid red;
        background-color: transparent;
      }
      &.confirm {
        color: white;
        background-color: red;
      }
    }
  }
</style>
