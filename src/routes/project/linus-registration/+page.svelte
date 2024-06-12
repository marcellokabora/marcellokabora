<script lang="ts">
  import { language } from "$lib/interfaces";
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/project/linus/_cover.jpeg",
      title: "Linus",
      slogan: "Registration",
    },
    date: "Apr 2021",
    gallery: [
      "/project/linus/linus-01.png",
      "/project/linus/linus-02.png",
      "/project/linus/linus-03.png",
      "/project/linus/linus-04.png",
    ],
    lang: [language.angular, language.material],
    more: [
      {
        name: "Product",
        link: "linus-product",
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
    This application is built in <a href="//angular.io" target="_blank"
      >Angular</a
    >,
    <a href="//material.angular.io" target="_blank">Material</a>, and
    <a href="//firebase.google.com" target="_blank">Firebase</a>
    using the
    <a href="//material.angular.io/components/stepper/overview" target="_blank"
      >Stepper</a
    >
    to connect 3 different forms that allow the user to select a project and collect
    information of the customer and collet in the
    <a href="//firebase.google.com/products/firestore" target="_blank"
      >Firestore</a
    >
    database.
  </p>
</Project>
