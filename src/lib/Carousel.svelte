<script lang="ts">
  import Header from "$lib/Header.svelte";
  interface Props {
    cover?: string;
    title?: string;
    slogan?: string;
    items?: Item[];
  }

  let {
    cover = "/gallery/blur002.jpg",
    title = "",
    slogan = "",
    items = [],
  }: Props = $props();

  interface Item {
    logo: string;
    company?: string;
    title?: string;
    time?: string;
    link?: string;
  }
</script>

<main data-aos="fade-down" style="background-image: url({cover})">
  <section>
    <Header {title} {slogan} />
    <div class="gallery">
      {#each items as item (item.logo)}
        <div class="item" data-aos="fade-up">
          <a href={item.link} target="_blank">
            <img src={item.logo} alt={item.logo} />
            <div class="company">{item.company}</div>
            <div class="title">{item.title}</div>
          </a>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  main {
    position: relative;
    color: white;
    background-position: center center;
    background-size: cover;
    text-align: center;
    padding: 100px 0;
    .gallery {
      margin-top: 80px;
      overflow: hidden;
      overflow-x: auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      gap: 4em;
      scroll-snap-type: x mandatory;
      &::-webkit-scrollbar {
        display: none;
      }
      a {
        color: white;
        text-decoration: none;
      }
      .item {
        flex: 1;
        min-width: 200px;
        scroll-snap-align: center;
        img {
          object-fit: contain;
          margin-bottom: 20px;
          height: 100px;
          width: 200px;
        }
        .title {
          opacity: 0.6;
        }
      }
    }
    @media (width<1000px) {
      .gallery {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
