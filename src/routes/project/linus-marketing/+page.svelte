<script lang="ts">
  import { language } from "$lib/interfaces";
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/project/linus-marketing/_cover.jpeg",
      title: "Linus",
      slogan: "Marketing",
    },
    date: "Feb 2022",
    gallery: [
      "/project/linus-marketing/linus-lps-01.png",
      "/project/linus-marketing/linus-lps-02.png",
      "/project/linus-marketing/linus-lps-03.png",
    ],
    lang: [language.react, language.builder],
    more: [
      {
        name: "Product",
        link: "linus-product",
      },
      {
        name: "Registration",
        link: "linus-registration",
      },
    ],
  };
</script>

<Project {data}>
  <p>
    This project was dedicated for the marketing team where was illustrated all
    the services that Linus provides. The project is created in builder.io a CMS
    dedicated for framworks application, in this case we used React for the main
    components and extend the module to the builder application.
  </p>
  <p>
    The landing pages are composed by different components that are connected
    true the CMS and use specific identifier to connect to the DB and get the
    right data to display.
  </p>
</Project>
