<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    link?: string;
    aside?: boolean;
    photo?: string;
    title?: string;
    children?: Snippet;
  }

  let {
    link = "",
    aside = false,
    photo = "",
    title = "",
    children,
  }: Props = $props();
</script>

<div
  class="section"
  class:side={aside}
  data-aos="fade-up"
  data-aos-duration="1000"
>
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
  }
  .side {
    text-align: right;
  }
  .side .photo {
    order: 2;
    margin: 0;
    margin-left: 2em;
    margin-right: 0;
  }
  .photo {
    /* height: 300px;
    width: 300px; */
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2em;
    img {
      object-fit: cover;
      height: 200px;
      width: 200px;
    }
  }
  .info {
    flex: 1;
  }
  .info .tito {
    font-weight: bold;
    font-size: 1.2em;
  }
  .info .tito a {
    color: black;
    text-decoration: none;
  }
  hr {
    opacity: 0.2;
  }
  @media (max-width: 800px) {
    .section {
      flex-direction: column;
    }
    .photo {
      order: 1;
      width: 100%;
      height: 200px;
      margin: 0 !important;
      margin-bottom: 50px !important;
      order: 2;
    }
    .info {
      order: 2;
      margin-bottom: 20px;
      text-align: center;
    }
  }
</style>
