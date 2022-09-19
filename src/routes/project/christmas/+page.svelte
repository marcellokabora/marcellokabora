<script lang="ts">
	import { language } from '$lib/interfaces';
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/christmas/christmas_00.png',
			title: 'Christmas Market',
			slogan: 'Bus Travel'
		},
		date: 'Mar 2014',
		gallery: [
			'/project/christmas/christmas_01.png',
			'/project/christmas/christmas_02.png',
			'/project/christmas/christmas_03.png',
			'/project/christmas/christmas_04.png',
			'/project/christmas/christmas_05.png',
			'/project/christmas/christmas_06.png',
			'/project/christmas/christmas_07.png',
			'/project/christmas/christmas_08.png',
			'/project/christmas/christmas_09.png'
		],
		lang: [language.jquery, language.mysql],
		more: [
			{
				name: 'Cosmoprof',
				link: 'cosmoprof'
			},
			{
				name: 'Loretdemar',
				link: 'loretdemar'
			}
		]
	};
</script>

<Project {data}>
	<p>
		Christmas market in Germany is very popular and this website built to reserve a trip with the
		bus to one of the multiple locations around the country. MUltiple forms allow the customer to
		purchase the right ticket from a specific location and reserve accommodation in a specific
		hotel.
	</p>
</Project>
