<script lang="ts">
  import { language, type Project } from "$lib/interfaces";
  import ProjectUi from "$lib/Project.svelte";
  const data: Project = {
    banner: {
      cover: "/project/7echno/cover.jpg",
      title: "7echno",
      slogan: "Techno music, event, and more...",
    },
    date: "Gen 2024",
    gallery: [
      "/project/7echno-logo/logo-01.jpg",
      "/project/7echno-logo/logo-02.jpg",
    ],
    lang: [language.figma],
    more: [
      {
        name: "Webapp",
        link: "7echno",
      },
    ],
  };
</script>

<ProjectUi {data}>
  <p>
    For this logo i use a flat font that resemble the underground scene of the
    techno industry and i play around the initial letter that suppose to be a T
    instead of a 7. The color scheme is follwing what i call the 3dimention
    layer that expose the shape of the logo to multiple color like green and
    purple.
  </p>
</ProjectUi>
