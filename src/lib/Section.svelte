<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    link?: string;
    aside?: boolean;
    photo?: string;
    title?: string;
    small?: boolean;
    objectFit?: "cover" | "contain";
    children?: Snippet;
  }

  let {
    link = "",
    aside = false,
    photo = "",
    title = "",
    small = false,
    objectFit = "cover",
    children,
  }: Props = $props();
</script>

<div
  class="flex justify-center items-center my-0 gap-16 flex-col md:flex-row"
  class:text-right={aside}
  class:gap-8={small}
  data-aos="fade-up"
>
  <div
    class="rounded-lg overflow-hidden flex items-center justify-center order-1 z-[-1] h-[200px] w-full md:w-[300px] md:h-[300px]"
    class:md:order-2={aside}
    class:md:mt-0={aside}
  >
    {#if link}
      <a href={link} target="_blank" class="w-full h-full">
        <img
          src={photo}
          alt=""
          class="object-{objectFit} w-full h-full"
          class:scale-75={small}
        />
      </a>
    {:else}
      <img
        src={photo}
        alt=""
        class="object-{objectFit} w-full h-full"
        class:scale-75={small}
      />
    {/if}
  </div>
  <div
    class="flex-1 order-2 mb-5 text-center md:text-left md:mb-0"
    class:md:order-1={aside}
    class:md:text-right={aside}
  >
    <div class="font-bold text-2xl md:text-xl">
      {#if link}
        <a href={link} target="_blank" class="text-black no-underline">
          {title}
        </a>
      {:else}
        {title}
      {/if}
    </div>
    <hr class="opacity-20 my-2" />
    <div>
      {@render children?.()}
    </div>
  </div>
</div>
