<script lang="ts">
  import { fly } from "svelte/transition";
  import { page } from "$app/state";

  interface Props {
    cover?: string;
    title?: string;
    slogan?: string;
  }

  let {
    cover = "/styling.jpg",
    title = "Title",
    slogan = "Slogan",
  }: Props = $props();

  let imageLoaded = $state(true);
  let animationKey = $state(0);

  // Update animation key when URL changes
  $effect(() => {
    page.url.pathname;
    animationKey = Date.now();
  });
</script>

{#key animationKey}
  <div
    class="h-[40vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden relative text-center px-4"
  >
    <!-- Background with overlay -->
    <div
      class="absolute inset-0 overflow-hidden -z-10 bg-gradient-to-br from-slate-900 via-zinc-900 to-black"
    >
      <img
        in:fly={{ y: -100, duration: 1000, delay: 100 }}
        class="w-full h-full object-cover saturate-75 brightness-75 blur-xl scale-110"
        src={cover}
        alt="cover"
        onerror={() => (imageLoaded = false)}
        class:opacity-0={!imageLoaded}
      />
      <!-- Dark overlay for better text contrast -->
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- Content Container with glassmorphism -->
    <div
      in:fly={{ y: -50, duration: 1000, delay: 200 }}
      class="text-center flex justify-center"
    >
      <div class="flex flex-col items-center max-w-5xl mx-auto">
        <!-- Title with gradient -->
        <h1
          class="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent"
          style="text-shadow: 0 0 40px rgba(255, 255, 255, 0.1);"
        >
          {title}
        </h1>

        <!-- Animated divider with gradient -->
        <div class="relative w-full max-w-md my-6 h-px overflow-hidden">
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/60 to-transparent"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-400/60 to-transparent animate-pulse"
          ></div>
        </div>

        <!-- Slogan with enhanced styling -->
        <p
          class="text-xl md:text-2xl leading-relaxed max-w-3xl text-zinc-200 font-light tracking-wide"
          style="text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);"
        >
          {slogan}
        </p>
      </div>
    </div>

    <!-- Bottom shape -->
    <img
      class="absolute bottom-[-1px] w-full z-10 max-md:hidden"
      src="/shape/arc.svg"
      alt="arcbot"
    />
  </div>
{/key}
