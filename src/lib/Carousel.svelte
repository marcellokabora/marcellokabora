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
  data-aos="fade-down"
  class="relative text-white text-center py-[100px] bg-cover bg-center"
  style="background-image: url({cover});"
>
  <img
    class="absolute top-[-1px] w-full z-10 rotate-180"
    src="/shape/arc_bot.png"
    alt="arcbot top"
  />
  <section class="py-20">
    <Header {title} {slogan} />
    <div
      class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 snap-x snap-mandatory"
    >
      {#each items as item (item.logo)}
        <a href={item.link} target="_blank" class="text-white no-underline">
          <div
            class="flex-1 min-w-[220px] max-w-[320px] snap-center flex flex-col items-center justify-center p-10 bg-gradient-to-br from-neutral-800/80 to-neutral-700/60 rounded-2xl shadow-xl border border-neutral-600/30 hover:shadow-2xl transition-all duration-300 group"
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
            {#if item.tags && item.tags.length}
              <div class="flex flex-wrap gap-2 justify-center mt-2">
                {#each item.tags.slice(0, 6) as tag}
                  <span
                    class="px-2 py-0.5 rounded bg-neutral-600/60 text-xs text-neutral-200"
                    >{tag}</span
                  >
                {/each}
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
