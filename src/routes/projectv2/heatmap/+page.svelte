<script lang="ts">
  import { language, type Project } from "$lib/interfaces";
  import ProjectUi from "$lib/Project.svelte";
  const data: Project = {
    banner: {
      cover: "/project/heatmap/cover.jpg",
      title: "EVA Global",
      slogan: "Heatmap",
    },
    date: "Nov 2023",
    gallery: [
      "/project/heatmap/image1.png",
      "/project/heatmap/image2.png",
      "/project/heatmap/image3.png",
    ],
    lang: [language.figma],
    more: [
      {
        name: "Monitoring",
        link: "monitoring",
      },
    ],
  };
</script>

<ProjectUi {data}>
  <p>
    EVA Heatmap is a platform for evaluate the status and performance of
    chargers and evses in real time in specific location in the map. This design
    show how to navigate from the search to a specific location and identify the
    chargers and evses with down or up status reflecting the red and green color
    from the google map heatmap.
  </p>
</ProjectUi>
