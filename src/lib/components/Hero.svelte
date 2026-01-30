<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section
  class="relative h-screen flex flex-col justify-center items-center overflow-hidden w-full"
>
  <!-- Mesh Gradient Background -->
  <div class="absolute inset-0 bg-neutral-950 z-0"></div>
  <div
    class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"
  ></div>
  <div
    class="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse delay-1000"
  ></div>

  <div class="z-10 text-center px-4 max-w-5xl relative">
    <!-- <div
      class="inline-block mb-4 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 uppercase tracking-widest backdrop-blur-sm"
    >
      Available for new projects
    </div> -->
    {#if mounted}
      <h1
        in:fly={{ y: 30, duration: 1000, delay: 0, easing: cubicOut }}
        class="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-600 leading-tight px-8 py-4"
      >
        Designing the Future <br /> of Digital Experiences
      </h1>
      <p
        in:fly={{ y: 30, duration: 1000, delay: 200, easing: cubicOut }}
        class="text-zinc-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed px-8"
      >
        Marcello Annicchiarico — Crafting premium, high-conversion web
        interfaces with state-of-the-art tech.
      </p>

      <div
        in:fly={{ y: 30, duration: 1000, delay: 400, easing: cubicOut }}
        class="flex flex-col md:flex-row gap-4 justify-center items-center"
      >
        <a
          href="/projects"
          class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
        >
          View My Work
        </a>
        <a
          href="/contact"
          class="px-8 py-4 rounded-full font-semibold text-lg text-white border-2 border-secondary-500/50 bg-secondary-500/10 hover:bg-secondary-500/20 hover:border-secondary-400 transition-all duration-300 cursor-pointer backdrop-blur-sm"
        >
          Let's Connect
        </a>
      </div>
    {/if}
  </div>

  <!-- Scroll Indicator -->
  {#if mounted}
    <div
      in:fade={{ duration: 1000, delay: 600 }}
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce max-md:hidden"
    >
      <svg
        class="w-6 h-6 text-zinc-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path></svg
      >
    </div>
  {/if}
</section>
