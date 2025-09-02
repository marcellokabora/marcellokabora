<script lang="ts">
  import Header from "$lib/Header.svelte";
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
</script>

<div
  class="h-[55vh] flex items-center justify-center text-white overflow-hidden relative text-center px-8 pb-10 pt-11"
  data-aos="fade-down"
>
  <div
    class="absolute inset-0 overflow-hidden -z-10 bg-gradient-to-br from-slate-700 to-slate-900"
  >
    <img
      class="w-full h-full object-cover saturate-100 brightness-80 blur-lg scale-110"
      src={cover}
      alt="cover"
      onerror={() => (imageLoaded = false)}
      class:opacity-0={!imageLoaded}
    />
  </div>
  <Header {title} {slogan} />
  <img
    class="absolute bottom-[-1px] w-full z-10"
    src="/shape/arc_bot.png"
    alt="arcbot"
  />
</div>
