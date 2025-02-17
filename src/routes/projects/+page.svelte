<script lang="ts">
  import Banner from "$lib/Banner.svelte";
  import type { Projecto } from "$lib/database.types";
  import { description } from "$lib/mocks";
  import Projects from "$lib/Projects.svelte";

  let { data } = $props();

  let projects = data.projects?.sort(
    (a: Projecto, b: Projecto) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
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
  <Projects {projects} />
</section>
