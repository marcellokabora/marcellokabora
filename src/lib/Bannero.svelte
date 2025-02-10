<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Create from "./Create.svelte";
  import type { Projecto } from "./database.types";
  import Dialog from "./Dialog.svelte";
  import { urlStore } from "./functions";
  import Icon from "./Icon.svelte";
  import { user } from "./store";
  import { supabase } from "./supabaseClient";
  interface Props {
    project: Projecto;
  }

  let { project = $bindable() }: Props = $props();
  let showCreate = $state(false);
  let input: HTMLInputElement | undefined = $state();
  let cover = $state(
    project.cover ? urlStore + project.cover : "/gallery/styling.jpg"
  );
  let loading = $state(false);
  function onCover() {
    if (input && input.files && input.files[0]) {
      loading = true;
      supabase.storage
        .from("marcellokabora")
        .upload(project.name + "/" + input.files[0].name, input.files[0], {
          upsert: true,
        })
        .then((result) => {
          console.log(result.data);
          if (result.data) {
            project.cover = result.data.path;
            cover = urlStore + project.cover;
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
    showCreate = true;
  }
</script>

<div class="banner" data-aos="fade-down" data-aos-duration="1000">
  <img class="cover" src={cover} alt="cover" />
  <Header title={project.title} slogan={project.slogan} zoom={1.2} />
  <img class="arcbot" src="/shape/arc_bot.png" alt="arcbot" />
  {#if loading}
    <div class="loading">
      <div class="loader"></div>
    </div>
  {/if}
  {#if $user}
    <div class="actions">
      <button class="material-icons"
        >photo <input
          class="file"
          bind:this={input}
          onchange={onCover}
          type="file"
        /></button
      >
      <button onclick={onEdit} class="material-icons">edit</button>
    </div>
  {/if}
</div>

<Dialog bind:showModal={showCreate}>
  <Create bind:showCreate />
</Dialog>

<style lang="scss">
  .actions {
    position: absolute;
    top: 5em;
    right: 2em;
    display: flex;
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
      .file {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
    }
  }
  .banner {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
    position: relative;
    text-align: center;
    padding-bottom: 40px;
    .loading {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #fff;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
  .cover {
    position: absolute;
    object-fit: cover;
    height: 105%;
    width: 105%;
    z-index: -1;
    filter: saturate(1) brightness(0.8) blur(8px);
  }
  .arcbot {
    position: absolute;
    bottom: -1px;
    width: 100%;
    z-index: 1;
  }
</style>
