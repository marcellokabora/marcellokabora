<script lang="ts">
  import type { Project } from "$lib/types/project.types";
  import MetaTags from "$lib/components/MetaTags.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import PageHero from "$lib/components/PageHero.svelte";

  let { data } = $props();

  let projects = data.projects?.sort(
    (a: Project, b: Project) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf(),
  );

  let scrollY = $state(0);

  // Calculate category counts
  const categoryCounts = $derived(() => {
    const counts: Record<string, number> = {};

    projects.forEach((project: Project) => {
      const type = project.type?.toLowerCase() || "other";
      counts[type] = (counts[type] || 0) + 1;
    });

    return counts;
  });

  // Generate stats for PageHero
  const heroStats = $derived(() => {
    const counts = categoryCounts();
    const stats = [];

    if (counts.webapp) {
      stats.push({
        value: `${counts.webapp}`,
        label: "Webapp",
        icon: "material-symbols:web",
      });
    }
    if (counts.website) {
      stats.push({
        value: `${counts.website}`,
        label: "Website",
        icon: "material-symbols:language",
      });
    }
    if (counts.design) {
      stats.push({
        value: `${counts.design}`,
        label: "Design",
        icon: "material-symbols:palette-outline",
      });
    }

    return stats;
  });
</script>

<svelte:window bind:scrollY />

<MetaTags
  title="Marcello Annicchiarico | Projects"
  url="https://marcellokabora.com/projects"
/>

<PageHero
  title="Projects"
  slogan="A collection of my successful projects"
  badge="Projects Completed"
  badgeCount={projects.length}
  backgroundImage="/photo/coding-blue.webp"
  stats={heroStats()}
/>

<div class="container mx-auto max-w-6xl px-6">
  <section class="py-16">
    <Projects {projects} />
  </section>
</div>
