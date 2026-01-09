<script lang="ts">
  import { enhance } from "$app/forms";
  import Banner from "$lib/components/Banner.svelte";
  import Create from "$lib/components/Create.svelte";
  import type { Project } from "$lib/types/project.types";
  import Dialog from "$lib/components/Dialog.svelte";
  import {
    formatDate,
    getImg,
    getLang,
    imgPlaceholder,
  } from "$lib/utils/functions";
  import ProductShowcase from "$lib/components//ProductShowcase.svelte";
  import { user } from "$lib/stores/authStore";
  import Icon from "@iconify/svelte";
  import { marked } from "marked";
  import { fly } from "svelte/transition";

  let { data } = $props();
  let project: Project = $state(data.project);
  let showCreate = $state(false);
  let inputCover: HTMLInputElement | undefined = $state();
  let inputGallery: HTMLInputElement | undefined = $state();
  let formCover: HTMLFormElement | undefined = $state();
  let formGallery: HTMLFormElement | undefined = $state();
  let scrollContainer: HTMLDivElement;
  let activeGalleryIndex = $state(0);

  $effect(() => {
    project = data.project;
    activeGalleryIndex = 0;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }
  });

  function scrollToImage(index: number) {
    if (scrollContainer) {
      const imageWidth = scrollContainer.scrollWidth / project.gallery!.length;
      scrollContainer.scrollTo({
        left: imageWidth * index,
        behavior: "smooth",
      });
      activeGalleryIndex = index;
    }
  }

  function handleGalleryScroll() {
    if (scrollContainer) {
      const imageWidth = scrollContainer.scrollWidth / project.gallery!.length;
      const currentIndex = Math.round(scrollContainer.scrollLeft / imageWidth);
      activeGalleryIndex = currentIndex;
    }
  }
</script>

<svelte:head>
  <title>Marcello Annicchiarico | {project?.title} | {project?.slogan}</title>
  <meta name="thumbnail" content={getImg(project.cover!)} />
  <meta property="og:image" content={getImg(project.cover!)} />
</svelte:head>

<Banner
  cover={project?.cover ? getImg(project.cover) : imgPlaceholder}
  title={project.title}
  slogan={project.slogan}
/>
<section
  class="mb-16 bg-neutral-900 text-white min-h-screen py-12"
  in:fly={{ y: 100, duration: 1000, delay: 100 }}
>
  <div class="container mx-auto max-w-6xl px-6">
    <div class="mt-5 flex flex-wrap gap-8">
      <div class="flex-1">
        <h2
          class="border-b border-slate-700 pt-4 pb-4 font-bold text-xl mb-8 text-primary-400"
        >
          Description
        </h2>
        <div class="markdown">
          {@html marked.parse(project.info ?? "")}
        </div>
        <h2
          class="border-b border-slate-700 pt-4 pb-4 font-bold text-xl mb-8 text-primary-400"
        >
          Details
        </h2>
        <div class="flex flex-wrap gap-4">
          {#if project.date}
            <div
              class="text-zinc-400 flex items-center flex-wrap text-wrap whitespace-nowrap gap-2 mb-2.5"
            >
              <Icon icon="material-symbols:event" />
              <span>{formatDate(project.date)}</span>
            </div>
          {/if}
          {#if project.link}
            <div
              class="text-zinc-400 flex items-center flex-wrap text-wrap whitespace-nowrap gap-2 mb-2.5"
            >
              <Icon icon="material-symbols:captive-portal" />
              <a
                class="no-underline text-zinc-300 hover:!text-secondary-400 !transition-colors duration-200"
                href={project.link}
                target="_blank">Website</a
              >
            </div>
          {/if}
          {#if project.code}
            <div
              class="text-zinc-400 flex items-center flex-wrap text-wrap whitespace-nowrap gap-2 mb-2.5"
            >
              <Icon icon="mdi:github" />
              <a
                class="no-underline text-zinc-300 hover:!text-secondary-400 !transition-colors duration-200"
                href={`//github.com/marcellokabora/${project.code}`}
                target="_blank">Github</a
              >
            </div>
          {/if}
          {#if project.lang}
            <div
              class="text-zinc-400 flex items-center flex-wrap text-wrap whitespace-nowrap gap-2 mb-2.5"
            >
              <Icon icon="material-symbols:code" />
              <div class="flex flex-wrap gap-2">
                {#each project.lang.split(",") as lang, i (lang)}
                  <a
                    class="no-underline text-white bg-primary-600/50 hover:bg-primary-600 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 border border-primary-500/30"
                    href={getLang(lang)?.url}
                    target="_blank"
                  >
                    {lang.trim().charAt(0).toUpperCase() +
                      lang.trim().slice(1).toLowerCase()}
                  </a>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>

    {#if project.youtube}
      <div class="youtube">
        <h2
          class="border-b border-slate-700 pt-4 pb-4 font-bold text-xl mb-8 text-primary-400"
        >
          Video
        </h2>
        <iframe
          src="https://www.youtube.com/embed/{project.youtube}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="w-full aspect-video"
        ></iframe>
      </div>
    {/if}

    {#if project.gallery}
      <div>
        <h2
          class="border-b border-slate-700 pt-4 pb-4 font-bold text-xl mb-8 text-primary-400"
        >
          Gallery
        </h2>

        <!-- Carousel for all screen sizes -->
        <div>
          <div
            bind:this={scrollContainer}
            onscroll={handleGalleryScroll}
            class="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
            style="scrollbar-width: none; -ms-overflow-style: none;"
          >
            {#each [...project.gallery].sort() as photo (photo)}
              <div class="relative group w-full flex-shrink-0 snap-center px-2">
                <img
                  src={getImg(photo)}
                  alt=""
                  class="w-full h-auto max-h-[70vh] mx-auto object-contain transition-all duration-300 shadow-xl rounded-lg border border-slate-800 hover:border-secondary-500/50"
                />
                {#if $user}
                  <form
                    method="POST"
                    action="?/remove"
                    use:enhance={({ cancel }) => {
                      if (
                        !confirm("Are you sure you want to delete this photo?")
                      ) {
                        cancel();
                        return;
                      }
                      return async ({ result }) => {
                        if (result.type === "success") {
                          if (result?.data?.project)
                            project = result.data.project as Project;
                        }
                      };
                    }}
                  >
                    <button
                      type="submit"
                      class="scale-[0.8] h-12 w-12 bg-red-500 text-white rounded-full absolute right-4 top-4 flex items-center justify-center cursor-pointer shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600"
                    >
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

          <!-- Pagination dots -->
          {#if project.gallery.length > 1}
            <div class="flex justify-center gap-2 mt-6">
              {#each [...project.gallery] as _, index}
                <button
                  type="button"
                  onclick={() => scrollToImage(index)}
                  class="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 hover:scale-125 {activeGalleryIndex ===
                  index
                    ? 'bg-secondary-400'
                    : 'bg-zinc-600 hover:bg-zinc-500'}"
                  aria-label="Go to image {index + 1}"
                ></button>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/if}
    <ProductShowcase
      projects={data.related}
      totalCount={data.projects.length}
    />
  </div>
</section>

{#if $user}
  <div class="absolute left-12 top-[120px] flex flex-col items-center gap-4">
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
      <button
        class="bg-primary-600/80 text-white rounded-full h-12 w-12 z-10 shadow-lg scale-80 relative overflow-hidden hover:bg-primary-500 flex items-center justify-center border border-primary-500/50 transition-all duration-200"
      >
        <Icon icon="material-symbols:add-photo-alternate" />
        <input
          bind:this={inputCover}
          onchange={() => formCover?.requestSubmit()}
          type="file"
          title="Cover"
          name="cover"
          class="absolute inset-0 opacity-0 cursor-pointer -mt-7"
        />
      </button>
    </form>
    <button
      onclick={() => (showCreate = true)}
      title="Edit"
      class="bg-primary-600/80 text-white rounded-full h-12 w-12 z-10 shadow-lg scale-80 hover:bg-primary-500 flex items-center justify-center border border-primary-500/50 transition-all duration-200"
    >
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
            if (result.data) project = result.data.project as Project;
          }
        };
      }}
    >
      <button
        title="Gallery"
        class="bg-primary-600/80 text-white rounded-full h-12 w-12 z-10 shadow-lg scale-80 hover:bg-primary-500 flex items-center justify-center border border-primary-500/50 transition-all duration-200"
      >
        <Icon icon="material-symbols:add-to-photos" />
        <input
          multiple
          bind:this={inputGallery}
          onchange={() => formGallery?.requestSubmit()}
          type="file"
          name="gallery"
          class="absolute inset-0 opacity-0 cursor-pointer"
        />
      </button>
    </form>
  </div>
{/if}

{#if showCreate}
  <Dialog bind:showModal={showCreate}>
    <Create bind:showCreate bind:project projects={data.projects} />
  </Dialog>
{/if}

<style>
  /* Hide scrollbar for carousel */
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
</style>
