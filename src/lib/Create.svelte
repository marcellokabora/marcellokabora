<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Projecto } from "./database.types";
  import { productPlaceholder } from "./functions";
  import { user } from "./store";
  import { page } from "$app/state";
  import { enhance } from "$app/forms";
  import Icon from "@iconify/svelte";

  let {
    showCreate = $bindable(),
    project = $bindable(),
    projects,
  }: {
    showCreate: boolean;
    project?: Projecto | null;
    projects: Projecto[] | null;
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
  class="flex flex-col text-[rgb(20,20,20)]"
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
  <div
    class="flex flex-col gap-6 overflow-auto w-[80vw] max-h-[100vw] max-w-[600px]"
  >
    <div class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Name*</span>
        <input
          name="name"
          type="text"
          bind:value={data.name}
          autocomplete="off"
          class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        />
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Date*</span>
        <input
          name="date"
          type="date"
          bind:value={data.date}
          autocomplete="off"
          class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        />
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Type</span>
        <select
          name="type"
          bind:value={data.type}
          class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        >
          <option value="design">Design</option>
          <option value="website">Website</option>
          <option value="webapp">Webapp</option>
        </select>
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Title*</span>
        <input
          name="title"
          type="text"
          bind:value={data.title}
          autocomplete="off"
          class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        />
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Slogan</span>
        <input
          name="slogan"
          type="text"
          bind:value={data.slogan}
          autocomplete="off"
          class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        />
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Lang</span>
        <input
          name="lang"
          type="text"
          bind:value={data.lang}
          autocomplete="off"
          class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        />
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Github</span>
        <input
          name="code"
          type="text"
          bind:value={data.code}
          autocomplete="off"
          class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        />
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Link</span>
        <input
          name="link"
          type="text"
          bind:value={data.link}
          autocomplete="off"
          class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        />
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Youtube</span>
        <input
          name="youtube"
          type="text"
          bind:value={data.youtube}
          autocomplete="off"
          class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        />
      </label>
    </div>
    <label class="flex flex-col gap-1">
      <span class="text-sm font-medium text-gray-700">Infos</span>
      <textarea
        name="info"
        bind:value={data.info}
        autocomplete="off"
        class="p-2.5 rounded-lg border border-gray-300 bg-white/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none min-h-[80px] resize-y"
      ></textarea>
    </label>
    <div class="hidden">
      <input name="id" type="text" value={data.id} />
      <input name="user_id" type="text" value={$user?.id} />
      <input name="email" type="text" value={$user?.email} />
    </div>
  </div>
  <div
    class="flex justify-between items-center gap-4 border-t border-gray-200 pt-6"
  >
    <div class="flex items-center gap-4">
      {#if project}
        <div>
          {#if showConfirm}
            <button
              type="button"
              class="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 cursor-pointer transition-colors"
              onclick={() => formDelete?.requestSubmit()}
            >
              <Icon icon="material-symbols:check" />
              <span>Confirm</span>
            </button>
          {:else}
            <button
              class="flex items-center gap-2 border border-red-500 text-red-500 hover:bg-red-50 rounded-lg px-4 py-2 bg-transparent cursor-pointer transition-colors"
              onclick={() => (showConfirm = true)}
            >
              <Icon icon="material-symbols:delete" />
              <!-- <span>Delete</span> -->
            </button>
          {/if}
        </div>
      {/if}
      {#if error}
        <span class="text-red-500 text-sm font-medium">{error}</span>
      {/if}
    </div>
    <div class="flex items-center gap-4">
      <button
        onclick={(e) => (showCreate = false)}
        class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
        type="button"
      >
        Cancel
      </button>
      <button
        class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
        disabled={!isValid}
        type="submit"
      >
        {#if loading}
          <span>Loading...</span>
        {:else}
          <span>{project ? "Update" : "Create"}</span>
        {/if}
        <Icon icon="material-symbols:save" />
      </button>
    </div>
  </div>
</form>

<form
  class="flex flex-col text-[rgb(20,20,20)]"
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
