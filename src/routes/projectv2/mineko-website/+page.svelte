<script lang="ts">
	import { language } from '$lib/interfaces';
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
		],
		lang: [language.angular],
		more: [
			{ name: 'Uploader', link: 'mineko-upload' },
			{ name: 'Tickets', link: 'berlinticket' }
		]
	};
</script>

<Project {data}>
	<p>
		The project is designed in Angular and it was connected via iframe with another application for
		the registration of the documents. The design very clean in white and green it perhaps one of
		the best I ever design with a full responsive integration design and all the information
		necessary regarding the service provided.
	</p>
</Project>
