<script lang="ts">
  import { language, type Project } from "$lib/interfaces";
  import ProjectUi from "$lib/Project.svelte";
  const data: Project = {
    banner: {
      cover: "/blured/7echno.jpg",
      title: "7echno",
      slogan: "Where music meets movement",
    },
    date: "Gen 2024",
    link: "//7echno.com",
    gallery: [
      "/project/7echno/7echno1.png",
      "/project/7echno/7echno2.png",
      "/project/7echno/7echno3.png",
      "/project/7echno/7echno4.png",
      "/project/7echno/7echno5.png",
      "/project/7echno/7echno6.png",
      "/project/7echno/7echno7.png",
      "/project/7echno/7echno8.png",
      "/project/7echno/7echno9.png",
      "/project/7echno/7echno10.png",
    ],
    lang: [language.svelte, language.firebase],
    more: [
      {
        name: "Logo",
        link: "7echno-logo",
      },
    ],
  };
</script>

<ProjectUi {data}>
  <p>
    <a href="//7echno.com" target="_blank">7echno</a> is an progressive web app
    built in <a href="//svelte.dev" target="_blank">Svelte</a> using
    <a href="//firebase.com" target="_blank">Firebase</a> for the database, storage
    and authetification. The project started as small idea for testing new styles
    technologies but it move to a full application where anyone can register, login
    and share content.
  </p>
  <p>
    The project is built on top of a hierarchy structure between artist, venue,
    and location by showcasing the performance of musics and events in a
    different way that platforms does like <a
      href="//youtube.com"
      target="_blank">youtube</a
    >
    or <a href="//soundcloud.com" target="_blank">soundcloud</a>.
  </p>
</ProjectUi>
