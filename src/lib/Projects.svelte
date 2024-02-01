<script lang="ts">
  import type { ProjectThumb } from "./interfaces";

  const items: ProjectThumb[] = [
    {
      photo: "/project/7echno/cover.jpg",
      name: "7echno",
      link: "/project/7echno",
      type: "webapp",
      time: "Oct 2023",
      lang: ["svelte", "firebase"],
    },
    {
      photo: "/project/7echno-logo/logo-02.jpg",
      name: "7echno",
      link: "/project/7echno-logo",
      type: "design",
      time: "Dec 2023",
      lang: ["figma"],
    },
    {
      photo: "/project/eva-monitoring/cover.jpg",
      name: "EVA - Monitoring",
      link: "/project/eva-monitoring",
      type: "webapp",
      time: "Dec 2022",
      lang: ["angular", "material", "aws"],
    },
    {
      photo: "/project/eva-heatmap/cover.jpg",
      name: "EVA - Heatmap",
      link: "/project/eva-heatmap",
      type: "design",
      time: "Sept 2022",
      lang: ["figma"],
    },
    {
      photo: "/project/network/_cover.png",
      name: "Yukka - Network",
      link: "/project/network",
      type: "webapp",
      time: "Jan 2018",
      lang: ["angular", "d3"],
    },
    {
      photo: "/gallery/gameapp.jpg",
      name: "Game App",
      link: "/project/gameapp",
      type: "webapp",
      time: "Sep 2022",
      lang: ["svelte"],
    },
    {
      photo: "/project/berlinticket/berlinticket0.jpg",
      name: "Berlin Ticket",
      link: "/project/berlinticket",
      type: "webapp",
      time: "Jul 2022",
      lang: ["angular", "material", "firebase"],
    },
    {
      photo: "/project/sentiment/_cover.jpg",
      name: "Yukka - Sentiment",
      link: "/project/sentiment",
      type: "webapp",
      time: "April 2014",
      lang: ["angular", "highchart"],
    },
    {
      photo: "/project/linus-marketing/_cover.jpeg",
      name: "Linus - Marketing",
      link: "/project/linus-marketing",
      type: "website",
      time: "Feb 2022",
      lang: ["react", "builder"],
    },
    {
      photo: "/project/chartmap/_cover.jpg",
      name: "Yukka - Chartmap",
      link: "/project/chartmap",
      type: "webapp",
      time: "Jul 2018",
      lang: ["angular", "highchart"],
    },
    {
      photo: "/project/linus-product/_cover.jpeg",
      name: "Linus - Product",
      link: "/project/linus-product",
      type: "website",
      time: "Sep 2021",
      lang: ["react", "builder"],
    },
    {
      photo: "/project/linus/_cover.jpeg",
      name: "Linus - Registration",
      link: "/project/linus-registration",
      type: "webapp",
      time: "Apr 2021",
      lang: ["angular", "material"],
    },
    {
      photo: "/project/uicomponents/_cover.jpeg",
      name: "Building - Components",
      link: "/project/uicomponents",
      type: "webapp",
      time: "Jan 2020",
      lang: ["augular"],
    },
    {
      photo: "/project/appmanager/_cover.jpeg",
      name: "Building - Appmanager",
      link: "/project/appmanager",
      type: "webapp",
      time: "May 2021",
      lang: ["angular"],
    },
    {
      photo: "/project/serenitas/serenitas-00.jpg",
      name: "Serenitas",
      link: "/project/serenitas",
      type: "design",
      time: "Jan 2015",
      lang: ["illustrator"],
    },
    {
      photo: "/project/firenze/_cover.png",
      name: "Firenze",
      link: "/project/firenze",
      type: "design",
      time: "Aug 2012",
      lang: ["illiustrator"],
    },
    {
      photo: "/project/mklogo/marcellokabora.jpg",
      name: "Marcello Kabora",
      link: "/project/mklogo",
      type: "design",
      time: "Apr 2013",
      lang: ["illustrator"],
    },
    {
      photo: "/project/loretdemar/loretdemar-00.png",
      name: "Tanglang - Lloret De Mar",
      link: "/project/loretdemar",
      type: "website",
      time: "Mar 2015",
      lang: ["Jquery"],
    },
    {
      photo: "/project/wokamoka-avatar/wokamoka-avatar-00.jpg",
      name: "Wokamoka",
      link: "/project/wokamoka-avatar",
      type: "design",
      time: "Jun 2010",
      lang: ["illustrator"],
    },
    {
      photo: "/project/wokamoka-website/wokamoka-website-00.png",
      name: "Wokamoka",
      link: "/project/wokamoka-website",
      type: "website",
      time: "Oct 2010",
      lang: ["flash"],
    },
    {
      photo: "/project/mineko-upload/_cover.jpg",
      name: "Uploader",
      link: "/project/mineko-upload",
      type: "webapp",
      time: "Mar 2017",
      lang: ["augular", "material", "firebase"],
    },
    {
      photo: "/project/airesis/airesis-00.png",
      name: "Airesis",
      link: "/project/airesis",
      type: "webapp",
      time: "Dec 2014",
      lang: ["jquery"],
    },
    {
      photo: "/project/iaa/iaa_00.png",
      name: "Tanglang - IAA",
      link: "/project/iaa",
      type: "website",
      time: "Feb 2015",
      lang: ["jquery"],
    },
    {
      photo: "/project/signals/_cover.jpg",
      name: "Yukka - Signals",
      link: "/project/signals",
      type: "webapp",
      time: "Feb 2018",
      lang: ["angular", "highchart"],
    },
    {
      photo: "/project/autoginevra/autoginevra_00.png",
      name: "Tanglang - Autoginevra",
      link: "/project/autoginevra",
      type: "website",
      time: "Jul 2015",
      lang: ["jquery"],
    },
    {
      photo: "/project/maggiolino/maggiolino_00.png",
      name: "Maggiolino",
      link: "/project/maggiolino",
      type: "website",
      time: "Mar 2015",
      lang: ["jquery", "bootstrap"],
    },
    {
      photo: "/project/smava-website/smava_website_00.jpg",
      name: "Smava",
      link: "/project/smava-website",
      type: "website",
      time: "Jun 2016",
      lang: ["backbone", "semantic"],
    },
    {
      photo: "/project/yawiki/_cover.png",
      name: "Yawiki",
      link: "/project/yawiki",
      type: "webapp",
      time: "Oct 2015",
      lang: ["jquery"],
    },
    {
      photo: "/project/cosmoprof/cosmoprof_00.png",
      name: "Tanglang - Cosmoprof",
      link: "/project/cosmoprof",
      type: "website",
      time: "Apr 2014",
      lang: ["jquery"],
    },
    {
      photo: "/project/christmas/christmas_00.png",
      name: "Tanglang - Christmas",
      link: "/project/christmas",
      type: "website",
      time: "Mar 2014",
      lang: ["jquery"],
    },
    {
      photo: "/project/mineko-website/_cover.png",
      name: "Mineko",
      link: "/project/mineko-website",
      type: "website",
      time: "Jan 2017",
      lang: ["react"],
    },
    {
      photo: "/project/nbe/nbe-00.jpg",
      name: "NBE",
      link: "/project/nbe",
      type: "design",
      time: "Feb 2012",
      lang: [],
    },
    {
      photo: "/project/smava-best/smava-best-00.jpg",
      name: "Smava - Recommendation",
      link: "/project/smava-best",
      type: "recommendation",
      time: "Nov 2016",
      lang: [],
    },
  ].sort(() => 0.5 - Math.random());

  let search = "";
  let filterby = "";

  $: filteredList = items
    .filter(
      (item) =>
        item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.lang.includes(search.toLowerCase())
    )
    .filter((item) => (filterby ? item.type === filterby : item));

  function iHeight() {
    return Math.random() * (400 - 200) + 200 + "px";
  }
</script>

<div class="search">
  <input type="text" bind:value={search} placeholder="Search..." />
  <div class="radio">
    <button
      on:click={() =>
        filterby === "webapp" ? (filterby = "") : (filterby = "webapp")}
      class:active={filterby === "webapp"}>Webapp</button
    >
    <button
      on:click={() =>
        filterby === "website" ? (filterby = "") : (filterby = "website")}
      class:active={filterby === "website"}>Website</button
    >
    <button
      on:click={() =>
        filterby === "design" ? (filterby = "") : (filterby = "design")}
      class:active={filterby === "design"}>Design</button
    >
  </div>
</div>

<div class="container">
  {#each filteredList as item}
    <div class="item" data-aos="fade-up" data-aos-duration="1000">
      <a href={item.link}>
        <div class="imgcont">
          <div class="more">
            <div class="type">{item.type}</div>
            <div class="time">{item.time}</div>
          </div>
          <img src={item.photo} alt="" height={iHeight()} />
        </div>
      </a>
      <div class="info">{item.name}</div>
    </div>
  {/each}
</div>

<style lang="scss">
  .radio {
    margin-left: 0px;
  }
  .radio button {
    border: 1px solid silver;
    background-color: white;
    box-shadow: none;
    padding: 0px 22px;
    font-size: 13px;
    font-weight: normal;
    margin: 0 -3px;
    border-radius: 0px;
    height: 47px;
    cursor: pointer;
  }
  .radio button.active {
    background-color: #efefef;
  }
  /* .radio button:first-child {
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
	} */
  .radio button:last-child {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
  }
  .search input {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    padding: 15px 20px;
    border: 1px solid silver;
  }

  a {
    text-decoration: none;
    color: black;
  }
  .container {
    column-gap: 20px;
    column-count: 3;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .item {
    break-inside: avoid-column;
    padding: 1px;
    margin-bottom: 20px;
    padding: 0px;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 2px;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s;
    position: relative;
    border-radius: 10px;
    &:hover img {
      filter: brightness(0.5);
    }
    img {
      width: 100%;
      transition: all 0.5s;
      object-fit: cover;
    }
  }
  .item:hover .info {
    opacity: 1;
  }
  .item:hover .more {
    opacity: 1;
  }
  .item .info {
    transition: all 0.5s;
    opacity: 0.8;
    font-weight: bold;
    padding: 10px;
    font-size: 18px;
    margin-top: -5px;
    text-transform: capitalize;
  }
  .item .more {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    font-size: 30px;
    color: white;
    opacity: 0;
    z-index: 10;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .imgcont {
    position: relative;
  }
  .more {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    font-size: 30px;
    color: white;
    opacity: 0;
    z-index: 10;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .more .type {
    text-transform: capitalize;
  }
  .more .time {
    opacity: 0.6;
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    .container {
      column-count: 2;
    }
  }
  @media (max-width: 600px) {
    .container {
      column-count: 1;
    }
  }
  @media (max-width: 600px) {
    .search input {
      border-radius: 100px;
      min-width: 60%;
    }
    .search button {
      display: none;
    }
  }
</style>
