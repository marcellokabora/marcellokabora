<script>
  import Hero from "$lib/components//Hero.svelte";
  import BentoGrid from "$lib/components/BentoGrid.svelte";
  import ProductShowcase from "$lib/components//ProductShowcase.svelte";
  import Experience from "$lib/components//Experience.svelte";
  import WorkInProgress from "$lib/components//WorkInProgress.svelte";
  import Connect from "$lib/components//Connect.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Marcello Annicchiarico | Fronted AI Developer</title>
  <meta
    name="description"
    content="Senior Frontend Developer with a decade of experience in software development, UI/UX, and data visualization.  Passionate about building high-performance UI libraries and PWAs for SaaS and B2B, using frameworks like Vue, Svelte, Angular, and React."
  />
  <meta
    name="keywords"
    content="Software, Developer, Frontend, Fullstack, Developer, UI/UX, Nodejs, Svelte, Angular, Vue, React, Material, Firebase"
  />
  <meta name="thumbnail" content="/gallery/keyboard.jpg" />
  <meta property="og:image" content="/gallery/keyboard.jpg" />
</svelte:head>

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
