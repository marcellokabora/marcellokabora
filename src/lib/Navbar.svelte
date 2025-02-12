<script lang="ts">
  import { page } from "$app/state";
  import Create from "./Create.svelte";
  import Dialog from "./Dialog.svelte";
  import Login from "./Login.svelte";
  import { user } from "./store";
  import { supabase } from "./supabaseClient";

  let showModal = $state(false);
  let showCreate = $state(false);
  const menus = [
    {
      icon: "home",
      name: "Home",
      link: "/",
    },
    {
      icon: "dynamic_form",
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
      icon: "account_box",
      name: "Curriculum",
      link: "/curriculum",
    },
  ];
  let y: number = $state(0);
  let showNav: boolean = $state(false);

  function onLogout() {
    supabase.auth.signOut();
    user.set(null);
  }
</script>

<header>
  <div class="logo" data-aos="fade-down">
    <a
      href={showNav ? "" : "/"}
      onclick={() => (showNav = window.screen.width < 1000)}
    >
      <img src="/icon/mk.png" alt="Marcello Kabora" />
    </a>
    <div class="arrow"></div>
  </div>
  <nav class="navbar" data-aos="fade-down" class:scrolled={y > 200}>
    <ul>
      {#each menus as menu}
        <li class:active={page.url.pathname === menu.link}>
          <a href={menu.link}>
            <span class="material-icons">{menu.icon}</span>
            <span>{menu.name}</span>
          </a>
        </li>
      {/each}
    </ul>
    <div class="account">
      <button
        class="user"
        onclick={() => ($user ? (showModal = false) : (showModal = true))}
      >
        <i class="material-icons">account_circle</i>
      </button>
      {#if $user}
        <div class="dropdown">
          <div class="email">{$user.email}</div>
          <div class="actions">
            <button onclick={() => (showCreate = true)}>
              <i class="material-icons">add_circle</i>
              Create</button
            >
            <button onclick={onLogout}>
              <i class="material-icons">logout</i>
              Logout</button
            >
          </div>
        </div>
      {/if}
    </div>
  </nav>
  {#if showNav}
    <nav class="navbig">
      {#each menus as menu}
        <div class="menu" class:active={page.url.pathname === menu.link}>
          <a href={menu.link} onclick={() => (showNav = false)}>
            <span>{menu.name}</span>
            <span class="material-icons">{menu.icon}</span>
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
    <Create bind:showCreate />
  </Dialog>
{/if}

<svelte:window bind:scrollY={y} />

<style>
  header {
    position: fixed;
    z-index: 999;
    .logo {
      position: fixed;
      top: 0;
      left: 0;
      height: 100px;
      background-color: #1b1b1b;
      width: 180px;
      zoom: 0.9;
      z-index: 999;
      img {
        width: 100px;
        position: relative;
        left: 50px;
        top: 23px;
        z-index: 1;
        cursor: pointer;
      }
      .arrow {
        position: absolute;
        top: 0;
        right: -100px;
        width: 0;
        height: 0;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-top: 100px solid #1b1b1b;
      }
    }
    .navbar {
      position: fixed;
      display: flex;
      align-items: center;
      color: white;
      top: 0;
      width: 100%;
      height: 60px;
      backdrop-filter: blur(50px);
      &.scrolled {
        background-color: rgba(61, 61, 61, 0.8);
      }
      > ul {
        display: flex;
        align-items: center;
        flex: 1;
        margin-left: 180px;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          zoom: 0.8;
          &.active a {
            background-color: rgba(255, 255, 255, 0.4);
            color: rgba(0, 0, 0, 0.8);
          }
          .material-icons {
            margin-right: 10px;
          }
          a {
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 10px 20px;
            border-radius: 100px;
          }
        }
      }
      .account {
        position: relative;
        padding-right: 1em;
        &:hover .dropdown {
          visibility: visible;
          opacity: 1;
          display: block;
        }
        .user {
          color: white;
        }
        .dropdown {
          position: absolute;
          right: 0;
          visibility: hidden;
          transition: all 0.5s ease;
          margin-top: 20px;
          margin-right: 1em;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
          background-color: rgba(255, 255, 255, 0.8);
          color: black;
          border-radius: 0.5em;
          .email {
            font-size: small;
            padding: 1em;
          }
          .actions {
            display: flex;
            gap: 1em;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            button {
              padding: 1em;
              padding: 1em;
              width: 100%;
              display: flex;
              align-items: center;
              gap: 1em;
              color: rgb(61, 61, 61);
              &:hover {
                color: black;
              }
            }
          }
        }
      }
    }

    .navbig {
      position: fixed;
      height: 100%;
      width: 100%;
      background-color: rgb(0 0 0 / 95%);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-top: 20px;
      .menu {
        white-space: nowrap;
        padding: 10px;
        margin: 0;
        margin-right: 20px;
      }
      a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding-left: 50px;
      }
      .material-icons {
        margin-left: 20px;
      }
    }

    @media (max-width: 800px) {
      .navbar {
        display: none;
      }
      .logo {
        zoom: 0.7;
      }
    }
  }
</style>
