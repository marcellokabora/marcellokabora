<script lang="ts">
  import Banner from "$lib/Banner.svelte";
  import supabaseLoader from "$lib/function";
  import { description } from "$lib/mocks";

  let { data } = $props();

  let projects = data.projects?.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  let search = $state("");
  let filterby = $state("");
</script>

<svelte:head>
  <title>Marcello Kabora | Projects</title>
  <meta name="description" content={description} />
  <meta name="thumbnail" content="/gallery/projects.jpeg" />
  <meta property="og:image" content="/gallery/projects.jpeg" />
</svelte:head>

<Banner
  cover="/gallery/projects.jpeg"
  title="Projects"
  slogan="A collection of my successful projects"
/>
<br />
<section>
  {#if data.projects}
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
      {#if projects}
        {#each projects as item}
          <div class="item" data-aos="fade-up">
            <a href="projecto/{item.name}">
              <div class="imgcont">
                <img
                  src={supabaseLoader({ src: item.name + "/" + item.cover })}
                  alt={item.name}
                />
                <div class="more">
                  <div class="type">{item.type}</div>
                  <div class="time">{item.date}</div>
                </div>
              </div>
            </a>
            <div class="info">{item.name}</div>
          </div>
        {/each}
      {:else}
        <div class="empty">No projects found.</div>
      {/if}
    </div>
  {/if}
</section>

<style lang="scss">
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
