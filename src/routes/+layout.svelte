<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import "$lib/styles/app.css";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import { injectSpeedInsights } from "@vercel/speed-insights";
  import { onMount } from "svelte";
  import { initAuth, user } from "$lib/authStore";
  import { browser } from "$app/environment";

  let { data, children } = $props();

  onMount(() => {
    initAuth(); // Initialize Firebase auth
  });

  // Check if we should inject analytics
  $effect(() => {
    if (browser) {
      const isLoggedIn = $user !== null;

      // Only inject analytics if in production and not logged in
      if (!dev && !isLoggedIn) {
        // Defer analytics until after page load to improve FCP
        if (document.readyState === "complete") {
          inject({ mode: "production" });
          injectSpeedInsights();
        } else {
          window.addEventListener(
            "load",
            () => {
              inject({ mode: "production" });
              injectSpeedInsights();
            },
            { once: true }
          );
        }
      }
    }
  });
</script>

<Navbar projects={data.projects} />

<main>
  {@render children?.()}
</main>

<Footer />
