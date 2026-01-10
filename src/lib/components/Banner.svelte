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
    class="h-[40vh] md:h-[55vh] flex items-center justify-center text-white overflow-hidden relative text-center px-8"
  >
    <div
      class="absolute inset-0 overflow-hidden -z-10 bg-gradient-to-br from-slate-700 to-slate-900"
    >
      <img
        in:fly={{ y: -100, duration: 1000, delay: 100 }}
        class="w-full h-full object-cover saturate-100 brightness-80 blur-lg scale-110"
        src={cover}
        alt="cover"
        onerror={() => (imageLoaded = false)}
        class:opacity-0={!imageLoaded}
      />
    </div>
    <div
      in:fly={{ y: -50, duration: 1000, delay: 200 }}
      class="text-center flex justify-center -mt-12"
    >
      <div class="flex flex-col items-center max-w-4xl mx-auto px-6">
        <h1
          class="text-4xl md:text-4xl font-bold px-12 leading-tight tracking-tight mb-2 text-white drop-shadow-lg"
        >
          {title}
        </h1>
        <div
          class="w-80 my-6 h-[2px] rounded-sm bg-gradient-to-r from-transparent via-white to-transparent"
        ></div>
        <p
          class="px-12 text-lg md:text-lg leading-relaxed max-w-2xl text-white drop-shadow-lg text-balance"
        >
          {slogan}
        </p>
      </div>
    </div>
    <img
      class="absolute bottom-[-1px] w-full z-10"
      src="/shape/arc.svg"
      alt="arcbot"
    />
  </div>
{/key}
