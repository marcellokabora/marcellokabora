<script lang="ts">
  import { enhance } from "$app/forms";
  import Banner from "$lib/Banner.svelte";
  import Create from "$lib/Create.svelte";
  import type { Projecto } from "$lib/database.types";
  import Dialog from "$lib/Dialog.svelte";
  import {
    formatDate,
    getLang,
    imgPlaceholder,
    productPlaceholder,
    urlStore,
  } from "$lib/functions";
  import { user } from "$lib/store";

  let { data } = $props();
  let project: Projecto = $state(data.project ?? productPlaceholder);
  let showCreate = $state(false);
  let inputCover: HTMLInputElement | undefined = $state();
  let inputGallery: HTMLInputElement | undefined = $state();
  let formCover: HTMLFormElement | undefined = $state();
  let formGallery: HTMLFormElement | undefined = $state();

  $effect(() => {
    project = data.project ?? productPlaceholder;
  });
</script>

<svelte:head>
  <title>Marcello Kabora | {project?.title} {project?.slogan}</title>
  <meta name="thumbnail" content={project?.cover} />
  <meta property="og:image" content={project?.cover} />
</svelte:head>

{#if project}
  <Banner
    cover={project?.cover ? urlStore + project.cover : imgPlaceholder}
    title={project.title}
    slogan={project.slogan}
  />
  <section data-aos="fade-up" data-aos-duration="1000">
    <div class="visual">
      <div class="flexo">
        <div class="header">
          <div class="desc">Description</div>
        </div>
        <p>{project.info}</p>
      </div>
      <div class="infos">
        <div class="header">
          <div class="desc">Details</div>
        </div>
        {#if project.date}
          <div class="info">
            <span class="material-icons">event</span>
            <span>{formatDate(project.date)}</span>
          </div>
        {/if}
        {#if project.lang}
          <div class="info">
            <span class="material-icons">code</span>
            {#each project.lang.split(",") as lang}
              <a class="lang" href={getLang(lang)} target="_blank">{lang}</a>
            {/each}
          </div>
        {/if}
        {#if project.link}
          <div class="info">
            <span class="material-icons">web</span>
            <a class="lang" href={project.link} target="_blank">Website</a>
          </div>
        {/if}
        {#if project.code}
          <div class="info">
            <img class="icon" src="/icon/github.svg" alt="github" />
            <a
              class="lang"
              href={`//github.com/marcellokabora/${project.code}`}
              target="_blank"
              >Github
            </a>
          </div>
        {/if}
      </div>
    </div>
    {#if project.more && project.more[0]}
      <div class="info">
        <i class="material-icons">tune</i>
        {#each project.more as more}
          <a class="lang" href={`/project/${more.toLowerCase()}`}>{more}</a>
        {/each}
      </div>
    {/if}
    {#if project.gallery}
      <div class="gallery">
        <div class="header">Gallery</div>
        {#each [...project.gallery].sort() as photo}
          <div class="photo" data-aos="fade-up">
            <img class="image" src={urlStore + photo} alt="" />
            {#if $user}
              <form
                method="POST"
                action="?/remove"
                use:enhance={() => {
                  return async ({ result }) => {
                    if (result.type === "success") {
                      if (result?.data?.project)
                        project = result.data.project as Projecto;
                    }
                  };
                }}
              >
                <button class="material-icons" type="submit">delete</button>
                <div class="hidden">
                  <input type="text" name="name" value={photo} />
                </div>
              </form>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </section>
{/if}

{#if $user}
  <div class="actions">
    <form
      method="POST"
      action="?/cover"
      enctype="multipart/form-data"
      bind:this={formCover}
      use:enhance={() => {
        return async ({ result }) => {
          if (result.type === "success") {
            if (result?.data?.cover)
              project.cover = result.data.cover as string;
          }
        };
      }}
    >
      <button class="material-icons"
        >photo <input
          bind:this={inputCover}
          onchange={() => formCover?.requestSubmit()}
          type="file"
          title="Cover"
          name="cover"
        /></button
      >
    </form>
    <button
      onclick={() => (showCreate = true)}
      class="material-icons"
      title="Edit">edit</button
    >
    <form
      method="POST"
      action="?/gallery"
      enctype="multipart/form-data"
      bind:this={formGallery}
      use:enhance={() => {
        return async ({ result }) => {
          if (result.type === "success") {
            if (result.data) project = result.data.project as Projecto;
          }
        };
      }}
    >
      <button class="material-icons" title="Gallery"
        >photo_library <input
          multiple
          bind:this={inputGallery}
          onchange={() => formGallery?.requestSubmit()}
          type="file"
          name="gallery"
        /></button
      >
    </form>
  </div>
{/if}

{#if showCreate}
  <Dialog bind:showModal={showCreate}>
    <Create bind:showCreate bind:project projects={data.projects} />
  </Dialog>
{/if}

<style>
  .actions {
    position: absolute;
    left: 3em;
    top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    button {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 100px;
      height: 50px;
      width: 50px;
      z-index: 1;
      box-shadow: 0px 0px 2px black;
      zoom: 0.8;
      position: relative;
      overflow: hidden;
      &:hover {
        background-color: rgba(255, 255, 255, 0.7);
      }
      input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
        margin-top: -30px;
      }
    }
  }
  section {
    min-height: 100vh;
  }
  .visual {
    margin-top: 20px;
    flex: 1;
    flex-wrap: wrap;
    display: flex;
    gap: 2em;
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
    font-size: 1.2em;
  }
  .infos {
    min-width: 250px;
  }
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
    .icon {
      width: 23px;
      height: 23px;
      margin-right: 10px;
    }
    .lang:not(:last-child)::after {
      content: ",";
      margin-right: 10px;
    }
  }
  .flexo {
    flex: 1;
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
    margin-bottom: 4em;
    margin-top: 2em;
    .photo {
      position: relative;
      img {
        border-radius: 0.5em;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
      }
      button {
        zoom: 0.8;
        height: 50px;
        width: 50px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 100px;
        position: absolute;
        right: 1em;
        top: 1em;
      }
    }
  }

  @media (max-width: 1000px) {
    .visual {
      flex-direction: column;
    }
  }
</style>
