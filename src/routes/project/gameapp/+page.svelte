<script lang="ts">
  import { language } from "$lib/interfaces";
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/gallery/gameapp.jpg",
      title: "Game App",
      slogan: "Webapp",
    },
    date: "Aug 2022",
    gallery: ["/project/gameapp/gameapp01.png"],
    lang: [language.svelte],
    more: [
      { name: "Network", link: "network" },
      { name: "Ticket", link: "berlinticket" },
    ],
    // link: "//gameapp-five.vercel.app/aa0c86fa",
    code: "gameapp",
  };
</script>

<Project {data}>
  <p>
    The game app is an application based on end to end players, where you can
    play with another player in realtime using the firebase realtime database.
    The game is very simple by adding or subtract the current number the winner
    is the one to reach the zero score.
  </p>
  <p>
    The application require to enter in one room with max 2 players and add an
    uinique name, each player can create a room. After each player leave the
    game the room will be deleted.
  </p>
</Project>
