<script>
  import Hero from "$lib/components//Hero.svelte";
  import BentoGrid from "$lib/components/BentoGrid.svelte";
  import ProductShowcase from "$lib/components//ProductShowcase.svelte";
  import Experience from "$lib/components//Experience.svelte";
  import WorkInProgress from "$lib/components//WorkInProgress.svelte";
  import Connect from "$lib/components//Connect.svelte";

  let { data } = $props();
</script>

<main
  class="w-full min-h-screen bg-neutral-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-black"
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
