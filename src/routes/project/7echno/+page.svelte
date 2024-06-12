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
    link: "//7echno.com",
    gallery: [
      "/project/7echno/7echno-01.png",
      "/project/7echno/7echno-02.png",
      "/project/7echno/7echno-03.png",
      "/project/7echno/7echno-04.png",
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
