<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import "$lib/styles/app.css";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import { injectSpeedInsights } from "@vercel/speed-insights";

  if (!dev) {
    inject({ mode: dev ? "development" : "production" });
  }

  // @ts-ignore
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";
  import { initAuth } from "$lib/authStore";
  let { data, children } = $props();

  onMount(() => {
    AOS.init();
    initAuth(); // Initialize Firebase auth
  });

  injectSpeedInsights();
</script>

<Navbar projects={data.projects} />

<main>
  {@render children?.()}
</main>

<Footer />
