<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Icon from "@iconify/svelte";
  const gallery = [
    {
      photo: "/blured/keyboard.jpg",
      title: "Marcello Kabora",
      slogan: "Frontend Developer",
      link: "/curriculum",
    },
    {
      photo: "/blured/7echno.jpg",
      title: "7echno",
      slogan: "Music Streaming",
      link: "/project/7echno",
    },
    {
      photo: "/blured/eva-global.jpg",
      title: "EVA Global",
      slogan: "Monitoring",
      link: "/project/monitoring",
    },
    {
      photo: "/blured/appmanager.webp",
      title: "Building Minds",
      slogan: "App Manager",
      link: "/project/appmanager",
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
  let scrolled: HTMLElement | undefined = $state();

  let counter = $state(0);
  let interval = setInterval(() => {
    counter++;
    scrollGallery();
  }, 5000);

  function scrollGallery() {
    if (counter < 0) counter = 0;
    if (counter === gallery.length) counter = 0;
    if (scrolled)
      scrolled.scrollTo({
        top: 0,
        left: scrolled.clientWidth * counter,
        behavior: "smooth",
      });
  }
  function onScroll(value: number) {
    clearInterval(interval);
    counter = value;
    scrollGallery();
  }
</script>

<div class="gallery" data-aos="fade-down">
  <div class="scrolled" bind:this={scrolled}>
    {#each gallery as item (item.title)}
      <a href={item.link}>
        <div class="item">
          <img src={item.photo} alt={item.photo} class="photo" />
          <div class="header">
            <Header title={item.title} slogan={item.slogan} zoom={1.2} />
          </div>
        </div>
      </a>
    {/each}
  </div>
  <div class="radios">
    {#each gallery as item, index (item.title)}
      <button onclick={() => onScroll(index)}>
        <Icon
          icon="material-symbols:{counter === index
            ? 'radio_button_checked'
            : 'radio_button_unchecked'}"
        />
      </button>
    {/each}
  </div>
  <img class="arcbot" src="/shape/arc_bot.png" alt="arcbot" />
</div>

<style>
  .gallery {
    position: relative;
    color: white;
    .scrolled {
      position: relative;
      overflow: auto;
      display: flex;
      scroll-snap-type: x mandatory;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .item {
      scroll-snap-align: center;
      position: relative;
      width: 100vw;
      height: 500px;
      display: flex;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      color: white;
      text-decoration: none;
    }
    .photo {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: saturate(1) brightness(0.8);
      z-index: -1;
    }
    .header {
      height: calc(100% - 50px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      margin-bottom: 2em;
    }
    .arcbot {
      width: 100%;
      z-index: 999;
      position: absolute;
      bottom: -1px;
    }
    .radios {
      position: absolute;
      bottom: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      button {
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        zoom: 0.6;
      }
    }
  }
  @media (max-width: 1000px) {
    .header {
      padding-top: 20px;
    }
  }
</style>
