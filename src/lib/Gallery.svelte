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
      photo: "/blured/appmanager.jpg",
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
    if (counter < 0) counter = gallery.length - 1;
    if (counter >= gallery.length) counter = 0;
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
    // Restart interval
    interval = setInterval(() => {
      counter++;
      scrollGallery();
    }, 5000);
  }
</script>

<div class="relative text-white" data-aos="fade-down">
  <div
    class="relative overflow-auto flex snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
    bind:this={scrolled}
  >
    {#each gallery as item (item.title)}
      <a href={item.link} class="text-white no-underline">
        <div
          class="snap-center relative w-screen h-[70vh] flex overflow-hidden items-center justify-center carousel-mask"
        >
          <img
            src={item.photo}
            alt={item.photo}
            class="absolute object-cover w-full h-full saturate-100 brightness-80 -z-10"
          />
          <div
            class="h-[calc(100%-50px)] flex items-center justify-center px-5 md:pt-0 pt-5 text-white"
          >
            <Header title={item.title} slogan={item.slogan} />
          </div>
        </div>
      </a>
    {/each}
  </div>
  <!-- Arrow Navigation Controls -->
  <div class="absolute inset-y-0 left-4 flex items-center">
    <button
      onclick={() => onScroll(counter - 1)}
      class="arrow-button"
      aria-label="Previous slide"
      disabled={counter === 0}
    >
      <Icon icon="mdi:chevron-left" class="w-8 h-8" />
    </button>
  </div>

  <div class="absolute inset-y-0 right-4 flex items-center">
    <button
      onclick={() => onScroll(counter + 1)}
      class="arrow-button"
      aria-label="Next slide"
      disabled={counter === gallery.length - 1}
    >
      <Icon icon="mdi:chevron-right" class="w-8 h-8" />
    </button>
  </div>
</div>

<style>
  .arrow-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  .arrow-button:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  .arrow-button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .carousel-mask {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  }
</style>
