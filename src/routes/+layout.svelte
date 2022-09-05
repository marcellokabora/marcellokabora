<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	onMount(() => AOS.init());
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />
