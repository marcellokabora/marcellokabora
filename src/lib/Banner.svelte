<script lang="ts">
  import Header from "$lib/Header.svelte";
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
    class="h-[55vh] flex items-center justify-center text-white overflow-hidden relative text-center px-8 pb-10 pt-11"
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
    <div in:fly={{ y: -50, duration: 1000, delay: 200 }}>
      <Header {title} {slogan} />
    </div>
    <img
      class="absolute bottom-[-1px] w-full z-10"
      src="/shape/arc_bot.png"
      alt="arcbot"
    />
  </div>
{/key}
