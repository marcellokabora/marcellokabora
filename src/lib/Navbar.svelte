<script lang="ts">
  import { page } from "$app/state";
  import Icon from "@iconify/svelte";
  import Create from "./Create.svelte";
  import type { Projecto } from "./database.types";
  import Dialog from "./Dialog.svelte";
  import Login from "./Login.svelte";
  import { user } from "./store";

  let { projects }: { projects: Projecto[] } = $props();

  let showModal = $state(false);
  let showCreate = $state(false);
  const menus = [
    {
      icon: "home",
      name: "Home",
      link: "/",
    },
    {
      icon: "dynamic-form",
      name: "Knowledge",
      link: "/knowledge",
    },
    {
      icon: "explore",
      name: "Career",
      link: "/career",
    },
    {
      icon: "shop",
      name: "Projects",
      link: "/projects",
    },
    {
      icon: "account-box",
      name: "Curriculum",
      link: "/curriculum",
    },
  ];
  let y: number = $state(0);
  let showNav: boolean = $state(false);
</script>

<svelte:window bind:scrollY={y} />

<header class="fixed z-[999]">
  <div class="fixed top-0 left-0 z-[999] logo" data-aos="fade-down">
    <a
      href={showNav ? "" : "/"}
      onclick={() => (showNav = window.screen.width < 1000)}
    >
      <img
        src="/icon/mk.svg"
        alt="Marcello Kabora"
        class="w-[250px] cursor-pointer"
      />
    </a>
  </div>
  <nav
    class="fixed items-center top-0 w-full h-[60px] backdrop-blur-[50px] flex invisible lg:visible"
    data-aos="fade-down"
    style={y > 200 ? "color: black" : "color: white"}
  >
    <ul class="flex items-center flex-1 ml-[200px]">
      {#each menus as menu (menu.name)}
        <li class="flex items-center justify-center flex-1 scale-80">
          <a
            href={menu.link}
            class="no-underline flex items-center p-[10px_20px] rounded-full"
            style={page.url.pathname === menu.link
              ? "background-color: rgba(255,255,255,0.4); color: black"
              : ""}
          >
            <Icon icon="material-symbols:{menu.icon}" class="mr-[10px]" />
            <span>{menu.name}</span>
          </a>
        </li>
      {/each}
    </ul>
    <div class="relative pr-4 account group">
      <button
        class="text-lg user"
        onclick={() => ($user ? (showModal = false) : (showModal = true))}
      >
        <Icon icon="material-symbols:account-circle" />
      </button>
      {#if $user}
        <div
          class="absolute right-0 invisible transition-all duration-500 mt-5 mr-4 shadow-[0px_0px_2px_rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.8)] text-black rounded-[0.5em] group-hover:visible group-hover:opacity-100 group-hover:block"
        >
          <div class="text-sm p-4 email">{$user.email}</div>
          <div class="flex gap-4 border-t border-[rgba(0,0,0,0.1)] actions">
            <button
              type="submit"
              onclick={() => (showCreate = true)}
              class="p-4 w-full flex items-center gap-4 text-[rgb(61,61,61)] hover:text-black"
            >
              <Icon icon="material-symbols:add-circle" />
              <span>Create</span>
            </button>
            <form method="POST" action="/?/logout">
              <button
                class="p-4 w-full flex items-center gap-4 text-[rgb(61,61,61)] hover:text-black"
              >
                <Icon icon="material-symbols:logout" />
                <span>Logout</span>
              </button>
            </form>
          </div>
        </div>
      {/if}
    </div>
  </nav>
  {#if showNav}
    <nav
      class="fixed h-full w-full bg-[rgb(0_0_0_/_95%)] flex flex-col items-end pt-5 navbig"
    >
      {#each menus as menu (menu.name)}
        <div
          class="whitespace-nowrap p-[10px] m-0 mr-5 menu text-white"
          class:active={page.url.pathname === menu.link}
        >
          <a
            href={menu.link}
            onclick={() => (showNav = false)}
            class="no-underline flex items-center pb-5 border-b border-[rgba(255,255,255,0.2)] pl-[50px]"
          >
            <span>{menu.name}</span>
            <Icon icon="material-symbols:{menu.icon}" class="ml-5" />
          </a>
        </div>
      {/each}
    </nav>
  {/if}
</header>

{#if showModal}
  <Dialog bind:showModal>
    <Login bind:showModal />
  </Dialog>
{/if}

{#if showCreate}
  <Dialog bind:showModal={showCreate}>
    <Create bind:showCreate {projects} />
  </Dialog>
{/if}
