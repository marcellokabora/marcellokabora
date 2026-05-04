<script lang="ts">
  import { enhance } from "$app/forms";
  import ProjectHero from "$lib/components/ProjectHero.svelte";
  import Create from "$lib/components/Create.svelte";
  import type { Project } from "$lib/types/project.types";
  import Dialog from "$lib/components/Dialog.svelte";
  import { getImg } from "$lib/utils/functions";
  import ProductShowcase from "$lib/components//ProductShowcase.svelte";
  import MetaTags from "$lib/components/MetaTags.svelte";
  import { user } from "$lib/stores/authStore";
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";

  let { data } = $props();
  let project: Project = $state(data.project);
  let showCreate = $state(false);
  let inputCover: HTMLInputElement | undefined = $state();
  let inputGallery: HTMLInputElement | undefined = $state();
  let formCover: HTMLFormElement | undefined = $state();
  let formGallery: HTMLFormElement | undefined = $state();
  let scrollContainer: HTMLDivElement | undefined = $state();
  let activeGalleryIndex = $state(0);

  let galleryItems = $derived(() => {
    const items = [];
    if (project.youtube) {
      items.push({ type: "video", url: project.youtube });
    }
    if (project.gallery) {
      items.push(
        ...project.gallery.map((photo) => ({ type: "image", url: photo })),
      );
    }
    return items;
  });

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
      const imageWidth = scrollContainer.scrollWidth / galleryItems().length;
      scrollContainer.scrollTo({
        left: imageWidth * index,
        behavior: "smooth",
      });
      activeGalleryIndex = index;
    }
  }

  function handleGalleryScroll() {
    if (scrollContainer) {
      const imageWidth = scrollContainer.scrollWidth / galleryItems().length;
      const currentIndex = Math.round(scrollContainer.scrollLeft / imageWidth);
      activeGalleryIndex = currentIndex;
    }
  }

  function scrollPrev() {
    const newIndex = Math.max(0, activeGalleryIndex - 1);
    scrollToImage(newIndex);
  }

  function scrollNext() {
    const newIndex = Math.min(
      galleryItems().length - 1,
      activeGalleryIndex + 1,
    );
    scrollToImage(newIndex);
  }

  let reorderForm: HTMLFormElement | undefined = $state();
  let reorderInput: HTMLInputElement | undefined = $state();

  function moveImage(url: string, direction: -1 | 1) {
    const gallery = [...(project.gallery ?? [])];
    const idx = gallery.indexOf(url);
    if (idx === -1) return;
    const target = idx + direction;
    if (target < 0 || target >= gallery.length) return;
    [gallery[idx], gallery[target]] = [gallery[target], gallery[idx]];
    project.gallery = gallery;
    // Shift active index to follow the moved slide
    const youtubeOffset = project.youtube ? 1 : 0;
    activeGalleryIndex = target + youtubeOffset;
    scrollToImage(activeGalleryIndex);
    // Persist to Firestore
    if (reorderInput) reorderInput.value = gallery.join(",");
    reorderForm?.requestSubmit();
  }
</script>

<MetaTags
  title="Marcello Annicchiarico | {project?.title} | {project?.slogan}"
  description={project?.slogan}
  image={getImg(project.cover!)}
  url={`https://marcellokabora.com/project/${project?.name}`}
/>

{#key project.name}
  <ProjectHero {project} />
  <section
    class="my-14 bg-neutral-900 text-white"
    in:fly={{ y: 100, duration: 1000, delay: 100 }}
  >
    <div
      class="container mx-auto max-w-6xl px-6 text-center flex flex-col items-center gap-8"
    >
      {#if project.youtube || project.gallery}
        <!-- Carousel for all screen sizes -->
        <div class="relative w-full">
          <!-- Left button -->
          {#if galleryItems().length > 1}
            <button
              type="button"
              onclick={scrollPrev}
              class="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-primary-600 text-white border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer -translate-x-1"
              disabled={activeGalleryIndex === 0}
              aria-label="Previous image"
            >
              <Icon icon="material-symbols:chevron-left" class="text-xl" />
            </button>
          {/if}

          <!-- Right button -->
          {#if galleryItems().length > 1}
            <button
              type="button"
              onclick={scrollNext}
              class="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-primary-600 text-white border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer translate-x-1"
              disabled={activeGalleryIndex === galleryItems().length - 1}
              aria-label="Next image"
            >
              <Icon icon="material-symbols:chevron-right" class="text-xl" />
            </button>
          {/if}

          <div
            bind:this={scrollContainer}
            onscroll={handleGalleryScroll}
            class="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
            style="scrollbar-width: none; -ms-overflow-style: none;"
          >
            {#each galleryItems() as item, index (item.type === "video" ? `video-${item.url}` : item.url)}
              <div class="relative group w-full flex-shrink-0 snap-center px-2">
                {#if item.type === "video"}
                  <iframe
                    src="https://www.youtube.com/embed/{item.url}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="w-full aspect-video max-h-[70vh] mx-auto"
                  ></iframe>
                {:else}
                  <img
                    src={getImg(item.url)}
                    alt=""
                    loading="lazy"
                    class="w-full h-auto max-h-[70vh] mx-auto object-contain transition-all duration-300"
                  />
                  {#if $user}
                    <!-- Reorder buttons -->
                    <div
                      class="absolute left-4 top-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <button
                        type="button"
                        onclick={() => moveImage(item.url, -1)}
                        disabled={(project.gallery?.indexOf(item.url) ?? 0) ===
                          0}
                        class="h-8 w-8 bg-black/40 text-white/60 rounded-full flex items-center justify-center border border-white/10 hover:bg-purple-500 hover:text-white hover:border-purple-500/30 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
                        aria-label="Move left"
                      >
                        <Icon
                          icon="material-symbols:arrow-back"
                          class="text-sm"
                        />
                      </button>
                      <button
                        type="button"
                        onclick={() => moveImage(item.url, 1)}
                        disabled={(project.gallery?.indexOf(item.url) ?? 0) ===
                          (project.gallery?.length ?? 1) - 1}
                        class="h-8 w-8 bg-black/40 text-white/60 rounded-full flex items-center justify-center border border-white/10 hover:bg-purple-500 hover:text-white hover:border-purple-500/30 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
                        aria-label="Move right"
                      >
                        <Icon
                          icon="material-symbols:arrow-forward"
                          class="text-sm"
                        />
                      </button>
                    </div>
                    <form
                      method="POST"
                      action="?/remove"
                      use:enhance={({ cancel }) => {
                        if (
                          !confirm(
                            "Are you sure you want to delete this photo?",
                          )
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
                      <input type="hidden" name="name" value={item.url} />
                      <button
                        type="submit"
                        class="scale-[0.8] h-12 w-12 bg-black/40 text-white/60 rounded-full absolute right-4 top-4 flex items-center justify-center cursor-pointer shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white border border-white/10 hover:border-red-500/30"
                      >
                        <Icon icon="material-symbols:delete" />
                      </button>
                    </form>
                  {/if}
                {/if}
              </div>
            {/each}
          </div>

          <!-- Pagination dots -->
          {#if galleryItems().length > 1}
            <div class="flex justify-center gap-2 mt-6">
              {#each galleryItems() as _, index}
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
      {/if}
      <ProductShowcase
        projects={data.related}
        totalCount={data.projects.length}
      />
    </div>
  </section>
{/key}

{#if $user}
  <div class="absolute md:right-6 md:top-25 flex flex-col items-center gap-4">
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
        class="bg-black/80 cursor-pointer text-white rounded-full h-12 w-12 z-10 shadow-lg scale-80 relative overflow-hidden hover:bg-zinc-800 flex items-center justify-center border border-zinc-700 transition-all duration-200"
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
      class="bg-black/80 cursor-pointer text-white rounded-full h-12 w-12 z-10 shadow-lg scale-80 hover:bg-zinc-800 flex items-center justify-center border border-zinc-700 transition-all duration-200"
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
        class="bg-black/80 cursor-pointer text-white rounded-full h-12 w-12 z-10 shadow-lg scale-80 hover:bg-zinc-800 flex items-center justify-center border border-zinc-700 transition-all duration-200"
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
    <!-- Hidden reorder form -->
    <form
      method="POST"
      action="?/reorder"
      bind:this={reorderForm}
      use:enhance={() => {
        return async ({ result }) => {
          if (result.type === "success" && result?.data?.project)
            project = result.data.project as Project;
        };
      }}
    >
      <input type="hidden" name="gallery" bind:this={reorderInput} />
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
