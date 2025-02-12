<script lang="ts">
  import { language } from "$lib/interfaces";
  import Project from "$lib/Project.svelte";
  const data = {
    banner: {
      cover: "/project/signals/_cover.jpg",
      title: "Yukka Lab",
      slogan: "Signals",
    },
    date: "Feb 2018",
    gallery: [
      "/project/signals/signals-01.png",
      "/project/signals/signals-02.png",
      "/project/signals/signals-03.png",
      "/project/signals/signals-04.png",
      "/project/signals/signals-05.png",
    ],
    lang: [language.angular, language.material, language.highchart],
    more: [
      {
        name: "Network",
        link: "network",
      },
      {
        name: "Chartmap",
        link: "chartmap",
      },
      {
        name: "Sentiment",
        link: "sentiment",
      },
    ],
  };
</script>

<Project {data}>
  <p>
    This project was part of the cockpit of Yukkalab it displays the stock of
    different markets using Highcharts, Angular and Material. The chart is
    composed of 4 series, 2 of them combined together to show the negative or
    positive evaluation with an area chart with different colors and the other 2
    display the action to buy or sell the stocks.
  </p>
</Project>
