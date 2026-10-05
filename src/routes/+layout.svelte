<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "$lib/styles/app.css";
  import { dev } from "$app/environment";
  import { initAnalytics, trackPageView } from "$lib/config/analytics";
  import { afterNavigate } from "$app/navigation";
  import { onMount, tick } from "svelte";
  import { initAuth, user } from "$lib/stores/authStore";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";

  let { data, children } = $props();

  let isFullscreen = $derived(
    $page.url.pathname.startsWith("/dash0") ||
      $page.url.pathname.startsWith("/anybotics") ||
      $page.url.pathname.startsWith("/skyscanner"),
  );

  let hideFooter = $derived(
    isFullscreen || $page.url.pathname.startsWith("/assistant"),
  );

  onMount(() => {
    initAuth(); // Initialize Firebase auth
  });

  // Analytics only runs in production and never for the logged-in admin
  $effect(() => {
    if (!browser || dev || $user !== null) return;

    // Defer until after page load to improve FCP
    if (document.readyState === "complete") {
      initAnalytics();
    } else {
      window.addEventListener("load", () => initAnalytics(), { once: true });
    }
  });

  // The first page view is sent automatically; track client-side navigations only
  afterNavigate((navigation) => {
    if (navigation.type === "enter" || dev || $user !== null) return;
    tick().then(() => trackPageView($page.url.pathname, document.title));
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
