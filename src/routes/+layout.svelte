<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import "./app.scss";

  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  if (!dev) {
    inject({ mode: dev ? "development" : "production" });
  }

  // @ts-ignore
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";
  let { data, children } = $props();
  onMount(() => AOS.init());
</script>

<Navbar user={data.user} />

<main>
  {@render children?.()}
</main>

<Footer />
