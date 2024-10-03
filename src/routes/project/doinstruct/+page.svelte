<script lang="ts">
  import { language } from "$lib/interfaces";
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/project/doinstruct/cover.webp",
      title: "doinstruct",
      slogan: "Table Employees",
    },
    date: "Oct 2024",
    gallery: ["/project/doinstruct/image1.png"],
    lang: [language.svelte],
    more: [{ name: "Components", link: "uicomponents" }],
    code: "doinstruct",
  };
</script>

<Project {data}>
  <p>
    This Svelte project offers a dynamic way to explore employee data. It
    fetches information from an API, presenting it in a randomized order to
    avoid any inherent biases or ordering. This randomization ensures each time
    you load the page, you encounter a different arrangement of employees,
    promoting a more diverse and unbiased browsing experience.
    <br /> <br />
    Beyond simply displaying the data, the project provides tools to interact with
    it. A gender filter allows you to refine the displayed employee list, focusing
    on specific demographics within the dataset. Furthermore, the inclusion of infinite
    scrolling means you can seamlessly navigate through the entire database without
    the limitations of traditional pagination.
  </p>
</Project>
