<script lang="ts">
  import Icon from "@iconify/svelte";
  import Create from "./Create.svelte";
  import type { Project } from "$lib/types/project.types";
  import Dialog from "./Dialog.svelte";
  import { auth } from "$lib/config/firebase";
  import { signOut, type User } from "firebase/auth";
  import { onMount } from "svelte";
  import { scale, fade } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  let { projects }: { projects: Project[] } = $props();

  let showCreate = $state(false);
  let showDropdown = $state(false);
  let showMobileMenu = $state(false);
  let user: User | null = $state(null);
  let dropdownRef: HTMLDivElement;

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "/career", label: "Career" },
    { href: "#contact", label: "Contact" },
  ];

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

  function toggleMobileMenu() {
    showMobileMenu = !showMobileMenu;
  }

  function closeMobileMenu() {
    showMobileMenu = false;
  }
</script>

<!-- Mobile Menu Button - Top Left Corner -->
<button
  onclick={toggleMobileMenu}
  class="fixed top-6 left-6 z-[60] lg:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 cursor-pointer bg-black/50 backdrop-blur-xl border border-white/10 hover:bg-black/60 shadow-2xl"
>
  <Icon
    icon={showMobileMenu ? "material-symbols:close" : "material-symbols:menu"}
    class="text-white text-2xl"
  />
</button>

<!-- Mobile Drawer -->
{#if showMobileMenu}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="fixed inset-0 z-[55] lg:hidden" onclick={closeMobileMenu}>
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div
      class="absolute top-0 left-0 h-full w-64 bg-neutral-950 border-r border-white/10 shadow-2xl"
      onclick={(e) => e.stopPropagation()}
    >
      <div class="flex flex-col p-6 pt-24">
        <!-- Logo -->
        <a href="/" onclick={closeMobileMenu} class="flex items-center mb-8">
          <img src="/icon/mk.svg" alt="MK" class="h-10 w-auto" />
        </a>

        <!-- Menu Items -->
        <nav class="flex flex-col gap-2">
          {#each menuItems as item}
            <a
              href={item.href}
              onclick={closeMobileMenu}
              class="text-zinc-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
            >
              {item.label}
            </a>
          {/each}
        </nav>

        <!-- Auth Section -->
        <div class="mt-8 pt-6 border-t border-white/10">
          {#if user}
            <div class="mb-4">
              <div class="text-xs text-zinc-500 mb-1">Signed in as</div>
              <div class="text-sm text-white truncate">{user.email}</div>
            </div>
            <button
              onclick={() => {
                showCreate = true;
                closeMobileMenu();
              }}
              class="w-full px-4 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-3 transition-all mb-2"
            >
              <Icon icon="material-symbols:add-circle" class="text-lg" />
              <span>Create Project</span>
            </button>
            <button
              onclick={() => {
                handleLogout();
                closeMobileMenu();
              }}
              class="w-full px-4 py-2 text-left text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg flex items-center gap-3 transition-all"
            >
              <Icon icon="material-symbols:logout" class="text-lg" />
              <span>Sign Out</span>
            </button>
          {:else}
            <a
              href="/login"
              onclick={closeMobileMenu}
              class="w-full px-4 py-2 text-center text-sm text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Icon icon="material-symbols:login" class="text-lg" />
              <span>Sign In</span>
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Desktop Navigation -->
<nav
  class="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 items-center gap-8 shadow-2xl"
>
  <!-- Left Navigation -->
  <a
    href="/about"
    class="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 w-20 text-center"
    >About</a
  >
  <a
    href="/projects"
    class="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 w-20 text-center"
    >Projects</a
  >

  <!-- Spacer for logo -->
  <div class="w-20"></div>

  <!-- Right Navigation -->
  <a
    href="/career"
    class="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 w-20 text-center"
    >Career</a
  >
  <a
    href="/contact"
    class="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 w-20 text-center"
    >Contact</a
  >
</nav>

<!-- Animated Logo - Centered -->
<div
  class="fixed top-2 left-1/2 transform -translate-x-1/2 z-[70] max-md:hidden"
  in:scale={{ duration: 800, easing: elasticOut, start: 0.3 }}
>
  <a href="/" class="block group">
    <div class="relative p-2">
      <!-- Animated gradient glow -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse scale-150"
      ></div>
      <!-- Logo -->
      <img
        src="/icon/mk.svg"
        alt="MK"
        class="h-10 w-auto relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
      />
    </div>
  </a>
</div>

<!-- Login/Account Dropdown - Top Right Corner -->
<div class="hidden lg:block fixed top-6 right-6 z-[60]" bind:this={dropdownRef}>
  {#if user}
    <button
      class="text-lg flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 cursor-pointer bg-black/50 backdrop-blur-xl border border-white/10 hover:bg-black/60 shadow-2xl"
      onclick={toggleDropdown}
    >
      <Icon
        icon="material-symbols:account-circle"
        class="text-white text-2xl"
      />
    </button>

    {#if showDropdown}
      <div
        class="absolute right-0 top-14 z-[999] min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-in slide-in-from-top-2 duration-200"
      >
        <!-- User info header -->
        <div class="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <div class="flex items-center gap-3">
            <Icon
              icon="material-symbols:account-circle"
              class="text-2xl text-gray-600"
            />
            <div>
              <div class="text-sm font-medium text-gray-900">Signed in as</div>
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
      class="text-lg flex items-center justify-center w-12 h-12 rounded-full transition-colors bg-black/50 backdrop-blur-xl border border-white/10 hover:bg-black/60 shadow-2xl"
    >
      <Icon icon="material-symbols:login" class="text-white text-2xl" />
    </a>
  {/if}
</div>

{#if showCreate}
  <Dialog bind:showModal={showCreate}>
    <Create bind:showCreate {projects} />
  </Dialog>
{/if}
