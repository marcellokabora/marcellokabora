<script lang="ts">
  import type { Projecto } from "$lib/database.types.js";
  import { formatDate, getImg, imgPlaceholder } from "$lib/functions";
  import { description } from "$lib/mocks";

  interface Props {
    projects: Projecto[];
    hideSearch?: boolean;
  }

  let { projects, hideSearch }: Props = $props();

  let search = $state("");
  let filter = $state("");

  let filtered: Projecto[] = $state([]);

  $effect(() => {
    filtered = projects
      .filter(
        (item) =>
          item.name.includes(search.toLowerCase()) ||
          item.title.toLocaleLowerCase().includes(search.toLowerCase())
      )
      .filter((item) => (filter ? item.type === filter : item));
  });
</script>

<svelte:head>
  <title>Marcello Kabora | Projects</title>
  <meta name="description" content={description} />
  <meta name="thumbnail" content="/gallery/projects.jpeg" />
  <meta property="og:image" content="/gallery/projects.jpeg" />
</svelte:head>

<div class="projects">
  {#if !hideSearch}
    <div class="search" data-aos="fade-up">
      <div class="main">
        <input type="text" bind:value={search} placeholder="Search..." />
        <div class="radio">
          <button
            onclick={() =>
              filter === "webapp" ? (filter = "") : (filter = "webapp")}
            class:active={filter === "webapp"}>Webapp</button
          >
          <button
            onclick={() =>
              filter === "website" ? (filter = "") : (filter = "website")}
            class:active={filter === "website"}>Website</button
          >
          <button
            onclick={() =>
              filter === "design" ? (filter = "") : (filter = "design")}
            class:active={filter === "design"}>Design</button
          >
        </div>
      </div>
    </div>
  {/if}

  <div class="container" data-aos="fade-up">
    {#if filtered[0]}
      {#each filtered as item}
        <div class="item">
          <a href="/project/{item.name}" data-sveltekit-preload-data="hover">
            <div class="imgcont">
              <img
                src={item.cover ? getImg(item.cover) : imgPlaceholder}
                alt={item.name}
              />
              <div class="more">
                <div class="type">{item.type}</div>
                {#if item.date}
                  <div class="time">{formatDate(item.date)}</div>
                {/if}
              </div>
            </div>
            <div class="info">
              <div class="title">{item.title}</div>
              <div class="slogan">{item.slogan}</div>
            </div>
          </a>
        </div>
      {/each}
    {:else}
      <div class="empty">No projects found.</div>
    {/if}
  </div>
</div>

<style>
  .projects {
    display: grid;
    gap: 4em;
  }
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
    .item {
      padding: 1px;
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
        padding: 10px;
        margin-top: -5px;
        text-transform: capitalize;
        .title {
          font-weight: bold;
        }
        .slogan {
          font-size: small;
        }
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
