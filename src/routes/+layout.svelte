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

  import { onMount } from "svelte";
  import { initAuth } from "$lib/authStore";
  let { data, children } = $props();

  onMount(() => {
    initAuth(); // Initialize Firebase auth
  });

  injectSpeedInsights();
</script>

<Navbar projects={data.projects} />

<main>
  {@render children?.()}
</main>

<Footer />
