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
  class="relative flex justify-center items-center my-12 lg:my-20 gap-6 sm:gap-8 lg:gap-16 flex-col lg:flex-row transition-all duration-500 ease-in-out"
  data-aos="fade-up"
>
  <!-- Image Container -->
  <div
    class="relative order-1 h-[300px] sm:h-[350px] w-full sm:w-[400px] md:w-[450px] lg:w-[500px] lg:h-[400px] group z-10"
    class:lg:order-2={aside}
  >
    <div
      class="absolute inset-0 rounded-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-102"
    >
      {#if link}
        <a href={link} target="_blank" class="block w-full h-full">
          <img
            src={photo}
            alt=""
            class="object-{objectFit} w-full h-full rounded-2xl transition-all duration-300 transform group-hover:scale-102 group-hover:brightness-100"
            class:scale-75={small}
          />
        </a>
      {:else}
        <img
          src={photo}
          alt=""
          class="object-{objectFit} w-full h-full rounded-2xl transition-all duration-300 transform hover:scale-102 hover:brightness-100"
          class:scale-75={small}
        />
      {/if}
    </div>
  </div>
  <!-- Content Container with Overlap -->
  <div
    class="relative order-2 flex-1 px-4 sm:px-6 lg:px-0 z-20"
    class:lg:order-1={aside}
  >
    <!-- Title with Overlap Effect -->
    <div class="relative">
      <div
        class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-tight tracking-tight transition-all duration-300"
        class:text-center={true}
        class:lg:text-left={!aside}
        class:lg:text-right={aside}
      >
        <!-- Background text for overlap effect -->
        <div
          class="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 text-gray-200/20 select-none"
          class:lg:-right-2={aside}
          class:lg:-left-auto={aside}
        >
          {title}
        </div>

        <!-- Main title -->
        <div class="relative z-10 text-gray-800">
          {#if link}
            <a
              href={link}
              target="_blank"
              class="text-gray-800 no-underline hover:text-gray-600 transition-colors duration-300"
            >
              {title}
            </a>
          {:else}
            {title}
          {/if}
        </div>
      </div>
    </div>

    <!-- Decorative Element -->
    <div
      class="flex items-center mb-4 sm:mb-6"
      class:justify-center={true}
      class:lg:justify-start={!aside}
      class:lg:justify-end={aside}
    >
      <div
        class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 hover:w-32"
      ></div>
    </div>

    <!-- Description -->
    <div
      class="text-gray-700 leading-relaxed text-base sm:text-lg max-w-2xl"
      class:text-center={true}
      class:lg:text-left={!aside}
      class:lg:text-right={aside}
      class:lg:ml-auto={aside}
    >
      {@render children?.()}
    </div>
  </div>
</div>
