<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import Header from "$lib/Header.svelte";
  const gallery = [
    {
      photo: "/blured/keyboard.jpg",
      title: "Marcello Kabora",
      slogan: "Frontend Engineer",
      link: "/curriculum",
    },
    {
      photo: "/blured/7echno.jpg",
      title: "7echno",
      slogan: "Music",
      link: "/project/7echno",
    },
    {
      photo: "/blured/eva-global.jpg",
      title: "EVA Global",
      slogan: "Monitoring",
      link: "/project/eva-monitoring",
    },
    {
      photo: "/blured/chartmap.jpg",
      title: "Chartmap",
      slogan: "Analiticts",
      link: "/project/chartmap",
    },
    {
      photo: "/blured/network.jpg",
      title: "Network",
      slogan: "Analitics",
      link: "/project/network",
    },
  ];
</script>

<div class="gallery" data-aos="fade-down" data-aos-duration="1000">
  <Splide
    options={{
      rewind: true,
      height: 600,
      autoplay: false,
      arrows: false,
      breakpoints: {
        1000: {
          height: 400,
        },
      },
    }}
  >
    {#each gallery as item}
      <SplideSlide>
        <a href={item.link}>
          <img src={item.photo} alt={item.photo} class="photo" />
          <div class="dflex">
            <Header title={item.title} slogan={item.slogan} zoom={1.2} />
          </div>
        </a>
      </SplideSlide>
    {/each}
  </Splide>
  <img class="arcbot" src="/shape/arc_bot.png" alt="arcbot" />
</div>

<style>
  a {
    color: white;
    text-decoration: none;
  }
  .gallery {
    position: relative;
    color: white;
  }
  .arcbot {
    width: 100%;
    z-index: 999;
    position: absolute;
    bottom: -1px;
  }
  .photo {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: saturate(1) brightness(0.8);
    z-index: -1;
  }
  .dflex {
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }
  @media (max-width: 1000px) {
    .dflex {
      padding-top: 20px;
    }
  }
</style>
