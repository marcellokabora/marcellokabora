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
  import { user } from "$lib/store";
  let { data, children } = $props();
  onMount(() => AOS.init());
  user.set(data.user);
</script>

<Navbar />

<main>
  {@render children?.()}
</main>

<Footer />
