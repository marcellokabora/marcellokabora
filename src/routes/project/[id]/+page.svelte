<script lang="ts">
  import { enhance } from "$app/forms";
  import Banner from "$lib/Banner.svelte";
  import Create from "$lib/Create.svelte";
  import type { Projecto } from "$lib/database.types";
  import Dialog from "$lib/Dialog.svelte";
  import { formatDate, getImg, getLang, imgPlaceholder } from "$lib/functions";
  import Projects from "$lib/Projects.svelte";
  import { user } from "$lib/store";
  import Icon from "@iconify/svelte";

  let { data } = $props();
  let project: Projecto = $state(data.project);
  let showCreate = $state(false);
  let inputCover: HTMLInputElement | undefined = $state();
  let inputGallery: HTMLInputElement | undefined = $state();
  let formCover: HTMLFormElement | undefined = $state();
  let formGallery: HTMLFormElement | undefined = $state();
  let related = $derived(
    Array.from(
      new Set([
        ...data.projects.filter((value) =>
          value.title
            .toLocaleLowerCase()
            .includes(project.title.toLocaleLowerCase())
        ),
        ...data.projects
          .filter((value) => value.type === project.type)
          .sort(() => 0.5 - Math.random()),
      ])
    )
      .filter((value) => value.name !== project.name)
      .splice(0, 9)
  );

  $effect(() => {
    project = data.project;
  });
</script>

<svelte:head>
  <title>Marcello Kabora | {project?.title} | {project?.slogan}</title>
  <meta name="thumbnail" content={getImg(project.cover!)} />
  <meta property="og:image" content={getImg(project.cover!)} />
</svelte:head>

{#if project}
  <Banner
    cover={project?.cover ? getImg(project.cover) : imgPlaceholder}
    title={project.title}
    slogan={project.slogan}
  />
  <section data-aos="fade-up">
    <div class="visual">
      <div class="flexo">
        <h2>Description</h2>
        <div class="description">{project.info}</div>
        <h2>Details</h2>
        <div class="infos">
          {#if project.date}
            <div class="info">
              <Icon icon="material-symbols:event" />
              <span>{formatDate(project.date)}</span>
            </div>
          {/if}
          {#if project.link}
            <div class="info">
              <Icon icon="material-symbols:captive-portal" />
              <a class="lang" href={project.link} target="_blank">Website</a>
            </div>
          {/if}
          {#if project.code}
            <div class="info">
              <Icon icon="mdi:github" />
              <a
                class="lang"
                href={`//github.com/marcellokabora/${project.code}`}
                target="_blank"
                >Github
              </a>
            </div>
          {/if}
          {#if project.lang}
            <div class="info">
              <Icon icon="material-symbols:code" />
              {#each project.lang.split(",") as lang}
                <a class="lang" href={getLang(lang)} target="_blank">{lang}</a>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>

    {#if project.youtube}
      <div class="youtube">
        <h2>Video</h2>
        <iframe
          src="https://www.youtube.com/embed/{project.youtube}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    {/if}

    {#if project.gallery}
      <div class="gallery">
        <h2>Gallery</h2>
        {#each [...project.gallery].sort() as photo}
          <div class="photo">
            <img src={getImg(photo)} alt="" />
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
                <button type="submit">
                  <Icon icon="material-symbols:delete" />
                </button>
                <div class="hidden">
                  <input type="text" name="name" value={photo} />
                </div>
              </form>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
    <div class="related">
      <h2>Realted</h2>
      <div class="main">
        <Projects projects={related} hideSearch />
      </div>
    </div>
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
      <button>
        <Icon icon="material-symbols:add-photo-alternate" />
        <input
          bind:this={inputCover}
          onchange={() => formCover?.requestSubmit()}
          type="file"
          title="Cover"
          name="cover"
        />
      </button>
    </form>
    <button onclick={() => (showCreate = true)} title="Edit">
      <Icon icon="material-symbols:edit" />
    </button>
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
      <button title="Gallery">
        <Icon icon="material-symbols:add-to-photos" />
        <input
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
    margin-bottom: 4em;
  }
  .visual {
    margin-top: 20px;
    flex: 1;
    flex-wrap: wrap;
    display: flex;
    gap: 2em;
    .flexo {
      flex: 1;
    }
  }
  h2 {
    border-bottom: 1px solid silver;
    opacity: 0.5;
    padding-top: 1em;
    padding-bottom: 1em;
    font-weight: bold;
    font-size: 1.2em;
  }
  .infos {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    .info {
      opacity: 0.7;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      text-transform: capitalize;
      margin-bottom: 10px;
      flex-wrap: wrap;
      text-wrap: nowrap;
      gap: 0.5em;
      a {
        text-decoration: none;
      }
      .lang:not(:last-child)::after {
        content: ",";
        margin-right: 10px;
      }
    }
  }
  .photo {
    position: relative;
    margin-bottom: 20px;
    img {
      width: 100%;
      transition: all 0.3s;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
    }
  }
  .youtube {
    iframe {
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  }
  .gallery {
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
  }
</style>
