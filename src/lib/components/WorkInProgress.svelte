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
      class="text-sm font-bold text-white uppercase tracking-widest mb-2 text-center"
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

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div
          class="bg-secondary/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <img
            src="/logo/plyrpro-text.png"
            alt="7echno"
            class="h-14 w-auto object-contain mb-8 mt-4"
          />
          <h5 class="font-bold text-white text-lg mb-1">PlyrPro</h5>
          <p class="text-zinc-400 text-sm mb-5">
            "Discover local workout buddies."
          </p>
          <div class="flex items-center gap-3 mt-auto">
            <a
              href="//plyrpro.com"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2 bg-[#c6f74c] text-black rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
            >
              <Icon icon="mdi:web" class="w-4 h-4" />
              <span>Visit</span>
            </a>
            <a
              href="//plyrpro.com/pitch"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-[#c6f74c]/20 hover:yellow-emerald-400 text-[#c6f74c] rounded-xl font-semibold text-sm transition-all duration-300"
            >
              <Icon icon="mdi:presentation" class="w-4 h-4" />
              <span>Pitch</span>
            </a>
          </div>
        </div>
        <div
          class="bg-secondary/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <img
            src="/logo/7echno-white.png"
            alt="7echno"
            class="h-14 w-auto object-contain mb-8 mt-4"
          />
          <h5 class="font-bold text-white text-lg mb-1">7echno</h5>
          <p class="text-zinc-400 text-sm mb-5">
            "Streaming platform for DJs."
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
              href="https://7echno.com/pitch"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              <Icon icon="mdi:presentation" class="w-4 h-4" />
              <span>Pitch</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-secondary/50 border border-white/10 rounded-2xl p-6 mt-8">
        <div class="flex flex-col items-center text-center gap-4">
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
