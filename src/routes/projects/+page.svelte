<script>
  import Banner from "$lib/Banner.svelte";
  import Projects from "$lib/Projects.svelte";
  import { description } from "$lib/mocks";
</script>

<svelte:head>
  <title>Marcello Kabora | Projects</title>
  <meta name="description" content={description} />
  <meta name="thumbnail" content="/gallery/projects.jpeg" />
  <meta property="og:image" content="/gallery/projects.jpeg" />
</svelte:head>

<Banner
  cover="/gallery/projects.jpeg"
  title="Projects"
  slogan="A collection of my successful projects"
/>
<br />
<section>
  <Projects />
</section>
