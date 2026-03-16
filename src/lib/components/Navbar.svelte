<script lang="ts">
  import Icon from "@iconify/svelte";
  import Create from "./Create.svelte";
  import type { Project } from "$lib/types/project.types";
  import Dialog from "./Dialog.svelte";
  import { auth } from "$lib/config/firebase";
  import { signOut, type User } from "firebase/auth";
  import { onMount } from "svelte";
  import { scale, fly } from "svelte/transition";
  import { elasticOut, cubicOut } from "svelte/easing";
  import { page } from "$app/stores";

  let { projects }: { projects: Project[] } = $props();

  let showCreate = $state(false);
  let showDropdown = $state(false);
  let showMobileMenu = $state(false);
  let user: User | null = $state(null);
  let dropdownRef: HTMLDivElement | undefined = $state();
  let mounted = $state(false);

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact" },
  ];

  function isActive(href: string): boolean {
    return $page.url.pathname === href;
  }

  onMount(() => {
    mounted = true;

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
{#if mounted}
  <button
    onclick={toggleMobileMenu}
    in:scale={{ duration: 500, delay: 300, easing: elasticOut, start: 0.5 }}
    class="fixed top-6 left-6 z-[60] lg:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 cursor-pointer bg-black/50 backdrop-blur-xl border border-white/10 hover:bg-black/60 shadow-2xl"
  >
    <Icon
      icon={showMobileMenu ? "material-symbols:close" : "material-symbols:menu"}
      class="text-white text-2xl"
    />
  </button>
{/if}

<!-- Mobile Drawer -->
{#if showMobileMenu}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="fixed inset-0 z-[55] lg:hidden" onclick={closeMobileMenu}>
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div
      class="absolute top-0 left-0 h-full w-64 bg-neutral-950 border-r border-white/10 shadow-2xl"
      onclick={(e) => e.stopPropagation()}
      in:fly={{ x: -300, duration: 400, easing: cubicOut }}
    >
      <div class="flex flex-col p-6 pt-24">
        <!-- Logo -->
        <a href="/" onclick={closeMobileMenu} class="flex items-center mb-8">
          <img src="/icon/mk.svg" alt="MK" class="h-10 w-auto" />
        </a>

        <!-- Menu Items -->
        <nav class="flex flex-col gap-2">
          {#each menuItems as item, i}
            <a
              href={item.href}
              onclick={closeMobileMenu}
              in:fly={{
                x: -50,
                duration: 400,
                delay: 100 + i * 50,
                easing: cubicOut,
              }}
              class="{isActive(item.href)
                ? 'text-white bg-primary-500/20'
                : 'text-zinc-400'} hover:text-white hover:bg-white/5 px-4 py-3 rounded-full transition-all duration-200 font-medium"
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
              class="w-full px-4 py-2 text-center text-sm text-white bg-secondary-500 hover:bg-secondary-600 rounded-lg flex items-center justify-center gap-2 transition-all"
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
{#if mounted}
  <nav
    class="hidden lg:flex fixed top-0 left-0 right-0 z-50 px-8 py-4 items-center justify-between"
  >
    <!-- Logo left -->
    <a
      href="/"
      class="relative group"
      in:scale={{ duration: 1000, easing: elasticOut, start: 0.3 }}
    >
      <div class="relative">
        <div
          class="absolute inset-0 bg-gradient-to-r from-secondary-400 via-blue-500 to-primary-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse scale-150"
        ></div>
        <img
          src="/icon/mk.svg"
          alt="MK"
          class="h-9 w-auto relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]"
        />
      </div>
    </a>

    <!-- Links right -->
    <div class="flex items-center gap-1">
      {#each menuItems as item, i}
        <a
          href={item.href}
          in:fly={{
            y: -20,
            duration: 600,
            delay: 100 + i * 80,
            easing: cubicOut,
          }}
          class="text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 {isActive(
            item.href,
          )
            ? 'text-white bg-white/10'
            : 'text-zinc-400 hover:text-white hover:bg-white/5'}"
        >
          {item.label}
        </a>
      {/each}

      <!-- Auth button -->
      <div
        class="ml-3 relative"
        bind:this={dropdownRef}
        in:scale={{ duration: 500, delay: 500, easing: elasticOut, start: 0.5 }}
      >
        {#if user}
          <button
            class="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 cursor-pointer bg-white/10 hover:bg-white/15 border border-white/10"
            onclick={toggleDropdown}
          >
            <Icon
              icon="material-symbols:account-circle"
              class="text-white text-xl"
            />
          </button>

          {#if showDropdown}
            <div
              class="absolute right-0 top-12 z-[999] min-w-[200px] bg-[#1a1a1a] rounded-xl shadow-xl border border-zinc-800 overflow-hidden"
            >
              <div class="px-4 py-3 border-b border-zinc-800">
                <div class="text-xs text-zinc-500 mb-0.5">Signed in as</div>
                <div class="text-sm text-white truncate">{user.email}</div>
              </div>
              <div class="py-1">
                <button
                  type="button"
                  onclick={() => {
                    showCreate = true;
                    closeDropdown();
                  }}
                  class="w-full px-4 py-2.5 text-left text-sm text-zinc-300 hover:text-white hover:bg-white/5 flex items-center gap-3 transition-colors cursor-pointer"
                >
                  <Icon icon="material-symbols:add-circle" class="text-lg" />
                  <span>Create Project</span>
                </button>
                <button
                  onclick={() => {
                    handleLogout();
                    closeDropdown();
                  }}
                  class="w-full px-4 py-2.5 text-left text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 flex items-center gap-3 transition-colors border-t border-zinc-800 cursor-pointer"
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
            class="flex items-center justify-center w-9 h-9 rounded-full transition-colors bg-white/10 hover:bg-white/15 border border-white/10"
          >
            <Icon icon="material-symbols:login" class="text-white text-xl" />
          </a>
        {/if}
      </div>
    </div>
  </nav>
{/if}

{#if showCreate}
  <Dialog bind:showModal={showCreate}>
    <Create bind:showCreate {projects} />
  </Dialog>
{/if}

<!-- Floating Chat CTA — hidden on the /assistant page itself -->
{#if mounted && !$page.url.pathname.startsWith("/assistant")}
  <a
    href="/assistant"
    in:fly={{ y: 20, duration: 600, delay: 800, easing: cubicOut }}
    class="fixed bottom-6 right-6 z-[60] flex items-center gap-2.5 px-5 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold shadow-[0_0_28px_rgba(99,102,241,0.45)] hover:shadow-[0_0_36px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
  >
    <Icon icon="mdi:robot" class="text-lg flex-shrink-0" />
    <span>Assistant</span>
    <span
      class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"
    ></span>
  </a>
{/if}
