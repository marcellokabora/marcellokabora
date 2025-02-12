<script lang="ts">
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/project/mklogo/marcellokabora.jpg",
      title: "Marcello Kabora",
      slogan: "",
    },
    date: "Apr 2013",
    gallery: ["/project/mklogo/marcellokabora.jpg"],
    more: [
      { name: "NBE", link: "nbe" },
      { name: "Serenitas", link: "serenitas" },
    ],
  };
</script>

<Project {data}>
  <p>
    This logo, which I designed some time ago, cleverly combines the first
    letters of my nickname, Marcello Kabora. The 'K' and 'M' are intertwined,
    and the logo's edges fade into the background, creating a soft, blurred
    effect.
  </p>
</Project>
