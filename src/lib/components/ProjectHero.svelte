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
  class="relative flex items-center overflow-hidden min-h-[60vh]"
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
  <div class="container mx-auto max-w-6xl px-6 py-20 pt-32 w-full text-center">
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
        class="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10"
        in:fly={{ y: 20, duration: 600, delay: 350 }}
      >
        {project.info.length > 260
          ? project.info.slice(0, 260).trimEnd() + "…"
          : project.info}
      </p>
    {/if}

    <!-- Metadata bar -->
    <div
      class="inline-flex flex-wrap items-center justify-center gap-x-1 gap-y-2"
      in:fly={{ y: 20, duration: 600, delay: 450 }}
    >
      <!-- Date -->
      {#if project.date}
        <div class="flex items-center gap-1.5 text-zinc-500 text-sm">
          <Icon
            icon="material-symbols:event-outline"
            class="text-base shrink-0"
          />
          <span>{formatDate(project.date)}</span>
        </div>
      {/if}

      <!-- GitHub Repo -->
      {#if project.code}
        <span class="text-zinc-700 px-1">·</span>
        <a
          href={`//github.com/marcellokabora/${project.code}`}
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline flex items-center gap-1.5 text-zinc-400 text-sm hover:text-white transition-colors duration-200"
        >
          <Icon icon="mdi:github" class="text-base shrink-0" />
          <span>Github</span>
        </a>
      {/if}

      <!-- Website -->
      {#if project.link}
        <span class="text-zinc-700 px-1">·</span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline flex items-center gap-1.5 text-zinc-400 text-sm hover:text-white transition-colors duration-200"
        >
          <Icon
            icon="material-symbols:captive-portal"
            class="text-base shrink-0"
          />
          <span>Website</span>
        </a>
      {/if}

      <!-- Language tags -->
      {#if project.lang}
        <span class="text-zinc-700 px-1 mx-1">|</span>
        <div class="flex flex-wrap items-center gap-1.5">
          {#each project.lang.split(",") as lang (lang)}
            <a
              href={getLang(lang)?.url}
              target="_blank"
              rel="noopener noreferrer"
              class="no-underline px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-400 hover:bg-purple-500/15 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-200"
            >
              {lang.trim().charAt(0).toUpperCase() +
                lang.trim().slice(1).toLowerCase()}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
