<script lang="ts">
	import { language } from '$lib/interfaces';
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/maggiolino/maggiolino_00.png',
			title: 'Maggiolino',
			slogan: 'Online Books'
		},
		date: 'Mar 2015',
		gallery: [
			'/project/maggiolino/maggiolino_01.png',
			'/project/maggiolino/maggiolino_02.png',
			'/project/maggiolino/maggiolino_03.png',
			'/project/maggiolino/maggiolino_04.png',
			'/project/maggiolino/maggiolino_05.png'
		],
		lang: [language.jquery, language.bootstrap, language.mysql],
		more: [
			{
				name: 'Cosmoprof',
				link: 'cosmoprof'
			},
			{
				name: 'Christmas',
				link: 'christmas'
			}
		]
	};
</script>

<Project {data}>
	<p>
		Libreria Maggiolino is a bookstore based in Viareggio, Italy where you can purchase a large
		category of books. I worked for this company for 3 years by upgrading the website week after
		week and optimizing site infrastructure to get a better user experience. The technology used for
		this project was jQuery and MySql.
	</p>
</Project>
