<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/iaa/iaa_00.png',
			title: 'IAA',
			slogan: 'Frankfurt Motor Show'
		},
		date: 'Feb 2015',
		gallery: [
			'/project/iaa/iaa_01.png',
			'/project/iaa/iaa_02.png',
			'/project/iaa/iaa_03.png',
			'/project/iaa/iaa_04.png',
			'/project/iaa/iaa_05.png',
			'/project/iaa/iaa_06.png',
			'/project/iaa/iaa_07.png',
			'/project/iaa/iaa_08.png'
		]
	};
</script>

<Project {data}>
	<p>
		The International Motor Show Germany or simply International Motor Show, in German known as the
		Internationale Automobil-Ausstellung, is the world's largest motor show. Like the other website
		of TangLang, the customer was able to purchase the ticket to the event and also the bus travel.
	</p>
</Project>
