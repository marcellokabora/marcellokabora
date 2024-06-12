<script lang="ts">
  import { language } from "$lib/interfaces";
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/project/linus-product/_cover.jpeg",
      title: "Linus ",
      slogan: "Product",
    },
    date: "Feb 2022",
    gallery: [
      "/project/linus-product/linus-lps-01.png",
      "/project/linus-product/linus-lps-02.png",
      "/project/linus-product/linus-lps-03.png",
      "/project/linus-product/linus-lps-04.png",
    ],
    lang: [language.react, language.builder],
    more: [
      {
        name: "Registration",
        link: "linus-registration",
      },
      {
        name: "Marketing",
        link: "linus-marketing",
      },
    ],
  };
</script>

<Project {data}>
  <p>
    This project was dedicated for the sales team where was illustrated all the
    products that Linus provides. The project is created in <a
      href="https://www.builder.io/"
      target="_blank">builder.io</a
    >
    a CMS dedicated for framworks application, in this case we used
    <a href="https://react.dev/" target="_blank">React</a> for the main components
    and extend the module to the builder application.
  </p>
  <p>
    The landing pages are composed by different components that are connected
    true the CMS and use specific identifier to connect to the DB and get the
    right data to display.
  </p>
</Project>
