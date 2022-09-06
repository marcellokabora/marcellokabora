<script>
	import Banner from '$lib/Banner.svelte';
	import Projects from '$lib/Projects.svelte';
</script>

<svelte:head>
	<title>Marcello Kabora | Projects</title>
</svelte:head>

<Banner
	cover="/gallery/projects.jpeg"
	title="Projects"
	slogan="A collection of my successful projects"
/>
<br />

<section>
	<Projects />
</section>
