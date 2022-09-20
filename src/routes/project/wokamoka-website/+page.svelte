<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/wokamoka-website/wokamoka-website-00.png',
			title: 'Woka Moka',
			slogan: 'Tshirt Avatar'
		},
		date: 'Oct 2010',
		gallery: [
			'/project/wokamoka-website/wokamoka-website-01.jpg',
			'/project/wokamoka-website/wokamoka-website-02.jpg',
			'/project/wokamoka-website/wokamoka-website-03.jpg',
			'/project/wokamoka-website/wokamoka-website-04.jpg',
			'/project/wokamoka-website/wokamoka-website-05.jpg',
			'/project/wokamoka-website/wokamoka-website-06.jpg',
			'/project/wokamoka-website/wokamoka-website-07.jpg',
			'/project/wokamoka-website/wokamoka-website-08.jpg',
			'/project/wokamoka-website/wokamoka-website-09.jpg',
			'/project/wokamoka-website/wokamoka-website-10.jpg',
			'/project/wokamoka-website/wokamoka-website-11.jpg',
			'/project/wokamoka-website/wokamoka-website-12.jpg'
		],
		more: [
			{ name: 'Avatar', link: 'wokamoka-avatar' },
			{ name: 'Firenze', link: 'firenze' }
		]
	};
</script>

<Project {data}>
	<p>
		Wokamoka was the first brand I ever managed, it was a collection of songs for different artists
		mostly DJ and each one have an avatar designed by me in Illustrator that could be printed on
		different products like t-shirts, cap, or bag.
	</p>

	<p>
		The application was designed in Flash and MySQL with a unique design also a player was added on
		the menu.
	</p>
</Project>
