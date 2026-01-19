<script lang="ts">
  import { fade, fly, scale } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  interface Props {
    title: string;
    slogan?: string;
    badge?: string;
    badgeCount?: number;
    backgroundImage?: string;
    showScrollIndicator?: boolean;
  }

  let {
    title,
    slogan,
    badge,
    badgeCount,
    backgroundImage = "/photo/coding-blue.webp",
    showScrollIndicator = false,
  }: Props = $props();
</script>

<!-- Modern Hero Section with Blurred Background -->
<div class="relative flex items-center justify-center overflow-hidden">
  <!-- Blurred Background Image -->
  <div class="absolute inset-0 -z-10">
    <img
      src={backgroundImage}
      alt="{title} background"
      class="w-full h-full object-cover blur-2xl scale-110 opacity-50"
      in:fade={{ duration: 1200, delay: 1000 }}
    />
    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)]/80 via-[var(--bg-color)]/60 to-[var(--bg-color)]"
    ></div>
  </div>

  <!-- Animated Grid Pattern -->
  <div
    class="absolute inset-0 -z-5 opacity-20"
    style="background-image: linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px); background-size: 50px 50px;"
  ></div>

  <!-- Content -->
  <div class="container mx-auto max-w-6xl px-6 pt-20 md:pt-30 text-center">
    <div class="space-y-6">
      {#if badge || badgeCount}
        <!-- Badge -->
        <div
          class="flex justify-center mb-8"
          in:scale={{ duration: 600, delay: 300, start: 0.8, easing: cubicOut }}
        >
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background-secondary)]/80 backdrop-blur-xl border border-[var(--border-color)]"
          >
            <span
              class="w-2 h-2 rounded-full bg-[var(--color-primary-400)] animate-pulse"
            ></span>
            <span class="text-sm text-[var(--text-secondary)]">
              {#if badgeCount}
                {badgeCount}
                {badge || "Items"}
              {:else}
                {badge}
              {/if}
            </span>
          </span>
        </div>
      {/if}

      <!-- Title with Gradient -->
      <h1
        class="text-5xl md:text-7xl font-bold tracking-tight"
        style="background: linear-gradient(135deg, var(--color-primary-400) 0%, var(--color-secondary-400) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
        in:fly={{ y: 30, duration: 800, delay: 400, easing: cubicOut }}
      >
        {title}
      </h1>

      {#if slogan}
        <!-- Slogan -->
        <p
          class="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
          in:fly={{ y: 30, duration: 800, delay: 600, easing: cubicOut }}
        >
          {slogan}
        </p>
      {/if}

      <!-- Decorative Line -->
      <div
        class="flex justify-center pt-8"
        in:scale={{ duration: 800, delay: 800, start: 0, easing: cubicOut }}
      >
        <div
          class="w-32 h-1 rounded-full"
          style="background: linear-gradient(90deg, transparent, var(--color-primary-400), var(--color-secondary-400), transparent);"
        ></div>
      </div>
    </div>
  </div>

  {#if showScrollIndicator}
    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      in:fade={{ duration: 600, delay: 1000 }}
    >
      <svg
        class="w-6 h-6 text-[var(--color-primary-400)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  {/if}
</div>
