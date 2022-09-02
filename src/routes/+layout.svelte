<script>
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import '../app.css'
	import AOS from 'aos'
	import 'aos/dist/aos.css'
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init()
	});
</script>

<Header />

<main>
	<slot />
</main>

<Footer></Footer>
