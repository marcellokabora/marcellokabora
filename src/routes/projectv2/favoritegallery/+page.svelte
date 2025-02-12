<script lang="ts">
  import { language } from "$lib/interfaces";
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/project/favoritegallery/cover.png",
      title: "Favorite Products",
      slogan: "",
    },
    date: "Feb 2025",
    gallery: [
      "/project/favoritegallery/photo1.png",
      "/project/favoritegallery/photo2.png",
      "/project/favoritegallery/photo3.png",
    ],
    lang: [language.angular],
    more: [
      { name: "Doinstruct", link: "doinstruct" },
      { name: "Berlinticket", link: "berlinticket" },
    ],
    code: "FavoriteGallery",
  };
</script>

<Project {data}>
  <p>
    This Angular project displays product and favorite lists across two pages.
    Product data is fetched from the dummyjson.com API. Clicking on a product
    opens a modal where users can add it to their favorites. The project is
    designed to showcase a list of products and allow users to manage their
    favorite products. The Product List page displays the initial product data,
    while the Favorites page displays the user's chosen products. The key
    feature is the modal that appears when a user clicks on a product. This
    modal provides details about the selected product and a way to add it to the
    user's favorites. The Favorites page then dynamically updates to reflect any
    additions.
  </p>
</Project>
