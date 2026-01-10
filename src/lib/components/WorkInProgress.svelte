<script lang="ts">
  import Icon from "@iconify/svelte";
  import { getProjects } from "$lib/data/projects.remote";
</script>

<section class="py-24 px-4 w-full bg-neutral-900">
  <div class="max-w-7xl mx-auto">
    <h2
      class="text-sm font-bold text-green-400 uppercase tracking-widest mb-2 text-center"
    >
      Personal Project
    </h2>
    <h3 class="text-4xl font-bold text-white mb-12 text-center">7echno</h3>

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
        <!-- Main Project Showcase -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Left: Project Images Stack -->
          <div class="relative group h-[350px]">
            <!-- Image 1 - Bottom Layer -->
            <div
              class="absolute top-8 left-8 w-[85%] h-[85%] bg-neutral-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl transform rotate-[-3deg] group-hover:rotate-[-6deg] transition-transform duration-500 z-10"
            >
              <img
                src="/project/7echno/7echno-web1.png"
                alt="7echno Web 3"
                class="w-full h-full object-cover opacity-90"
              />
            </div>

            <!-- Image 2 - Middle Layer -->
            <div
              class="absolute top-4 left-4 w-[85%] h-[85%] bg-neutral-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl transform rotate-[2deg] group-hover:rotate-[4deg] transition-transform duration-500 z-20"
            >
              <img
                src="/project/7echno/7echno-web2.png"
                alt="7echno Web 2"
                class="w-full h-full object-cover opacity-95"
              />
            </div>

            <!-- Image 3 - Top Layer (Main) -->
            <div
              class="absolute top-0 left-0 w-[85%] h-[85%] bg-neutral-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl transform rotate-0 group-hover:scale-105 transition-all duration-500 z-30"
            >
              <img
                src="/project/7echno/7echno-web3.png"
                alt="7echno Web 1"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
            </div>

            <!-- Logo Overlay -->
            <div
              class="absolute -bottom-0 right-8 z-40 w-32 h-32 bg-neutral-950/80 backdrop-blur-sm border border-zinc-800 rounded-full shadow-xl overflow-hidden flex items-center justify-center"
            >
              <img
                src="/project/7echno-logo/logo1.png"
                alt="7echno Logo"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Right: Project Info -->
          <div class="flex flex-col justify-center">
            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div class="bg-neutral-950 border border-zinc-800 rounded-xl p-4">
                <div class="text-3xl font-bold text-green-500 mb-1">300+</div>
                <div class="text-sm text-zinc-500 uppercase tracking-wider">
                  Artists
                </div>
              </div>
              <div class="bg-neutral-950 border border-zinc-800 rounded-xl p-4">
                <div class="text-3xl font-bold text-green-400 mb-1">700</div>
                <div class="text-sm text-zinc-500 uppercase tracking-wider">
                  DJ Mixes
                </div>
              </div>
              <div class="bg-neutral-950 border border-zinc-800 rounded-xl p-4">
                <div class="text-3xl font-bold text-green-500 mb-1">150+</div>
                <div class="text-sm text-zinc-500 uppercase tracking-wider">
                  Events
                </div>
              </div>
            </div>

            <!-- Call to Action -->
            <div
              class="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 mb-6"
            >
              <div class="flex items-start gap-4">
                <Icon
                  icon="mdi:handshake"
                  class="w-8 h-8 text-green-400 flex-shrink-0 mt-1"
                />
                <div>
                  <h5 class="text-lg font-bold text-white mb-2">
                    Looking for Partners & Investors
                  </h5>
                  <p class="text-zinc-400 text-sm">
                    Join me in building the future of music technology. Let's
                    create something extraordinary together.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="//7echno.com"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <span>View Project</span>
              <Icon icon="mdi:arrow-right" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Related Projects -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#if technoProject}
            <a
              href="/project/7echno"
              class="group bg-neutral-950 border border-zinc-800 hover:border-green-500/50 rounded-2xl p-6 transition-all duration-300"
            >
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30"
                >
                  <Icon icon="mdi:web" class="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h5 class="text-lg font-bold text-white">7echno Platform</h5>
                  <p class="text-sm text-zinc-500">Main Application</p>
                </div>
              </div>
              <p class="text-zinc-400 text-sm">{technoProject.slogan}</p>
            </a>
          {/if}

          {#if musicProject}
            <a
              href="/project/7echno-music"
              class="group bg-neutral-950 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300"
            >
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30"
                >
                  <Icon icon="mdi:music" class="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h5 class="text-lg font-bold text-white">7echno Pitch</h5>
                  <p class="text-sm text-zinc-500">Pitch Deck</p>
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
