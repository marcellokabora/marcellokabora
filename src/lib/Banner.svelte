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
</script>

<div
  class="h-[55vh] flex items-center justify-center text-white overflow-hidden relative text-center px-8 pb-10 pt-11"
  data-aos="fade-down"
>
  <div class="absolute inset-0 overflow-hidden -z-10">
    <img
      class="w-full h-full object-cover saturate-100 brightness-80 blur-lg scale-110"
      src={cover}
      alt="cover"
    />
  </div>
  <Header {title} {slogan} zoom={1.2} />
  <img
    class="absolute bottom-[-1px] w-full z-10"
    src="/shape/arc_bot.png"
    alt="arcbot"
  />
</div>
