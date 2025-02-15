<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Projecto } from "./database.types";
  import { productPlaceholder } from "./functions";
  import { user } from "./store";
  import { page } from "$app/state";
  import { enhance } from "$app/forms";

  let {
    showCreate = $bindable(),
    project = $bindable(),
  }: {
    showCreate: boolean;
    project?: Projecto | null;
  } = $props();

  let loading = $state(false);
  let error = $state();
  let data: Projecto = $state(initData());
  let isValid = $derived(data.name && data.date && data.title);
  let showConfirm = $state(false);
  let formDelete: HTMLFormElement | undefined = $state();

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
</script>

<form
  class="form"
  method="POST"
  action="/?/create"
  use:enhance={() => {
    loading = true;
    return async ({ result }) => {
      loading = false;
      if (result.type === "success") {
        error = result?.data?.error;
        if (!error) {
          showCreate = false;
          if (page.params.id !== data.name) goto("/project/" + data.name);
        }
      }
    };
  }}
>
  <div class="main">
    <div class="columns">
      <label>
        <span>Name*</span>
        <input name="name" type="text" bind:value={data.name} />
      </label>
      <label>
        <span>Date*</span>
        <input name="date" type="date" bind:value={data.date} />
      </label>
      <label>
        <span>Title*</span>
        <input name="title" type="text" bind:value={data.title} />
      </label>
      <label>
        <span>Slogan</span>
        <input name="slogan" type="text" bind:value={data.slogan} />
      </label>
      <label>
        <span>Lang</span>
        <input name="lang" type="text" bind:value={data.lang} />
      </label>
      <label>
        <span>Code</span>
        <input name="code" type="text" bind:value={data.code} />
      </label>
      <label>
        <span>Type</span>
        <select name="type" bind:value={data.type}>
          <option value="design">Design</option>
          <option value="website">Website</option>
          <option value="webapp">Webapp</option>
        </select>
      </label>
      <label>
        <span>Link</span>
        <input name="link" type="text" bind:value={data.link} />
      </label>
      <label>
        <span>Related</span>
        <input name="more" type="text" bind:value={data.more} />
      </label>
    </div>
    <label>
      <span>Infos</span>
      <textarea name="info" bind:value={data.info}></textarea>
    </label>
    <div class="hidden">
      <input name="id" type="text" value={data.id} />
    </div>
  </div>
  <div class="actions">
    <div class="block">
      {#if project}
        <div>
          {#if showConfirm}
            <button
              type="button"
              class="confirm"
              onclick={() => formDelete?.requestSubmit()}
            >
              <i class="material-icons">check</i>
              <span>Confirm</span>
            </button>
          {:else}
            <button class="delete" onclick={() => (showConfirm = true)}>
              <i class="material-icons">delete</i>
              <!-- <span>Delete</span> -->
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
        type="submit"
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
</form>

<form
  class="form"
  method="POST"
  action="/project/[id]?/delete"
  bind:this={formDelete}
  use:enhance={() => {
    return async ({ result }) => {
      if (result.type === "success") {
        goto("/");
      }
    };
  }}
></form>

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
