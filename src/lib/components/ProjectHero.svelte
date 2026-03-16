<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import type { Project } from "$lib/types/project.types";
  import {
    formatDate,
    getImg,
    getLang,
    imgPlaceholder,
  } from "$lib/utils/functions";

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<div
  class="relative flex items-end overflow-hidden min-h-[60vh]"
  in:fade={{ duration: 800 }}
>
  <!-- Background Image -->
  <div class="absolute inset-0 -z-10">
    <img
      src={project.cover ? getImg(project.cover) : imgPlaceholder}
      alt="{project.title} background"
      class="w-full h-full object-cover scale-105"
    />
    <!-- Progressive darkening overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"
    ></div>
    <!-- Fade to page background at bottom -->
    <div
      class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none"
    ></div>
  </div>

  <!-- Content -->
  <div class="container mx-auto max-w-6xl px-6 pb-14 pt-40 w-full">
    <!-- Project type badge -->
    {#if project.type}
      <div in:fly={{ y: -16, duration: 500, delay: 150 }}>
        <span
          class="inline-flex items-center px-3 py-1 mb-5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/15 text-zinc-300"
        >
          {project.type}
        </span>
      </div>
    {/if}

    <!-- Title -->
    <h1
      class="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
      in:fly={{ y: 30, duration: 700, delay: 250 }}
    >
      {project.title}
    </h1>

    <!-- Description -->
    {#if project.info}
      <p
        class="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10"
        in:fly={{ y: 20, duration: 600, delay: 350 }}
      >
        {project.info.length > 260
          ? project.info.slice(0, 260).trimEnd() + "…"
          : project.info}
      </p>
    {/if}

    <!-- Metadata bar — mirrors the screenshot design -->
    <div
      class="flex flex-wrap items-center gap-2"
      in:fly={{ y: 20, duration: 600, delay: 450 }}
    >
      <!-- Date -->
      {#if project.date}
        <div
          class="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-zinc-300 text-sm font-medium"
        >
          <Icon icon="material-symbols:event" class="text-zinc-400 text-base" />
          <span>{formatDate(project.date)}</span>
        </div>
      {/if}

      <!-- GitHub Repo -->
      {#if project.code}
        <a
          href={`//github.com/marcellokabora/${project.code}`}
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-zinc-300 text-sm font-medium hover:border-white/25 hover:text-white transition-all duration-200"
        >
          <Icon icon="mdi:github" class="text-base" />
          <span>Github Repo</span>
        </a>
      {/if}

      <!-- Website -->
      {#if project.link}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-zinc-300 text-sm font-medium hover:border-white/25 hover:text-white transition-all duration-200"
        >
          <Icon icon="material-symbols:captive-portal" class="text-base" />
          <span>Website</span>
        </a>
      {/if}

      <!-- Divider before language tags -->
      {#if project.lang}
        <div class="flex items-center text-zinc-600 px-1">
          <Icon icon="material-symbols:code" class="text-base" />
        </div>

        <!-- Language pills -->
        {#each project.lang.split(",") as lang (lang)}
          <a
            href={getLang(lang)?.url}
            target="_blank"
            rel="noopener noreferrer"
            class="no-underline px-4 py-2 rounded-full bg-purple-600/60 hover:bg-purple-500/80 text-white text-sm font-semibold border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-md transition-all duration-200"
          >
            {lang.trim().charAt(0).toUpperCase() +
              lang.trim().slice(1).toLowerCase()}
          </a>
        {/each}
      {/if}
    </div>
  </div>
</div>
