<script lang="ts">
  import Banner from "$lib/Banner.svelte";
  import Bannero from "$lib/Bannero.svelte";
  import Create from "$lib/Create.svelte";
  import type { Projecto } from "$lib/database.types";
  import Dialog from "$lib/Dialog.svelte";
  import { getLang, imgPlaceholder, urlStore } from "$lib/functions.js";
  import Icon from "$lib/Icon.svelte";
  import { user } from "$lib/store.js";
  import { supabase } from "$lib/supabaseClient";

  let { data } = $props();

  let project: Projecto | undefined = $state();

  let showCreate = $state(false);
  let inputCover: HTMLInputElement | undefined = $state();
  let inputGallery: HTMLInputElement | undefined = $state();
  if (data.project) project = data.project;
  let loading = $state(false);
  function onCover() {
    if (project && inputCover && inputCover.files) {
      loading = true;
      supabase.storage.from("marcellokabora").remove([project.cover]);
      supabase.storage
        .from("marcellokabora")
        .upload(
          project.name + "/" + inputCover.files[0].name,
          inputCover.files[0],
          {
            upsert: true,
          }
        )
        .then((result) => {
          if (project && result.data) {
            project.cover = result.data.path;
            supabase
              .from("projects")
              .upsert(project)
              .then(() => {
                loading = false;
              });
          }
        });
    }
  }
  function onEdit() {
    console.log(1);

    showCreate = true;
  }
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
      <div class="space"></div>
      <div class="infos">
        <div class="header">
          <div class="desc">Details</div>
        </div>
        <div class="info">
          <span class="material-icons">event</span>
          <span>{project.date}</span>
        </div>
        {#if project.lang}
          <div class="info">
            <span class="material-icons">code</span>
            {#each project.lang as lang}
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
              >Repository
            </a>
          </div>
        {/if}
        {#if project.more}
          <div class="header">
            <div class="desc">Related</div>
          </div>
          <div class="info">
            <Icon>tune</Icon>
            {#each project.more as more}
              <a class="lang" href={`/project/${more}`}>{more}</a>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    <div class="header">Gallery</div>
    <div class="gallery">
      {#each project.gallery as photo}
        <div class="photo" data-aos="fade-up" data-aos-duration="1000">
          <img class="image" src={photo} alt="" />
        </div>
      {/each}
    </div>
  </section>
{/if}

{#if $user}
  <div class="actions">
    <button class="material-icons"
      >photo <input
        bind:this={inputCover}
        onchange={onCover}
        type="file"
        title="Cover"
      /></button
    >
    <button onclick={onEdit} class="material-icons" title="Edit">edit</button>
    <button class="material-icons" title="Gallery"
      >photo_library <input
        bind:this={inputGallery}
        onchange={onCover}
        type="file"
      /></button
    >
  </div>
{/if}

<Dialog bind:showModal={showCreate}>
  <Create bind:showCreate bind:project />
</Dialog>

<style lang="scss">
  .actions {
    position: absolute;
    left: 3em;
    top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    button {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 100px;
      height: 50px;
      width: 50px;
      z-index: 1;
      box-shadow: 0px 0px 2px black;
      zoom: 0.8;
      position: relative;
      overflow: hidden;
      &:hover {
        background-color: rgba(255, 255, 255, 0.6);
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
