<script lang="ts">
  import Header from "$lib/Header.svelte";
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

  let counter = 0;
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
  function onScroll(input: number) {
    // clearInterval(interval);
    input > 0 ? counter++ : counter--;
    console.log(counter);
    scrollGallery();
  }
</script>

<div class="gallery" data-aos="fade-down" data-aos-duration="1000">
  <div class="scrolled" bind:this={scrolled}>
    {#each gallery as item}
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
  <button class="action left" onclick={() => onScroll(-1)}>
    <span class="material-icons">chevron_left</span>
  </button>
  <button class="action right" onclick={() => onScroll(1)}>
    <span class="material-icons">chevron_right</span>
  </button>
  <img class="arcbot" src="/shape/arc_bot.png" alt="arcbot" />
</div>

<style lang="scss">
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
      height: 60vh;
      display: flex;
      max-height: 500px;
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
    }
    .arcbot {
      width: 100%;
      z-index: 999;
      position: absolute;
      bottom: -1px;
    }
    .action {
      position: absolute;
      border: none;
      color: white;
      background-color: transparent;
      border-radius: 100px;
      height: 50px;
      width: 50px;
      z-index: 1;
      top: 50%;
      cursor: pointer;
      &.left {
        left: 2em;
      }
      &.right {
        right: 2em;
      }
    }
  }
  @media (max-width: 1000px) {
    .header {
      padding-top: 20px;
    }
    .action {
      display: none;
    }
  }
</style>
