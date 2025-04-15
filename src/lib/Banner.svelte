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
  class="h-[50vh] flex items-center justify-center text-white overflow-hidden relative text-center px-8 pb-10"
  data-aos="fade-down"
>
  <img
    class="absolute object-cover h-[110%] w-[105%] -z-10 saturate-100 brightness-80 blur-2xl"
    src={cover}
    alt="cover"
  />
  <Header {title} {slogan} zoom={1.2} />
  <img
    class="absolute bottom-[-1px] w-full z-10"
    src="/shape/arc_bot.png"
    alt="arcbot"
  />
</div>
