<script lang="ts">
  import { language, type Project } from "$lib/interfaces";
  import ProjectUi from "$lib/Project.svelte";
  const data: Project = {
    banner: {
      cover: "/project/7echno-logo/cover.jpg",
      title: "7echno",
      slogan: "Where music meets movement",
    },
    date: "Gen 2024",
    gallery: [
      "/project/7echno-logo/logo1.png",
      "/project/7echno-logo/logo2.jpg",
      "/project/7echno-logo/logo3.png",
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
