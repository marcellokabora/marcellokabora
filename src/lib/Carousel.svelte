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
  <section>
    <Header {title} {slogan} />
    <div
      class="mt-20 overflow-hidden overflow-x-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-16 snap-x snap-mandatory"
    >
      {#each items as item (item.logo)}
        <a href={item.link} target="_blank" class="text-white no-underline">
          <div
            class="flex-1 min-w-[200px] snap-center flex flex-col items-center justify-center"
            data-aos="fade-up"
          >
            <img
              src={item.logo}
              alt={item.logo}
              class="object-contain mb-5 h-[100px] w-[200px]"
            />
            <div class="text-white text-center">{item.company}</div>
            <div class="text-white opacity-60 text-center">{item.title}</div>
          </div>
        </a>
      {/each}
    </div>
  </section>
</main>
