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

<div class="relative text-white" data-aos="fade-down">
  <div
    class="relative overflow-auto flex snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
    bind:this={scrolled}
  >
    {#each gallery as item (item.title)}
      <a href={item.link} class="text-white no-underline">
        <div
          class="snap-center relative w-screen h-[70vh] flex overflow-hidden items-center justify-center"
        >
          <img
            src={item.photo}
            alt={item.photo}
            class="absolute object-cover w-full h-full saturate-100 brightness-80 -z-10"
          />
          <div
            class="h-[calc(100%-50px)] flex items-center justify-center px-5 md:pt-0 pt-5 text-white"
          >
            <Header title={item.title} slogan={item.slogan} zoom={1.2} />
          </div>
        </div>
      </a>
    {/each}
  </div>
  <div
    class="absolute bottom-[100px] flex items-center justify-center w-full hidden"
  >
    {#each gallery as item, index (item.title)}
      <button
        onclick={() => onScroll(index)}
        class="bg-transparent border-none text-white cursor-pointer scale-75 hover:opacity-100 transition-opacity"
        class:opacity-100={counter === index}
        class:opacity-50={counter !== index}
      >
        <Icon
          icon="material-symbols:{counter === index
            ? 'radio-button-checked'
            : 'radio-button-unchecked'}"
        />
      </button>
    {/each}
  </div>
  <img
    class="w-full z-[999] absolute bottom-[-1px]"
    src="/shape/arc_bot.png"
    alt="arcbot"
  />
</div>
