<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../app.css";

  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  if (!dev) {
    inject({ mode: dev ? "development" : "production" });
  }

  // @ts-ignore
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
  onMount(() => AOS.init());
</script>

<Navbar />

<main>
  {@render children?.()}
</main>

<Footer />
