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
      website: "from-primary-600 to-secondary-500",
      app: "from-primary-600 to-primary-500",
      dashboard: "from-secondary-500 to-secondary-600",
      ecommerce: "from-primary-500 to-primary-600",
      design: "from-secondary-600 to-secondary-500",
      default: "from-slate-600 to-zinc-500",
    };
    return colorMap[type?.toLowerCase() || "default"] || colorMap.default;
  }
</script>

<section class="py-24 px-4 w-full bg-neutral-900">
  <div class="max-w-7xl mx-auto">
    <h2
      class="text-sm font-bold text-primary-400 uppercase tracking-widest mb-2 text-center"
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
        {@const desktopHeights = [
          "md:h-64",
          "md:h-80",
          "md:h-72",
          "md:h-96",
          "md:h-64",
          "md:h-88",
          "md:h-72",
          "md:h-80",
          "md:h-96",
          "md:h-64",
          "md:h-88",
          "md:h-72",
        ]}
        {@const desktopHeight = desktopHeights[index % desktopHeights.length]}
        <a
          href="/project/{project.name}"
          class="relative group rounded-2xl overflow-hidden cursor-pointer h-80 {desktopHeight} bg-zinc-900 border border-slate-800 hover:border-secondary-500/50 transition-all duration-300 block mb-6 break-inside-avoid"
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

          <!-- Gradient Overlay (Always Visible) -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/60"
          ></div>

          <!-- Content Overlay -->
          <div
            class="absolute inset-0 flex flex-col justify-end p-6 pb-5 transform transition-all duration-300"
          >
            <div
              class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              {#if project.type}
                <span
                  class="text-secondary-400 font-mono text-xs uppercase tracking-wider mb-1.5 inline-block opacity-80 group-hover:opacity-100"
                  >{project.type}</span
                >
              {/if}
              <h4
                class="text-2xl md:text-3xl font-bold text-white mb-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              >
                {project.title}
              </h4>
              {#if project.slogan}
                <p
                  class="text-zinc-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {project.slogan}
                </p>
              {/if}
              <div
                class="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Project
                <svg
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </div>
        </a>
      {/each}
    </div>

    <!-- Explore More Link -->
    <div class="flex justify-center mt-12">
      <a
        href="/projects"
        class="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-primary-400 rounded-full text-white transition-all duration-300"
      >
        <svg
          class="w-5 h-5 text-primary-400"
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
