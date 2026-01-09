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
>
  <!-- Image Container -->
  <div
    class="relative order-1 h-[300px] sm:h-[350px] w-full sm:w-[400px] md:w-[450px] lg:w-[500px] lg:h-[400px] group image-container"
    class:lg:order-2={aside}
  >
    <!-- Animated background glow -->
    <div
      class="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 glow-effect"
      style="background: linear-gradient(to right, var(--color-secondary-500), var(--color-primary-500), var(--color-secondary-400)); opacity: 0.2;"
    ></div>

    <!-- Main image container with enhanced animations -->
    <div
      class="absolute inset-0 rounded-2xl overflow-hidden transform transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-blue-500/25 bg-neutral-900"
    >
      <!-- Overlay gradient that appears on hover -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Shimmer effect -->
      <div
        class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
      ></div>

      {#if link}
        <a href={link} target="_blank" class="block w-full h-full relative">
          <img
            src={photo}
            alt=""
            class="object-{objectFit} w-full h-full rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110"
            class:scale-75={small}
          />
        </a>
      {:else}
        <img
          src={photo}
          alt=""
          class="object-{objectFit} w-full h-full rounded-2xl transition-all duration-500 transform hover:scale-110 hover:brightness-110 hover:contrast-110 hover:saturate-110 relative"
          class:scale-75={small}
        />
      {/if}
    </div>
  </div>
  <!-- Content Container with Overlap -->
  <div
    class="relative order-2 flex-1 px-4 sm:px-6 lg:px-0 group"
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
          class="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 select-none"
          class:lg:-right-2={aside}
          class:lg:-left-auto={aside}
          style="color: var(--color-primary-950); opacity: 0.3;"
        >
          {title}
        </div>

        <!-- Main title -->
        <div class="relative" style="color: var(--text-primary);">
          {#if link}
            <a
              href={link}
              target="_blank"
              class="no-underline transition-colors duration-300"
              style="color: var(--text-primary);"
              onmouseenter={(e) =>
                (e.currentTarget.style.color = "var(--color-primary-400)")}
              onmouseleave={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")}
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
        class="w-20 h-1 rounded-full transition-all duration-300 group-hover:w-32"
        style="background: linear-gradient(to right, var(--color-secondary-500), var(--color-primary-500));"
      ></div>
    </div>

    <!-- Description -->
    <div
      class="leading-relaxed text-base sm:text-lg max-w-2xl"
      class:text-center={true}
      class:lg:text-left={!aside}
      class:lg:text-right={aside}
      class:lg:ml-auto={aside}
      style="color: var(--text-secondary);"
    >
      {@render children?.()}
    </div>
  </div>
</div>

<style>
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-10px) rotate(1deg);
    }
    66% {
      transform: translateY(5px) rotate(-1deg);
    }
  }

  @keyframes glow-pulse {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) skewX(-15deg);
    }
    100% {
      transform: translateX(200%) skewX(-15deg);
    }
  }

  .image-container {
    animation: float 6s ease-in-out infinite;
  }

  .image-container:hover {
    animation-play-state: paused;
  }

  .glow-effect {
    animation: glow-pulse 3s ease-in-out infinite;
  }
</style>
