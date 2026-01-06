<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import type { CarouselItem } from "$lib/types/types";

  interface Props {
    cover?: string;
    title?: string;
    slogan?: string;
    items?: CarouselItem[];
  }

  let {
    cover = "/gallery/bluedot.jpg",
    title = "",
    slogan = "",
    items = [],
  }: Props = $props();

  let scrollContainer: HTMLDivElement;
  let activeIndex = $state(0);

  function scrollToCard(index: number) {
    if (scrollContainer) {
      const cardWidth = scrollContainer.scrollWidth / items.length;
      scrollContainer.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      activeIndex = index;
    }
  }

  function handleScroll() {
    if (scrollContainer) {
      const cardWidth = scrollContainer.scrollWidth / items.length;
      const currentIndex = Math.round(scrollContainer.scrollLeft / cardWidth);
      activeIndex = currentIndex;
    }
  }
</script>

<main class="relative text-white text-center py-[100px]">
  <!-- Background Image -->
  <img
    class="absolute inset-0 w-full h-full object-cover -z-10 filter brightness-75"
    src={cover}
    alt="Background"
  />
  <img
    class="absolute top-[-1px] w-full z-10 rotate-180"
    src="/shape/arc_bot.png"
    alt="arcbot top"
  />
  <section class="py-20 mb-10 relative">
    <Header {title} {slogan} />
    <div class="container m-auto px-8 relative">
      <div
        bind:this={scrollContainer}
        onscroll={handleScroll}
        class="flex gap-10 overflow-x-auto snap-x snap-mandatory py-12 px-4 scrollbar-none"
        style="scrollbar-width: none; -ms-overflow-style: none;"
      >
        {#each items as item (item.logo)}
          <a
            href={item.link}
            target="_blank"
            class="text-white no-underline block transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex-shrink-0 w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-27px)] snap-center"
          >
            <div
              class="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group border border-white/10 hover:border-white/30 relative overflow-hidden"
            >
              <!-- Animated background gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 transition-all duration-700 rounded-2xl"
              ></div>

              <!-- Shimmer effect -->
              <div
                class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12"
              ></div>

              <div
                class="w-[90px] h-[90px] rounded-full bg-white/10 flex items-center justify-center mb-6 border-2 border-white/20 group-hover:border-white/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 relative z-10"
              >
                <img
                  src={item.logo}
                  alt={item.logo}
                  class="object-contain h-[60px] w-[60px] transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div
                class="text-lg font-semibold text-white text-center mb-1 drop-shadow relative z-10 transition-all duration-300 group-hover:text-blue-200"
              >
                {item.company}
              </div>
              <div
                class="text-base text-neutral-200 opacity-80 text-center mb-2 relative z-10 transition-all duration-300 group-hover:opacity-100"
              >
                {item.title}
              </div>
              {#if item.description}
                <div
                  class="text-sm text-neutral-300 text-center opacity-70 mb-2 relative z-10 transition-all duration-300 group-hover:opacity-90 group-hover:text-neutral-200"
                >
                  {item.description}
                </div>
              {/if}
            </div>
          </a>
        {/each}
      </div>

      <!-- Dot indicators -->
      {#if items.length > 1}
        <div class="flex justify-center gap-2 mt-6">
          {#each items as _, index}
            <button
              type="button"
              onclick={() => scrollToCard(index)}
              class="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 hover:scale-125 {activeIndex ===
              index
                ? 'bg-white'
                : 'bg-white/40 hover:bg-white/60'}"
              aria-label="Go to slide {index + 1}"
            ></button>
          {/each}
        </div>
      {/if}
    </div>
  </section>
  <img
    class="absolute bottom-[-1px] w-full z-10"
    src="/shape/arc_bot.png"
    alt="arcbot bottom"
  />
</main>

<style>
  /* Hide scrollbar completely */
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
</style>
