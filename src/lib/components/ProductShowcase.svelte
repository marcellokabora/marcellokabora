<script lang="ts">
  import type { Project } from "$lib/types/project.types";
  import { getImg } from "$lib/utils/functions";

  let {
    projects = [],
    totalCount,
  }: { projects: Project[]; totalCount?: number } = $props();

  // Take first 12 projects for showcase
  const showcaseProjects = projects.slice(0, 12);
  const total = totalCount ?? projects.length;

  // Helper to generate gradient colors based on project type
  function getProjectColor(type?: string) {
    const colorMap: Record<string, string> = {
      website: "from-blue-600 to-cyan-500",
      app: "from-purple-600 to-pink-500",
      dashboard: "from-orange-500 to-red-500",
      ecommerce: "from-emerald-500 to-teal-500",
      design: "from-violet-600 to-purple-500",
      default: "from-slate-600 to-zinc-500",
    };
    return colorMap[type?.toLowerCase() || "default"] || colorMap.default;
  }
</script>

<section class="py-24 px-4 w-full bg-neutral-900">
  <div class="max-w-7xl mx-auto">
    <h2
      class="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2 text-center"
    >
      Selected Works
    </h2>
    <h3 class="text-4xl font-bold text-white mb-12 text-center">
      Building the Extraordinary
    </h3>

    <div
      class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
    >
      {#each showcaseProjects as project, index}
        {@const heights = [
          "h-64",
          "h-80",
          "h-72",
          "h-96",
          "h-64",
          "h-88",
          "h-72",
          "h-80",
          "h-96",
          "h-64",
          "h-88",
          "h-72",
        ]}
        {@const height = heights[index % heights.length]}
        <a
          href="/project/{project.name}"
          class="relative group rounded-2xl overflow-hidden cursor-pointer {height} bg-zinc-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 block mb-6 break-inside-avoid"
        >
          <!-- Project Cover Image -->
          {#if project.cover}
            <img
              src={getImg(project.cover)}
              alt={project.title}
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          {:else}
            <!-- Fallback Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-br {getProjectColor(
                project.type
              )} opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            ></div>
            <div class="absolute inset-0 flex items-center justify-center p-10">
              <span class="text-zinc-700 font-bold text-4xl opacity-20"
                >{project.title}</span
              >
            </div>
          {/if}

          <!-- Hover Overlay -->
          <div
            class="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8"
          >
            {#if project.type}
              <span class="text-cyan-400 font-mono text-sm mb-2"
                >{project.type}</span
              >
            {/if}
            <h4 class="text-3xl font-bold text-white mb-2">{project.title}</h4>
            {#if project.slogan}
              <p class="text-zinc-300 text-sm mb-4">{project.slogan}</p>
            {/if}
            <div
              class="flex items-center gap-2 text-zinc-300 mt-4 font-semibold"
            >
              View Project
              <svg
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path></svg
              >
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- Explore More Link -->
    <div class="flex justify-center mt-12">
      <a
        href="/projects"
        class="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-purple-400 rounded-full text-white transition-all duration-300"
      >
        <svg
          class="w-5 h-5 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          ></path></svg
        >
        <span class="font-medium">Explore All {total} Projects</span>
        <svg
          class="w-5 h-5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path></svg
        >
      </a>
    </div>
  </div>
</section>
