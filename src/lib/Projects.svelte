<script lang="ts">
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
</script>

<div class="search">
  <div class="main">
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
</div>

<div class="container">
  {#if filteredList.length > 0}
    {#each filteredList as item}
      <div class="item" data-aos="fade-up">
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
  {:else}
    <div class="empty">No projects found.</div>
  {/if}
</div>

<style>
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    .main {
      height: 40px;
      border: 1px solid silver;
      display: flex;
      border-radius: 100px;
      align-items: center;
      overflow: hidden;
    }
    input {
      padding: 1em;
      border: none;
    }
    .radio {
      margin-left: 0px;
      display: flex;
      button {
        border: none;
        background-color: white;
        box-shadow: none;
        font-weight: normal;
        padding: 1em;
        cursor: pointer;
        border-left: 1px solid silver;
        &.active {
          background-color: #efefef;
        }
        &:last-child {
          border-top-right-radius: 100px;
          border-bottom-right-radius: 100px;
        }
      }
    }
  }
  .container {
    margin-top: 60px;
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1em;
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
      a {
        text-decoration: none;
        color: black;
      }
      &:hover {
        .info {
          opacity: 1;
        }
        .more {
          opacity: 1;
        }
      }
      .info {
        transition: all 0.5s;
        opacity: 0.8;
        font-weight: bold;
        padding: 10px;
        margin-top: -5px;
        text-transform: capitalize;
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
  }
  .empty {
    text-align: center;
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
