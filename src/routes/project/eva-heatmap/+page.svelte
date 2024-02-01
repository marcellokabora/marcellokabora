<script lang="ts">
  import { language, type Project } from "$lib/interfaces";
  import ProjectUi from "$lib/Project.svelte";
  const data: Project = {
    banner: {
      cover: "/project/eva-heatmap/cover.jpg",
      title: "EVA Global",
      slogan: "Heatmap",
    },
    date: "Nov 2023",
    gallery: [
      "/project/eva-heatmap/image1.png",
      "/project/eva-heatmap/image2.png",
      "/project/eva-heatmap/image3.png",
    ],
    lang: [language.figma],
    more: [
      {
        name: "Monitoring",
        link: "eva-monitoring",
      },
    ],
  };
</script>

<ProjectUi {data}>
  <p>
    EVA Heatmap is a platform for evaluate the status and performance of the
    chargers and evses in real time and on specific location in the map. This
    design show how to navigate from the search to a specific location and
    identify specific chargers and evses with the help of the heatmap is
    possible to individuate what area are in down or up status.
  </p>
</ProjectUi>
