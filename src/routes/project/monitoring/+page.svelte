<script lang="ts">
  import { language, type Project } from "$lib/interfaces";
  import ProjectUi from "$lib/Project.svelte";
  const data: Project = {
    banner: {
      cover: "/project/monitoring/cover.jpg",
      title: "EVA Global",
      slogan: "Monitoring",
    },
    date: "Nov 2023",
    gallery: [
      "/project/monitoring/image1.png",
      "/project/monitoring/image2.png",
      "/project/monitoring/image3.png",
      "/project/monitoring/image4.png",
    ],
    lang: [language.angular, language.material, language.gmap],
    more: [
      {
        name: "Heatmap",
        link: "heatmap",
      },
    ],
  };
</script>

<ProjectUi {data}>
  <p>
    EVA Monitoring is a platform for evaluate the status and performance of the
    chargers and evses in real time and on specific location in the map. The
    application is built with several widgets that display different kind of
    data visualization like chart, table, and map.
  </p>
  <p>
    The main technology is Angular and Material that works using streams that
    are connected to AWS database API. We also include an intense unit test
    system that prevent any errors coming in the production environment.
  </p>
</ProjectUi>
