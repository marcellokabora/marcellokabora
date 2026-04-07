<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "$lib/styles/app.css";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import { injectSpeedInsights } from "@vercel/speed-insights";
  import { onMount } from "svelte";
  import { initAuth, user } from "$lib/stores/authStore";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";

  let { data, children } = $props();

  let isFullscreen = $derived(
    $page.url.pathname.startsWith("/anybotics") ||
      $page.url.pathname.startsWith("/skyscanner"),
  );

  let hideFooter = $derived(
    isFullscreen || $page.url.pathname.startsWith("/assistant"),
  );

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
            { once: true },
          );
        }
      }
    }
  });
</script>

{#if !isFullscreen}
  <Navbar projects={data.projects} />
{/if}

<main class={isFullscreen ? "h-[100dvh] overflow-hidden" : ""}>
  {@render children?.()}
</main>

{#if !hideFooter}
  <Footer />
{/if}
