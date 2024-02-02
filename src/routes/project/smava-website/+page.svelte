<script lang="ts">
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/project/smava-website/smava_website_00.jpg",
      title: "Smava",
      slogan: "Online Credit",
    },
    date: "Jun 2016",
    gallery: ["/project/smava-website/smava_website_03.png"],
  };
</script>

<Project {data}>
  <p>
    <a href="//smava.de" target="_blank">Smava</a> is a popular brand in Germany
    for credit online my job as a frontend developer was to rebuild the homepage
    of the company that also provides the list of the best offers at the moment.
    I also work with marketing building a few emails and landingpages.
  </p>
</Project>
