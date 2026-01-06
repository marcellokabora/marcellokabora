<script lang="ts">
  import Banner from "$lib/components/Banner.svelte";
  import type { Project } from "$lib/types/project.types";
  import { description } from "$lib/utils/mocks";
  import Projects from "$lib/components/Projects.svelte";

  let { data } = $props();

  let projects = data.projects?.sort(
    (a: Project, b: Project) =>
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

<div class="container mx-auto max-w-6xl px-6">
  <section class="py-16">
    <Projects {projects} />
  </section>
</div>
