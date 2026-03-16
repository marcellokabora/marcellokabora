<script lang="ts">
  import type { Project } from "$lib/types/project.types";
  import MetaTags from "$lib/components/MetaTags.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import { fade, fly as flyAnim } from "svelte/transition";
  import Icon from "@iconify/svelte";

  let { data } = $props();

  let projects = data.projects?.sort(
    (a: Project, b: Project) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf(),
  );

  let scrollY = $state(0);

  // Calculate category counts
  const categoryCounts = $derived(() => {
    const counts: Record<string, number> = {};

    projects.forEach((project: Project) => {
      const type = project.type?.toLowerCase() || "other";
      counts[type] = (counts[type] || 0) + 1;
    });

    return counts;
  });

  // Generate stats for PageHero
  const heroStats = $derived(() => {
    const counts = categoryCounts();
    const stats = [];

    if (counts.webapp) {
      stats.push({
        value: `${counts.webapp}`,
        label: "Webapp",
        icon: "material-symbols:web",
      });
    }
    if (counts.website) {
      stats.push({
        value: `${counts.website}`,
        label: "Website",
        icon: "material-symbols:language",
      });
    }
    if (counts.design) {
      stats.push({
        value: `${counts.design}`,
        label: "Design",
        icon: "material-symbols:palette-outline",
      });
    }

    return stats;
  });
</script>

<svelte:window bind:scrollY />

<MetaTags
  title="Marcello Annicchiarico | Projects"
  url="https://marcellokabora.com/projects"
/>

<div
  class="relative flex items-end overflow-hidden min-h-[60vh]"
  in:fade={{ duration: 800 }}
>
  <div class="absolute inset-0 -z-10">
    <img
      src="/photo/coding-blue.webp"
      alt="Projects background"
      class="w-full h-full object-cover scale-105"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"
    ></div>
    <div
      class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none"
    ></div>
  </div>
  <div class="container mx-auto max-w-6xl px-6 pb-14 pt-40 w-full">
    <div in:flyAnim={{ y: -16, duration: 500, delay: 150 }}>
      <span
        class="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full text-xs font-semibold uppercase tracking-widest bg-cyan-500/20 border border-cyan-500/30 text-cyan-300"
      >
        <Icon icon="material-symbols:folder-outline" class="text-sm" />
        {projects.length} Projects Completed
      </span>
    </div>
    <h1
      class="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
      in:flyAnim={{ y: 30, duration: 700, delay: 250 }}
    >
      Projects
    </h1>
    <p
      class="text-lg text-zinc-300 max-w-xl mb-10"
      in:flyAnim={{ y: 20, duration: 600, delay: 350 }}
    >
      A collection of my successful projects
    </p>
    <div
      class="flex flex-wrap gap-3"
      in:flyAnim={{ y: 20, duration: 600, delay: 450 }}
    >
      {#each heroStats() as stat}
        <div
          class="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/50 backdrop-blur-md border border-cyan-500/20"
        >
          <Icon icon={stat.icon} class="text-cyan-400 text-xl" />
          <div>
            <div class="text-xl font-bold text-white">{stat.value}</div>
            <div class="text-xs text-zinc-400">{stat.label}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="container mx-auto max-w-6xl px-6">
  <section class="py-16">
    <Projects {projects} />
  </section>
</div>
