<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    link?: string;
    aside?: boolean;
    photo?: string;
    title?: string;
    small?: boolean;
    children?: Snippet;
  }

  let {
    link = "",
    aside = false,
    photo = "",
    title = "",
    small = false,
    children,
  }: Props = $props();
</script>

<div class="section" class:side={aside} data-aos="fade-up" class:small>
  <div class="photo">
    {#if link}
      <a href={link} target="_blank">
        <img src={photo} alt="" />
      </a>
    {:else}
      <img src={photo} alt="" />
    {/if}
  </div>
  <div class="info">
    <div class="tito">
      {#if link}
        <a href={link} target="_blank">
          {title}
        </a>
      {:else}
        {title}
      {/if}
    </div>
    <hr />
    <div class="desc">
      {@render children?.()}
    </div>
  </div>
</div>

<style>
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px;
    gap: 4em;
    &.small {
      gap: 2em;
      .photo img {
        height: 200px;
        width: 200px;
      }
    }
  }
  .side {
    text-align: right;
  }
  .side .photo {
    order: 2;
    margin: 0;
    margin-right: 0;
  }
  .photo {
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      object-fit: cover;
      height: 300px;
      width: 300px;
    }
  }
  .info {
    flex: 1;
  }
  .tito {
    font-weight: bold;
    font-size: 1.2em;
  }
  .tito a {
    color: black;
    text-decoration: none;
  }
  hr {
    opacity: 0.2;
  }
  @media (max-width: 800px) {
    .section {
      flex-direction: column;
      &.small {
        img {
          position: relative !important;
        }
      }
    }
    .tito {
      font-size: 2em;
    }
    .side {
      margin-top: 2em;
    }
    .photo {
      order: 1;
      margin: 0;
      order: 2;
      z-index: -1;
      height: 200px;
      img {
        position: absolute;
        width: 100vw;
        height: 250px;
      }
    }
    .info {
      order: 2;
      margin-bottom: 20px;
      text-align: center;
    }
  }
</style>
