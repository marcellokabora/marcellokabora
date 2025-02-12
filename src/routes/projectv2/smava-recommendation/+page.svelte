<script lang="ts">
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/project/smava-recommendation/image1.jpg",
      title: "Smava",
      slogan: "Recommendation",
    },
    date: "Dec 2016",
    gallery: ["/project/smava-recommendation/image2.jpg"],
    more: [
      {
        name: "Website",
        link: "smava-website",
      },
    ],
  };
</script>

<Project {data}>
  <p>
    This is a letter of recommendation by my manager after I finish my one-year
    contract in Smava, I spend a great time in this company and I learned a lot
    as a developer but more as a colleague. After that time my job was no more
    necessary cause of a different administration of the roles/teams.
  </p>
</Project>
