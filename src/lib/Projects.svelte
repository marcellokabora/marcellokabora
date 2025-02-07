<script lang="ts">
  import type { ProjectThumb } from "./interfaces";
  import { projects } from "./projects";

  let search = $state("");
  let filterby = $state("");

  let filteredList = $derived(
    projects
      .filter(
        (item) =>
          item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          item.lang.includes(search.toLowerCase())
      )
      .filter((item) => (filterby ? item.type === filterby : item))
  );

  function iHeight() {
    return Math.random() * (300 - 200) + 200 + "px";
  }
</script>

<div class="search">
  <input type="text" bind:value={search} placeholder="Search..." />
  <div class="radio">
    <button
      onclick={() =>
        filterby === "webapp" ? (filterby = "") : (filterby = "webapp")}
      class:active={filterby === "webapp"}>Webapp</button
    >
    <button
      onclick={() =>
        filterby === "website" ? (filterby = "") : (filterby = "website")}
      class:active={filterby === "website"}>Website</button
    >
    <button
      onclick={() =>
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
          <img src={item.photo} alt="" />
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
    font-weight: normal;
    margin: 0 -3px;
    border-radius: 0px;
    height: 47px;
    cursor: pointer;
  }
  .radio button.active {
    background-color: #efefef;
  }
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
    margin-top: 60px;
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1em;
  }
  .item {
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
      height: 200px;
      object-fit: cover;
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
    margin-top: -5px;
    text-transform: capitalize;
  }
  .item .more {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
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
    font-size: 1.4em;
  }
  .more .time {
    opacity: 0.6;
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
