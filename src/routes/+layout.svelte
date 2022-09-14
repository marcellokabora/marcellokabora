<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	// @ts-ignore
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	onMount(() => AOS.init());
	export const prerender = true;
</script>

<svelte:head>
	<title>Marcello Kabora | Fronted Engineer</title>
	<meta
		name="description"
		content="Frontend Engineer with over 12 years of experience in frontend development, user interface, graphic design, data visualization, and progressive web app"
	/>
	<meta
		name="keywords"
		content="Software, Engineer, Frontend, Fullstack, Developer, UI/UX, Nodejs, Svelte, Angular, React, Material, D3, Firebase, Data Visualization"
	/>
</svelte:head>

<Navbar />

<main>
	<slot />
</main>

<Footer />
