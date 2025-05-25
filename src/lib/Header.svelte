<script lang="ts">
  interface Props {
    title?: string;
    slogan?: string;
    theme?: "light" | "dark" | "auto";
  }

  let { title = "Title", slogan = "Slogan", theme = "auto" }: Props = $props();
</script>

<header
  data-aos="slide-up"
  class="text-center flex justify-center py-12 transition-all duration-500 ease-in-out"
  class:theme-light={theme === "light"}
  class:theme-dark={theme === "dark"}
>
  <div class="flex flex-col items-center max-w-4xl mx-auto px-6">
    <div
      class="text-4xl md:text-5xl font-bold px-12 min-w-[30vw] leading-tight tracking-tight mb-2 animate-fade-in header-title"
    >
      {title}
    </div>
    <hr
      class="w-24 my-6 transition-all duration-300 hover:w-32 header-divider"
      style="height: 3px; border-radius: 2px;"
    />
    <div
      class="px-12 text-lg md:text-xl leading-relaxed max-w-2xl animate-fade-in-delay header-slogan"
    >
      {slogan}
    </div>
  </div>
</header>

<style>
  /* Theme-based color schemes */
  .theme-light .header-title {
    color: #1f2937; /* gray-800 */
  }

  .theme-light .header-slogan {
    color: #4b5563; /* gray-600 */
  }

  .theme-light .header-divider {
    opacity: 0.4;
    border-color: #d1d5db; /* gray-300 */
  }

  .theme-light .header-divider:hover {
    opacity: 0.6;
  }

  .theme-dark .header-title {
    color: #f9fafb; /* gray-50 */
  }

  .theme-dark .header-slogan {
    color: #d1d5db; /* gray-300 */
  }

  .theme-dark .header-divider {
    opacity: 0.6;
    border-color: #6b7280; /* gray-500 */
  }

  .theme-dark .header-divider:hover {
    opacity: 0.8;
  }

  /* Auto theme - adapts to system preference */
  .theme-auto .header-title {
    color: #1f2937; /* gray-800 for light */
  }

  .theme-auto .header-slogan {
    color: #4b5563; /* gray-600 for light */
  }

  .theme-auto .header-divider {
    opacity: 0.4;
    border-color: #d1d5db; /* gray-300 for light */
  }

  .theme-auto .header-divider:hover {
    opacity: 0.6;
  }

  @media (prefers-color-scheme: dark) {
    .theme-auto .header-title {
      color: #f9fafb; /* gray-50 for dark */
    }

    .theme-auto .header-slogan {
      color: #d1d5db; /* gray-300 for dark */
    }

    .theme-auto .header-divider {
      opacity: 0.6;
      border-color: #6b7280; /* gray-500 for dark */
    }

    .theme-auto .header-divider:hover {
      opacity: 0.8;
    }
  }

  /* Smooth color transitions */
  .header-title,
  .header-slogan,
  .header-divider {
    transition:
      color 0.3s ease,
      border-color 0.3s ease,
      opacity 0.3s ease;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-delay {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }

  .animate-fade-in-delay {
    animation: fade-in-delay 0.8s ease-out 0.3s forwards;
    opacity: 0;
  }
</style>
