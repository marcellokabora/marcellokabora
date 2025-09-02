<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Projecto } from "./database.types";
  import { productPlaceholder, saveProject, deleteProject } from "./functions";
  import { user } from "./authStore";
  import { page } from "$app/state";
  import Icon from "@iconify/svelte";
  import { marked } from "marked";

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
  let showPreview = $state(false);
  let textarea: HTMLTextAreaElement | undefined = $state();

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
          user_id: $user?.uid,
          email: $user?.email ?? "",
        };
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();

    if (!isValid) return;

    loading = true;
    error = undefined;

    try {
      const result = await saveProject(data);

      if (result.success) {
        showCreate = false;
        // Update the data with the new ID if it was a create operation
        if (result.id && !data.id) {
          data.id = result.id;
        }
        if (page.params.id !== data.name) {
          goto("/project/" + data.name);
        }
      } else {
        error = result.error;
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      error = "An unexpected error occurred";
    } finally {
      loading = false;
    }
  }

  async function handleDelete() {
    if (!project?.id) return;

    loading = true;
    error = undefined;

    try {
      const result = await deleteProject(project);

      if (result.success) {
        goto("/");
      } else {
        error = result.error;
        showConfirm = false;
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      error = "An unexpected error occurred";
      showConfirm = false;
    } finally {
      loading = false;
    }
  }
</script>

<form class="flex flex-col h-full text-[rgb(20,20,20)]" onsubmit={handleSubmit}>
  <!-- Scrollable content area -->
  <div class="flex-1 overflow-auto">
    <div class="flex flex-col gap-6 p-1">
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
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-700">Infos</span>
        </div>
        <div class="relative">
          {#if showPreview}
            <div
              class="p-2.5 rounded-lg border border-gray-300 bg-white/80 min-h-[300px] max-h-[500px] overflow-y-auto prose max-w-none"
            >
              {@html marked(data.info || "")}
            </div>
          {:else}
            <textarea
              bind:this={textarea}
              name="info"
              bind:value={data.info}
              autocomplete="off"
              class="p-2.5 rounded border border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none min-h-[150px] resize-y w-full font-mono"
            ></textarea>
          {/if}
          <div class="absolute bottom-2 right-2 text-xs text-gray-500">
            {data.info?.length || 0}/1000
          </div>
        </div>
      </label>
    </div>
  </div>

  <!-- Fixed actions at bottom -->
  <div class="border-t border-gray-200 pt-4 mt-4 bg-white">
    <div class="flex justify-between items-center gap-4">
      <div class="flex items-center gap-4">
        {#if project}
          <div>
            {#if showConfirm}
              <button
                type="button"
                class="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 cursor-pointer transition-colors"
                onclick={handleDelete}
                disabled={loading}
              >
                <Icon icon="material-symbols:check" />
                <span>{loading ? "Deleting..." : "Confirm"}</span>
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
      {#if error}
        <span class="text-red-500 text-sm font-medium">{error}</span>
      {/if}
    </div>
  </div>
</form>
