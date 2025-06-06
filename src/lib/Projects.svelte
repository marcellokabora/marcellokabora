<script lang="ts">
  import type { Projecto } from "$lib/database.types.js";
  import { formatDate, getImg, imgPlaceholder } from "$lib/functions";
  import Icon from "@iconify/svelte";

  interface Props {
    projects: Projecto[];
    hideSearch?: boolean;
  }

  let { projects, hideSearch }: Props = $props();

  let search = $state("");
  let filter = $state("");
  let selectedShadow = $state("hover:shadow-sm");

  const shadowOptions = [
    { name: "None", value: "" },
    { name: "Subtle", value: "hover:shadow-sm" },
    { name: "Default", value: "hover:shadow" },
    { name: "Medium", value: "hover:shadow-md" },
    { name: "Large", value: "hover:shadow-lg" },
    { name: "Extra Large", value: "hover:shadow-xl" },
  ];

  const filterOptions = [
    { type: "webapp", icon: "mdi:web", label: "Webapp" },
    { type: "website", icon: "mdi:web-check", label: "Website" },
    { type: "design", icon: "mdi:palette", label: "Design" },
  ];

  let filtered: Projecto[] = $state([]);

  function toggleFilter(type: string) {
    filter = filter === type ? "" : type;
  }

  $effect(() => {
    filtered = projects
      .filter(
        (item) =>
          item.name.includes(search.toLowerCase()) ||
          item.title.toLocaleLowerCase().includes(search.toLowerCase()),
      )
      .filter((item) => (filter ? item.type === filter : item));
  });
</script>

<div class="grid gap-16">
  {#if !hideSearch}
    <div
      class="flex items-center justify-center flex-col gap-4"
      data-aos="fade-up"
    >
      <div
        class="h-10 border border-gray-300 flex rounded-full overflow-hidden w-full max-w-md"
      >
        <input
          type="text"
          bind:value={search}
          placeholder="Search..."
          class="px-4 border-none focus:outline-none w-full"
        />
      </div>
      <div class="flex flex-wrap justify-center gap-2">
        {#each filterOptions as option}
          <button
            onclick={() => toggleFilter(option.type)}
            class="px-4 h-10 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 {filter ===
            option.type
              ? 'bg-blue-500/20 text-blue-600'
              : 'bg-white text-gray-600'}"
          >
            <Icon icon={option.icon} class="text-lg" />
            {option.label}
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
    data-aos="fade-up"
  >
    {#if filtered[0]}
      {#each filtered as item (item.name)}
        <div
          class="border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-sm group"
        >
          <a
            href="/project/{item.name}"
            data-sveltekit-preload-data="hover"
            class="no-underline text-black"
          >
            <div class="relative">
              <img
                src={item.cover ? getImg(item.cover) : imgPlaceholder}
                alt={item.name}
                class="w-full h-64 object-cover transition-all duration-500 group-hover:brightness-50"
              />
              <div
                class="absolute inset-0 flex items-center justify-center flex-col text-white opacity-0 transition-opacity duration-500 hover:opacity-100 z-10"
              >
                <div class="text-xl capitalize">{item.type}</div>
                {#if item.date}
                  <div class="opacity-60">{formatDate(item.date)}</div>
                {/if}
              </div>
            </div>
            <div
              class="p-4 -mt-1 capitalize opacity-80 transition-opacity duration-500 text-center"
            >
              <div class="font-bold text-lg">{item.title}</div>
              <div class="text-base mt-1">{item.slogan}</div>
            </div>
          </a>
        </div>
      {/each}
    {:else}
      <div class="text-center">No projects found.</div>
    {/if}
  </div>
</div>
