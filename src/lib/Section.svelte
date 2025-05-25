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
  class="flex justify-center items-center my-0 gap-16 flex-col md:flex-row transition-all duration-500 ease-in-out"
  class:text-right={aside}
  class:gap-8={small}
  data-aos="fade-up"
>
  <div
    class="rounded-xl overflow-hidden flex items-center justify-center order-1 h-[250px] w-full md:w-[400px] md:h-[400px] shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] group"
    class:md:order-2={aside}
    class:md:mt-0={aside}
  >
    {#if link}
      <a
        href={link}
        target="_blank"
        class="w-full h-full block transition-transform duration-300 group-hover:scale-105"
      >
        <img
          src={photo}
          alt=""
          class="object-{objectFit} w-full h-full transition-all duration-300 brightness-100 group-hover:brightness-110"
          class:scale-75={small}
        />
      </a>
    {:else}
      <img
        src={photo}
        alt=""
        class="object-{objectFit} w-full h-full transition-all duration-300 brightness-100 hover:brightness-110"
        class:scale-75={small}
      />
    {/if}
  </div>
  <div
    class="flex-1 order-2 mb-5 text-center md:text-left md:mb-0 px-4 md:px-0"
    class:md:order-1={aside}
    class:md:text-right={aside}
  >
    <div
      class="font-bold text-2xl md:text-3xl mb-3 text-gray-800 leading-tight tracking-tight"
    >
      {#if link}
        <a
          href={link}
          target="_blank"
          class="text-gray-800 no-underline hover:text-gray-600 transition-colors duration-300 hover:underline decoration-2 underline-offset-4"
        >
          {title}
        </a>
      {:else}
        {title}
      {/if}
    </div>
    <hr
      class="opacity-30 my-4 border-gray-300 mx-auto md:mx-0"
      class:md:ml-auto={aside}
      style="width: 60px; height: 2px;"
    />
    <div class="text-gray-700 leading-relaxed">
      {@render children?.()}
    </div>
  </div>
</div>
