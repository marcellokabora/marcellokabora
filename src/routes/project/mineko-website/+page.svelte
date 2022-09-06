<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/mineko-website/_cover.png',
			title: 'Mineko',
			slogan: 'Website'
		},
		date: 'Jan 2017',
		gallery: [
			'/project/mineko-website/mineko-website-01.png',
			'/project/mineko-website/mineko-website-02.png',
			'/project/mineko-website/mineko-website-03.png',
			'/project/mineko-website/mineko-website-04.png',
			'/project/mineko-website/mineko-website-05.png'
		]
	};
</script>

<Project {data}>
	<p>
		This website was designed for Mineko a small startup in Berlin where I worked for a relatively
		short period.
	</p>
	<p>
		The project is designed in Angular and it was connected via iframe with another application for
		the registration of the documents. The design very clean in white and green it perhaps one of
		the best I ever design with a full responsive integration design and all the information
		necessary regarding the service provided.
	</p>
</Project>
