<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import { marked } from "marked";

  interface Stat {
    value: string;
    label: string;
    icon?: string;
  }

  interface Props {
    title: string;
    slogan?: string;
    description?: string;
    badge?: string;
    badgeCount?: number;
    backgroundImage?: string;
    showScrollIndicator?: boolean;
    ctaText?: string;
    ctaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    align?: "left" | "center";
    minHeight?: string;
    overlay?: "dark" | "gradient" | "light";
    stats?: Stat[];
  }

  let {
    title,
    slogan,
    description,
    badge,
    badgeCount,
    backgroundImage,
    showScrollIndicator = true,
    ctaText,
    ctaHref,
    secondaryCtaText,
    secondaryCtaHref,
    align = "center",
    minHeight = "80vh",
    overlay = "dark",
    stats = [],
  }: Props = $props();
</script>

<!-- Modern Image Hero Section -->
<div
  class="relative flex items-center overflow-hidden"
  style="min-height: {minHeight};"
  in:fade={{ duration: 800 }}
>
  <!-- Background Image -->
  {#if backgroundImage}
    <div class="absolute inset-0 -z-10">
      <img
        src={backgroundImage}
        alt="{title} background"
        class="w-full h-full object-cover blur-sm scale-105"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>
      <!-- Gradient blend to body background - fades at bottom -->
      <div
        class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none"
      ></div>
    </div>
  {:else}
    <!-- Mesh Gradient Background if no image -->
    <div class="absolute inset-0 bg-[#0a0a0a] -z-10"></div>
    <div
      class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse -z-10"
    ></div>
    <div
      class="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse -z-10"
      style="animation-delay: 1s;"
    ></div>
    <!-- Gradient blend to body background - fades at bottom -->
    <div
      class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none -z-10"
    ></div>
  {/if}

  <!-- Content Container -->
  <div class="container mx-auto max-w-7xl px-6 py-20 lg:py-32">
    <div
      class="max-w-3xl {align === 'center'
        ? 'mx-auto text-center'
        : 'text-left'}"
    >
      {#if badge || badgeCount}
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
          in:fly={{ y: -20, duration: 600, delay: 200 }}
        >
          <span class="w-2 h-2 rounded-full bg-primary-400 animate-pulse"
          ></span>
          <span class="text-sm text-white/90 font-medium">
            {#if badgeCount}
              {badgeCount}
              {badge || "Items"}
            {:else}
              {badge}
            {/if}
          </span>
        </div>
      {/if}

      <!-- Title -->
      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        in:fly={{ y: 30, duration: 600, delay: 300 }}
      >
        {title}
      </h1>

      <!-- Slogan -->
      {#if slogan}
        <p
          class="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed"
          in:fly={{ y: 30, duration: 600, delay: 400 }}
        >
          {slogan}
        </p>
      {/if}

      <!-- Description -->
      {#if description}
        <div
          class="markdown max-w-[600px] {align === 'center'
            ? 'mx-auto'
            : ''} text-white/70 text-base md:text-lg mb-8 leading-relaxed"
          in:fly={{ y: 30, duration: 600, delay: 450 }}
        >
          {@html marked(description)}
        </div>
      {/if}

      <!-- CTA Buttons -->
      {#if ctaText || secondaryCtaText}
        <div
          class="flex flex-col sm:flex-row gap-4 {align === 'center'
            ? 'justify-center'
            : 'justify-start'}"
          in:fly={{ y: 30, duration: 600, delay: 500 }}
        >
          {#if ctaText && ctaHref}
            <a
              href={ctaHref}
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
            >
              {ctaText}
              <Icon icon="material-symbols:arrow-forward" class="text-xl" />
            </a>
          {/if}
          {#if secondaryCtaText && secondaryCtaHref}
            <a
              href={secondaryCtaHref}
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-full transition-all duration-300"
            >
              {secondaryCtaText}
            </a>
          {/if}
        </div>
      {/if}

      <!-- Stats -->
      {#if stats.length > 0}
        <div
          class="mt-12 flex flex-wrap gap-6 {align === 'center'
            ? 'justify-center'
            : 'justify-start'}"
          in:fly={{ y: 30, duration: 600, delay: 600 }}
        >
          {#each stats as stat, i}
            <div
              class="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              in:fly={{ y: 20, duration: 600, delay: 700 + i * 100 }}
            >
              {#if stat.icon}
                <Icon icon={stat.icon} class="text-3xl text-primary-400" />
              {/if}
              <div class="flex items-center gap-2">
                <div class="text-2xl font-bold text-white">{stat.value}</div>
                <div class="text-sm text-white/60">{stat.label}</div>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>

  <!-- Scroll Indicator -->
  {#if showScrollIndicator}
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon
        icon="material-symbols:keyboard-arrow-down"
        class="text-4xl text-white/60"
      />
    </div>
  {/if}
</div>
