<script lang="ts">
  import type { Project } from "$lib/types/project.types.js";
  import { formatDate, getImg, imgPlaceholder } from "$lib/utils/functions";
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";

  interface Props {
    projects: Project[];
    hideSearch?: boolean;
  }

  let { projects, hideSearch }: Props = $props();

  let search = $state("");
  let filter = $state("");

  const filterOptions = [
    { type: "webapp", icon: "mdi:web", label: "Webapp" },
    { type: "website", icon: "mdi:web-check", label: "Website" },
    { type: "mobile", icon: "mdi:cellphone", label: "Mobile" },
    { type: "design", icon: "mdi:palette", label: "Design" },
  ];

  let filtered: Project[] = $derived(
    projects
      .filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((item) => (filter ? item.type === filter : item))
  );

  let dropdownOpen = $state(false);
  let dropdownEl: HTMLDivElement | undefined = $state();

  const selectedOption = $derived(
    filterOptions.find((option) => option.type === filter),
  );

  function toggleFilter(type: string) {
    filter = filter === type ? "" : type;
  }

  function selectFilter(type: string) {
    filter = type;
    dropdownOpen = false;
  }

  function handleWindowClick(event: MouseEvent) {
    if (dropdownOpen && !dropdownEl?.contains(event.target as Node)) {
      dropdownOpen = false;
    }
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") dropdownOpen = false;
  }

  function getProjectCount(type: string): number {
    return projects.filter((project) => project.type === type).length;
  }

  function getProjectImageUrl(project: Project): string {
    if (!project.cover) return imgPlaceholder;
    return getImg(project.cover);
  }
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKeydown} />

<div class="grid gap-10 sm:gap-16" in:fly={{ y: 100, duration: 1000, delay: 100 }}>
  {#if !hideSearch}
    <div class="flex items-center justify-center flex-col gap-4 sm:gap-8">
      <div
        class="h-11 sm:h-10 border border-zinc-700 dark:border-zinc-600 flex rounded-full overflow-hidden w-full sm:w-70 max-w-md bg-white dark:bg-zinc-900"
      >
        <input
          type="text"
          bind:value={search}
          placeholder="Search..."
          class="px-4 border-none focus:outline-none w-full text-center bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
        />
      </div>

      <!-- Custom select (mobile) -->
      <div class="relative w-full max-w-md sm:hidden" bind:this={dropdownEl}>
        <button
          type="button"
          onclick={() => (dropdownOpen = !dropdownOpen)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          class="w-full h-11 px-4 flex items-center gap-3 rounded-full border bg-[#1a1a1a] text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:ring-[3px] focus:ring-purple-500/10 {dropdownOpen ||
          filter
            ? 'border-purple-400'
            : 'border-zinc-800'}"
        >
          <Icon
            icon={selectedOption?.icon ?? "mdi:view-grid-outline"}
            class="text-lg text-purple-400"
          />
          <span class="flex-1 text-left">
            {selectedOption?.label ?? "All projects"}
          </span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-zinc-700/50">
            {selectedOption
              ? getProjectCount(selectedOption.type)
              : projects.length}
          </span>
          <Icon
            icon="mdi:chevron-down"
            class="text-xl text-zinc-400 transition-transform duration-300 {dropdownOpen
              ? 'rotate-180'
              : ''}"
          />
        </button>

        {#if dropdownOpen}
          <ul
            role="listbox"
            transition:fly={{ y: -8, duration: 200 }}
            class="absolute z-30 mt-2 w-full p-2 grid gap-1 rounded-2xl border border-zinc-800 bg-[#1a1a1a]/95 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            {#each [{ type: "", icon: "mdi:view-grid-outline", label: "All projects" }, ...filterOptions] as option}
              <li role="option" aria-selected={filter === option.type}>
                <button
                  type="button"
                  onclick={() => selectFilter(option.type)}
                  class="w-full h-11 px-3 flex items-center gap-3 rounded-lg transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] {filter ===
                  option.type
                    ? 'bg-purple-500/15 text-purple-400'
                    : 'text-zinc-300 hover:bg-zinc-800'}"
                >
                  <Icon icon={option.icon} class="text-lg" />
                  <span class="flex-1 text-left">{option.label}</span>
                  <span class="text-xs px-2 py-0.5 rounded-full bg-zinc-700/50">
                    {option.type
                      ? getProjectCount(option.type)
                      : projects.length}
                  </span>
                </button>
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <!-- Filter pills (tablet and up) -->
      <div class="hidden sm:flex flex-wrap justify-center gap-2">
        {#each filterOptions as option}
          <button
            onclick={() => toggleFilter(option.type)}
            class="px-4 h-10 border rounded-full transition-all flex items-center gap-2 {filter ===
            option.type
              ? 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700'
              : 'bg-zinc-800/50 dark:bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600'}"
          >
            <Icon icon={option.icon} class="text-lg" />
            {option.label}
            <span
              class="text-xs px-2 py-0.5 rounded-full {filter === option.type
                ? 'bg-white/20'
                : 'bg-zinc-700/50'}"
            >
              {getProjectCount(option.type)}
            </span>
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
  >
    {#if filtered[0]}
      {#each filtered as item (item.name)}
        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10 group bg-white dark:bg-zinc-900"
        >
          <a
            href="/project/{item.name}"
            data-sveltekit-preload-data="hover"
            class="no-underline text-zinc-900 dark:text-zinc-100"
          >
            <div class="relative">
              <img
                src={getProjectImageUrl(item)}
                alt={item.name}
                class="w-full h-64 object-cover transition-all duration-500 group-hover:brightness-50"
                onerror={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== imgPlaceholder) {
                    target.src = imgPlaceholder;
                  }
                }}
              />
              <div
                class="absolute inset-0 flex items-center justify-center flex-col text-white opacity-0 transition-opacity duration-500 hover:opacity-100 z-10"
              >
                <div
                  class="text-xl capitalize font-semibold text-secondary-300"
                >
                  {item.type}
                </div>
                {#if item.date}
                  <div class="opacity-80 text-secondary-200">
                    {formatDate(item.date)}
                  </div>
                {/if}
              </div>
            </div>
            <div
              class="p-4 -mt-1 capitalize transition-all duration-500 text-center"
            >
              <div
                class="font-bold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400"
              >
                {item.title}
              </div>
              <div class="text-base mt-1 text-zinc-600 dark:text-zinc-400">
                {item.slogan}
              </div>
            </div>
          </a>
        </div>
      {/each}
    {:else}
      <div class="text-center text-zinc-600 dark:text-zinc-400">
        No projects found.
      </div>
    {/if}
  </div>
</div>
