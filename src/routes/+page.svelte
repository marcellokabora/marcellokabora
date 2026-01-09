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

  <!-- Open Graph / LinkedIn Meta Tags -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://marcellokabora.com" />
  <meta
    property="og:title"
    content="Marcello Annicchiarico | Fronted AI Developer"
  />
  <meta
    property="og:description"
    content="Senior Frontend Developer with a decade of experience in software development, UI/UX, and data visualization. Passionate about building high-performance UI libraries and PWAs for SaaS and B2B, using frameworks like Vue, Svelte, Angular, and React."
  />
  <meta
    property="og:image"
    content="https://marcellokabora.com/gallery/keyboard.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Article Meta Tags -->
  <meta property="article:author" content="Marcello Annicchiarico" />
  <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
  <meta property="article:modified_time" content="2026-01-09T00:00:00Z" />

  <!-- Legacy thumbnail -->
  <meta name="thumbnail" content="/gallery/keyboard.jpg" />
</svelte:head>

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
