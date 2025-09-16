<script lang="ts">
  import Header from "$lib/Header.svelte";
  import type { CarouselItem } from "$lib/types";

  interface Props {
    cover?: string;
    title?: string;
    slogan?: string;
    items?: CarouselItem[];
  }

  let {
    cover = "/gallery/blur002.jpg",
    title = "",
    slogan = "",
    items = [],
  }: Props = $props();
</script>

<main
  class="relative text-white text-center py-[100px] bg-cover bg-center"
  style="background-image: url({cover});"
>
  <img
    class="absolute top-[-1px] w-full z-10 rotate-180"
    src="/shape/arc_bot.png"
    alt="arcbot top"
  />
  <section class="py-20 mb-10">
    <Header {title} {slogan} />
    <div
      class="container m-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 snap-x snap-mandatory"
    >
      {#each items as item (item.logo)}
        <a href={item.link} target="_blank" class="text-white no-underline">
          <div
            class="w-full h-full snap-center flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-200/20 to-neutral-700/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div
              class="w-[90px] h-[90px] rounded-full bg-white/10 flex items-center justify-center mb-6 border-2 border-neutral-500/30 group-hover:border-white/40 transition-all"
            >
              <img
                src={item.logo}
                alt={item.logo}
                class="object-contain h-[60px] w-[60px]"
              />
            </div>
            <div
              class="text-lg font-semibold text-white text-center mb-1 drop-shadow"
            >
              {item.company}
            </div>
            <div class="text-base text-neutral-200 opacity-80 text-center mb-2">
              {item.title}
            </div>
            {#if item.description}
              <div class="text-sm text-neutral-300 text-center opacity-70 mb-2">
                {item.description}
              </div>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </section>
  <img
    class="absolute bottom-[-1px] w-full z-10"
    src="/shape/arc_bot.png"
    alt="arcbot bottom"
  />
</main>
