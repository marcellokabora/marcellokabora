<script>
  import Hero from "$lib/components//Hero.svelte";
  import BentoGrid from "$lib/components/BentoGrid.svelte";
  import ProductShowcase from "$lib/components//ProductShowcase.svelte";
  import Experience from "$lib/components//Experience.svelte";
  import WorkInProgress from "$lib/components//WorkInProgress.svelte";
  import Connect from "$lib/components//Connect.svelte";
  import MetaTags from "$lib/components/MetaTags.svelte";

  let { data } = $props();
</script>

<MetaTags />

<main
  class="w-full min-h-screen bg-neutral-950 text-white overflow-hidden selection:bg-secondary-500 selection:text-black"
>
  <!-- Navigation (Centered Logo) -->

  <Hero />
  <BentoGrid projectCount={data.projects.length} />
  <ProductShowcase
    projects={data.featuredProjects}
    totalCount={data.projects.length}
  />
  <Experience />
  <WorkInProgress />
  <Connect />
</main>
