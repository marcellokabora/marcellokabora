<script lang="ts">
	import { language, type Project } from '$lib/interfaces';
	import ProjectUi from '$lib/Project.svelte';
	const data: Project = {
		banner: {
			cover: '/project/airesis/airesis-00.png',
			title: 'Airesis',
			slogan: 'Edemocracy Website'
		},
		date: 'Dec 2014',
		gallery: [
			'/project/airesis/airesis-01.png',
			'/project/airesis/airesis-02.png',
			'/project/airesis/airesis-03.png',
			'/project/airesis/airesis-04.png',
			'/project/airesis/airesis-logo.jpg'
		],
		lang: [language.jquery],
		more: [
			{
				name: 'Maggiolino',
				link: 'maggiolino'
			},
			{
				name: 'Cosmoprof',
				link: 'cosmoprof'
			}
		]
	};
</script>

<ProjectUi {data}>
	<p>
		<a href="http://airesis.it" target="_blank">Airesis</a> is an application where anyone can create
		a post and discuss pros and cons with an algorithm for calculating the initiative of each user. I
		designed some of the features related to the visualization of like the element of the discussions,
		the comments field, the homepage, and the logo.
	</p>
</ProjectUi>
