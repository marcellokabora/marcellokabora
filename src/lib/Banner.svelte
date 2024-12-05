<script lang="ts">
  import Header from "$lib/Header.svelte";
  interface Props {
    cover?: string;
    title?: string;
    slogan?: string;
  }

  let { cover = "/styling.jpg", title = "Title", slogan = "Slogan" }: Props = $props();
</script>

<div class="banner" data-aos="fade-down" data-aos-duration="1000">
  <img class="cover" src={cover} alt="cover" />
  <Header {title} {slogan} zoom={1.2} />
  <img class="arcbot" src="/shape/arc_bot.png" alt="arcbot" />
</div>

<style>
  .banner {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
    position: relative;
    text-align: center;
    padding-bottom: 40px;
  }
  .cover {
    position: absolute;
    object-fit: cover;
    height: 105%;
    width: 105%;
    z-index: -1;
    filter: saturate(1) brightness(0.8) blur(8px);
  }
  .arcbot {
    position: absolute;
    bottom: -1px;
    width: 100%;
    z-index: 1;
  }
</style>
