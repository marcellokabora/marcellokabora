<script lang="ts">
  import Header from "$lib/Header.svelte";
  interface Props {
    cover?: string;
    title?: string;
    slogan?: string;
    items?: Item[];
  }

  let {
    cover = "/gallery/back2.jpg",
    title = "",
    slogan = "",
    items = [],
  }: Props = $props();

  interface Item {
    logo: string;
    company: string;
    title?: string;
    time?: string;
    link?: string;
  }
</script>

<main
  data-aos="fade-down"
  data-aos-duration="1000"
  style="background-image: url({cover})"
>
  <section>
    <Header {title} {slogan} />
    <div class="gallery">
      {#each items as item}
        <div
          class="item"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
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

<style lang="scss">
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
      display: flex;
      gap: 2em;
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
        img {
          object-fit: contain;
          margin-bottom: 20px;
          height: 100px;
          width: 100%;
        }
        .title {
          opacity: 0.6;
        }
      }
    }
  }
</style>
