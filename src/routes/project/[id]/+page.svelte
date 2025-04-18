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
  import { marked } from "marked";

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
            .includes(project.title.toLocaleLowerCase()),
        ),
        ...data.projects
          .filter((value) => value.type === project.type)
          .sort(() => 0.5 - Math.random()),
      ]),
    )
      .filter((value) => value.name !== project.name)
      .splice(0, 9),
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
  <section data-aos="fade-up" class="min-h-screen mb-16">
    <div class="mt-5 flex flex-wrap gap-8">
      <div class="flex-1">
        <h2 class="border-b border-gray-300 pt-4 pb-4 font-bold text-xl mb-8">
          Description
        </h2>
        <div class="markdown">
          {@html marked.parse(project.info ?? "")}
        </div>
        <h2 class="border-b border-gray-300 pt-4 pb-4 font-bold text-xl mb-8">
          Details
        </h2>
        <div class="flex flex-wrap gap-4">
          {#if project.date}
            <div
              class="opacity-70 flex items-center flex-wrap text-wrap whitespace-nowrap gap-2 mb-2.5"
            >
              <Icon icon="material-symbols:event" />
              <span>{formatDate(project.date)}</span>
            </div>
          {/if}
          {#if project.link}
            <div
              class="opacity-70 flex items-center flex-wrap text-wrap whitespace-nowrap gap-2 mb-2.5"
            >
              <Icon icon="material-symbols:captive-portal" />
              <a
                class="no-underline hover:!text-blue-500 !transition-colors duration-200"
                href={project.link}
                target="_blank">Website</a
              >
            </div>
          {/if}
          {#if project.code}
            <div
              class="opacity-70 flex items-center flex-wrap text-wrap whitespace-nowrap gap-2 mb-2.5"
            >
              <Icon icon="mdi:github" />
              <a
                class="no-underline hover:!text-blue-500 !transition-colors duration-200"
                href={`//github.com/marcellokabora/${project.code}`}
                target="_blank">Github</a
              >
            </div>
          {/if}
          {#if project.lang}
            <div
              class="opacity-70 flex items-center flex-wrap text-wrap whitespace-nowrap gap-2 mb-2.5"
            >
              <Icon icon="material-symbols:code" />
              {#each project.lang.split(",") as lang, i (lang)}
                <a
                  class="no-underline hover:!text-blue-500 !transition-colors duration-200"
                  href={getLang(lang)?.url}
                  target="_blank"
                >
                  {lang.trim().charAt(0).toUpperCase() +
                    lang.trim().slice(1).toLowerCase()}
                </a>
                {#if i < project.lang.split(",").length - 1}
                  <span class="opacity-70">,</span>
                {/if}
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>

    {#if project.youtube}
      <div class="youtube">
        <h2 class="border-b border-gray-300 pt-4 pb-4 font-bold text-xl mb-8">
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
      <div class="gallery">
        <h2 class="border-b border-gray-300 pt-4 pb-4 font-bold text-xl mb-8">
          Gallery
        </h2>
        {#each [...project.gallery].sort() as photo (photo)}
          <div class="relative mb-5">
            <img
              src={getImg(photo)}
              alt=""
              class="w-full transition-all duration-300 shadow-md rounded"
            />
            {#if $user}
              <form
                method="POST"
                action="?/remove"
                use:enhance={({ cancel }) => {
                  if (!confirm("Are you sure you want to delete this photo?")) {
                    cancel();
                    return;
                  }
                  return async ({ result }) => {
                    if (result.type === "success") {
                      if (result?.data?.project)
                        project = result.data.project as Projecto;
                    }
                  };
                }}
              >
                <button
                  type="submit"
                  class="scale-80 h-12 w-12 bg-white rounded-full absolute right-4 top-4 flex items-center justify-center cursor-pointer shadow-md"
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
    {/if}
    <div class="related">
      <h2 class="border-b border-gray-300 pt-4 pb-4 font-bold text-xl mb-8">
        Related
      </h2>
      <div class="main">
        <Projects projects={related} hideSearch />
      </div>
    </div>
  </section>
{/if}

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
        class="bg-white/50 rounded-full h-12 w-12 z-10 shadow-sm scale-80 relative overflow-hidden hover:bg-white/70 flex items-center justify-center"
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
      class="bg-white/50 rounded-full h-12 w-12 z-10 shadow-sm scale-80 hover:bg-white/70 flex items-center justify-center"
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
            if (result.data) project = result.data.project as Projecto;
          }
        };
      }}
    >
      <button
        title="Gallery"
        class="bg-white/50 rounded-full h-12 w-12 z-10 shadow-sm scale-80 hover:bg-white/70 flex items-center justify-center"
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
