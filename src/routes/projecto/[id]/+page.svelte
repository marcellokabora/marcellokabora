<script lang="ts">
  import { PUBLIC_STORAGE_URL } from "$env/static/public";
  import Banner from "$lib/Banner.svelte";
  import type { Projecto } from "$lib/database.types.js";
  import type { Snippet } from "svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Marcello Kabora | {data.project?.title} {data.project?.slogan}</title>
  <meta name="thumbnail" content={data.project?.cover} />
  <meta property="og:image" content={data.project?.cover} />
</svelte:head>

{#if data.project}
  <Banner
    cover="{PUBLIC_STORAGE_URL}{data.project.name}/{data.project.cover}"
    title={data.project.title}
    slogan={data.project.slogan}
  />

  <section data-aos="fade-up" data-aos-duration="1000">
    <div class="visual">
      <div class="flexo">
        <div class="header">
          <div class="desc">Description</div>
        </div>
      </div>
      <div class="space"></div>
      <div class="infos">
        <div class="header">
          <div class="desc">Details</div>
        </div>
        <div class="info">
          <span class="material-icons">event</span>
          <span>{data.project.date}</span>
        </div>
        {#if data.project.lang}
          <div class="info">
            <span class="material-icons">code</span>
            {#each data.project.lang as lang}
              <a class="lang" href={lang} target="_blank">{lang}</a>
            {/each}
          </div>
        {/if}
        <!-- {#if data.project.link}
        <div class="info">
          <span class="material-icons">web</span>
          <a class="lang" href={data.project.link} target="_blank">Website</a>
        </div>
      {/if}
      {#if data.project.code}
        <div class="info">
          <img class="icon" src="/icon/github.svg" alt="github" />
          <a
            class="lang"
            href={`//github.com/marcellokabora/${data.project.code}`}
            target="_blank"
            >Repository
          </a>
        </div>
      {/if}
      {#if data.project.more}
        <div class="header">
          <div class="desc">Related</div>
        </div>
        <div class="info">
          <span class="material-icons">tune</span>
          {#each data.project.more as more}
            <a class="lang" href={`/project/${more.link}`}>{more.name}</a>
          {/each}
        </div>
      {/if} -->
      </div>
    </div>
    <div class="header">Gallery</div>
    <div class="gallery">
      {#each data.project.gallery as photo}
        <div class="photo" data-aos="fade-up" data-aos-duration="1000">
          <img
            class="image"
            src="{PUBLIC_STORAGE_URL}{data.project.name}/{photo}"
            alt=""
          />
        </div>
      {/each}
    </div>
  </section>
{/if}

<style lang="scss">
  .visual {
    margin-top: 20px;
    flex: 1;
    flex-wrap: wrap;
    display: flex;
    .infos {
      min-width: 250px;
      .info {
        opacity: 0.7;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        margin-bottom: 10px;
        flex-wrap: nowrap;
        .material-icons {
          margin-right: 10px;
        }
        a {
          text-decoration: none;
        }
        // .icon {
        //   width: 23px;
        //   height: 23px;
        //   margin-right: 10px;
        // }
        .lang:not(:last-child)::after {
          content: ",";
          margin-right: 10px;
        }
      }
    }
  }
  .flexo {
    flex: 1;
  }
  .space {
    width: 20px;
  }
  .image {
    width: 100% !important;
  }
  .photo {
    position: relative;
    margin-bottom: 20px;
  }
  .photo:hover .image {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  .image {
    width: 100%;
    transition: all 0.3s;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  .gallery {
    margin-bottom: 50px;
  }
  .header {
    border-bottom: 1px solid silver;
    opacity: 0.5;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
  }
  @media (max-width: 1000px) {
    .visual {
      flex-direction: column;
    }
  }
</style>
