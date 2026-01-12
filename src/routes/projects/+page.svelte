<script lang="ts">
  import Banner from "$lib/components/Banner.svelte";
  import type { Project } from "$lib/types/project.types";
  import MetaTags from "$lib/components/MetaTags.svelte";
  import Projects from "$lib/components/Projects.svelte";

  let { data } = $props();

  let projects = data.projects?.sort(
    (a: Project, b: Project) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  let scrollY = $state(0);
  let innerWidth = $state(0);

  let isDesktop = $derived(innerWidth >= 1024);
</script>

<svelte:window bind:scrollY bind:innerWidth />

<MetaTags
  title="Marcello Annicchiarico | Projects"
  url="https://marcellokabora.com/projects"
/>

<!-- Placeholder to prevent layout shift when banner becomes fixed -->
{#if scrollY > 300 && isDesktop}
  <div style="height: 55vh;"></div>
{/if}

<div
  class="transition-all duration-300"
  style={scrollY > 300 && isDesktop
    ? "position: fixed; top: calc(-55vh + 200px); left: 0; right: 0; z-index: 40;"
    : ""}
>
  <Banner
    cover="/photo/coding-blue.webp"
    title="Projects"
    slogan="A collection of my successful projects"
  />
</div>

<div class="container mx-auto max-w-6xl px-6">
  <section class="py-16">
    <Projects {projects} />
  </section>
</div>
