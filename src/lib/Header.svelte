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
      class="px-12 text-lg md:text-xl leading-relaxed max-w-3xl animate-fade-in-delay header-slogan"
    >
      {slogan}
    </div>
  </div>
</header>
