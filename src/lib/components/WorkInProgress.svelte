<script lang="ts">
  import Icon from "@iconify/svelte";
  import { getProjects } from "$lib/data/projects.remote";
</script>

<section
  class="relative py-24 px-4 w-full bg-[#0a0a0a] overflow-hidden"
  style="background-image: url('/blured/7echno.jpg'); background-size: cover; background-position: center;"
>
  <div class="absolute inset-0 bg-[#0a0a0a]/80"></div>
  <div class="relative z-10 max-w-5xl mx-auto">
    <p
      class="text-sm font-bold text-green-400 uppercase tracking-widest mb-2 text-center"
    >
      Founder Projects
    </p>

    <svelte:boundary>
      {#snippet pending()}
        <div class="text-center">
          <p class="text-zinc-400">Loading projects...</p>
        </div>
      {/snippet}

      {#snippet failed(error)}
        <div class="text-center">
          <p class="text-red-400">Failed to load projects</p>
        </div>
      {/snippet}

      {@const projects = await getProjects()}
      {@const fitm8Project = projects.find((p) => p.name === "fit-m8")}
      {@const technoProject = projects.find((p) => p.name === "7echno")}

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {#if fitm8Project}
          <div
            class="bg-[#1a1a1a]/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <img
              src="/logo/fit-m8-logo.png"
              alt="7echno"
              class="h-14 w-auto object-contain mb-8 mt-4"
            />
            <h5 class="font-bold text-white text-lg mb-1">FIT-M8</h5>
            <p class="text-zinc-400 text-sm mb-5">
              {fitm8Project.slogan ||
                "Swipe. Meet. Play. Discover local workout buddies."}
            </p>
            <div class="flex items-center gap-3 mt-auto">
              <a
                href="//fit-m8.app"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
              >
                <Icon icon="mdi:web" class="w-4 h-4" />
                <span>Visit</span>
              </a>
              <a
                href="//fit-m8.app/pitch"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                <Icon icon="mdi:presentation" class="w-4 h-4" />
                <span>Pitch</span>
              </a>
            </div>
          </div>
        {/if}

        {#if technoProject}
          <div
            class="bg-[#1a1a1a]/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <img
              src="/logo/7echno-white.png"
              alt="7echno"
              class="h-14 w-auto object-contain mb-8 mt-4"
            />
            <h5 class="font-bold text-white text-lg mb-1">7echno</h5>
            <p class="text-zinc-400 text-sm mb-5">
              {technoProject.slogan ||
                "An AI-powered streaming platform for the techno music scene."}
            </p>
            <div class="flex items-center gap-3 mt-auto">
              <a
                href="//7echno.com"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
              >
                <Icon icon="mdi:web" class="w-4 h-4" />
                <span>Visit</span>
              </a>
              <a
                href="/project/7echno-music"
                class="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                <Icon icon="mdi:presentation" class="w-4 h-4" />
                <span>Pitch</span>
              </a>
            </div>
          </div>
        {/if}
      </div>

      <!-- Call to Action -->
      <div
        class="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 mt-8"
      >
        <div class="flex items-start gap-4">
          <Icon
            icon="mdi:handshake"
            class="w-8 h-8 text-green-400 flex-shrink-0 mt-0.5"
          />
          <div class="flex-1">
            <h5 class="text-lg font-bold text-white mb-1">
              Looking for Partners & Investors
            </h5>
            <p class="text-zinc-400 text-sm">
              Join me in building the future of fitness and music technology.
              Let's create something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </svelte:boundary>
  </div>
</section>
