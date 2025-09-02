<script lang="ts">
  import { page } from "$app/state";
  import Icon from "@iconify/svelte";
  import Create from "./Create.svelte";
  import type { Projecto } from "./database.types";
  import Dialog from "./Dialog.svelte";
  import { auth } from "./firebase";
  import { signOut, type User } from "firebase/auth";
  import { onMount } from "svelte";

  let { projects }: { projects: Projecto[] } = $props();

  let showCreate = $state(false);
  let showDropdown = $state(false);
  let user: User | null = $state(null);
  let dropdownRef: HTMLDivElement;

  onMount(() => {
    // Listen to auth state changes
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      user = firebaseUser;
    });

    // Handle click outside to close dropdown
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef &&
        !dropdownRef.contains(event.target as Node) &&
        showDropdown
      ) {
        showDropdown = false;
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      unsubscribe();
      document.removeEventListener("click", handleClickOutside);
    };
  });

  async function handleLogout() {
    try {
      await signOut(auth);
      showDropdown = false;
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function closeDropdown() {
    showDropdown = false;
  }

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
    <div class="relative pr-4 account" bind:this={dropdownRef}>
      {#if user}
        <button
          class="text-lg user flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 cursor-pointer"
          style={y > 200
            ? "background-color: rgba(0,0,0,0.1); color: black;"
            : "background-color: rgba(255,255,255,0.2); color: white;"}
          onclick={toggleDropdown}
        >
          <Icon icon="material-symbols:account-circle" />
        </button>

        {#if showDropdown}
          <div
            class="absolute right-0 top-12 z-[999] min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-in slide-in-from-top-2 duration-200"
          >
            <!-- User info header -->
            <div class="px-4 py-3 bg-gray-50 border-b border-gray-200">
              <div class="flex items-center gap-3">
                <Icon
                  icon="material-symbols:account-circle"
                  class="text-2xl text-gray-600"
                />
                <div>
                  <div class="text-sm font-medium text-gray-900">
                    Signed in as
                  </div>
                  <div class="text-xs text-gray-600 truncate">{user.email}</div>
                </div>
              </div>
            </div>

            <!-- Menu items -->
            <div class="py-1">
              <button
                type="button"
                onclick={() => {
                  showCreate = true;
                  closeDropdown();
                }}
                class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 transition-colors cursor-pointer"
              >
                <Icon icon="material-symbols:add-circle" class="text-lg" />
                <span>Create Project</span>
              </button>

              <button
                onclick={() => {
                  handleLogout();
                  closeDropdown();
                }}
                class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 flex items-center gap-3 transition-colors border-t border-gray-100 cursor-pointer"
              >
                <Icon icon="material-symbols:logout" class="text-lg" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        {/if}
      {:else}
        <a
          href="/login"
          class="text-lg flex items-center justify-center w-10 h-10 rounded-full transition-colors"
          style={y > 200
            ? "background-color: rgba(0,0,0,0.1); color: black;"
            : "background-color: rgba(255,255,255,0.2); color: white;"}
        >
          <Icon icon="material-symbols:login" />
        </a>
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

      <!-- Mobile auth section -->
      <div class="whitespace-nowrap p-[10px] m-0 mr-5 menu text-white">
        {#if user}
          <div class="pb-5 border-b border-[rgba(255,255,255,0.2)] pl-[50px]">
            <div class="text-sm mb-2">{user.email}</div>
            <button onclick={handleLogout} class="flex items-center text-white">
              <span>Logout</span>
              <Icon icon="material-symbols:logout" class="ml-5" />
            </button>
          </div>
        {:else}
          <a
            href="/login"
            onclick={() => (showNav = false)}
            class="no-underline flex items-center pb-5 border-b border-[rgba(255,255,255,0.2)] pl-[50px]"
          >
            <span>Login</span>
            <Icon icon="material-symbols:login" class="ml-5" />
          </a>
        {/if}
      </div>
    </nav>
  {/if}
</header>

{#if showCreate}
  <Dialog bind:showModal={showCreate}>
    <Create bind:showCreate {projects} />
  </Dialog>
{/if}
