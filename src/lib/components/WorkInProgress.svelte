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
      Personal Project
    </p>

    <!-- Logo Hero -->
    <div class="flex justify-center my-16">
      <img
        src="/logo/7echno-white.png"
        alt="7echno"
        class="h-16 md:h-20 w-auto object-contain"
      />
    </div>

    <svelte:boundary>
      {#snippet pending()}
        <div class="text-center">
          <p class="text-zinc-400">Loading project...</p>
        </div>
      {/snippet}

      {#snippet failed(error)}
        <div class="text-center">
          <p class="text-red-400">Failed to load project</p>
        </div>
      {/snippet}

      {@const projects = await getProjects()}
      {@const technoProject = projects.find((p) => p.name === "7echno")}
      {@const musicProject = projects.find((p) => p.name === "7echno-music")}

      {#if technoProject}
        <!-- Stats Row -->
        <div class="grid grid-cols-3 gap-4 mb-10">
          <div
            class="bg-[#1a1a1a] border border-zinc-800 rounded-2xl p-6 text-center"
          >
            <div class="text-4xl font-bold text-green-400 mb-1">300+</div>
            <div class="text-sm text-zinc-500 uppercase tracking-wider">
              Artists
            </div>
          </div>
          <div
            class="bg-[#1a1a1a] border border-zinc-800 rounded-2xl p-6 text-center"
          >
            <div class="text-4xl font-bold text-green-400 mb-1">500+</div>
            <div class="text-sm text-zinc-500 uppercase tracking-wider">
              Mixes
            </div>
          </div>
          <div
            class="bg-[#1a1a1a] border border-zinc-800 rounded-2xl p-6 text-center"
          >
            <div class="text-4xl font-bold text-green-400 mb-1">150+</div>
            <div class="text-sm text-zinc-500 uppercase tracking-wider">
              Events
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div
          class="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 mb-8"
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
                Join me in building the future of music technology. Let's create
                something extraordinary together.
              </p>
            </div>
            <a
              href="//7echno.com"
              target="_blank"
              class="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
            >
              <span>Visit</span>
              <Icon icon="mdi:arrow-right" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Related Projects -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#if technoProject}
            <a
              href="/project/7echno"
              class="group bg-[#1a1a1a] border border-zinc-800 hover:border-green-500/50 rounded-2xl p-5 transition-all duration-300"
            >
              <div class="flex items-center gap-3 mb-3">
                <div
                  class="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30"
                >
                  <Icon icon="mdi:web" class="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h5 class="font-bold text-white">7echno Platform</h5>
                  <p class="text-xs text-zinc-500">Main Application</p>
                </div>
              </div>
              <p class="text-zinc-400 text-sm">{technoProject.slogan}</p>
            </a>
          {/if}

          {#if musicProject}
            <a
              href="/project/7echno-music"
              class="group bg-[#1a1a1a] border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-5 transition-all duration-300"
            >
              <div class="flex items-center gap-3 mb-3">
                <div
                  class="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30"
                >
                  <Icon icon="mdi:music" class="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h5 class="font-bold text-white">7echno Pitch</h5>
                  <p class="text-xs text-zinc-500">Pitch Deck</p>
                </div>
              </div>
              <p class="text-zinc-400 text-sm">
                {musicProject?.slogan || "Discover and share amazing music"}
              </p>
            </a>
          {/if}
        </div>
      {/if}
    </svelte:boundary>
  </div>
</section>
