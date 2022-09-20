<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/wokamoka-avatar/wokamoka-avatar-00.jpg',
			title: 'Woka Moka',
			slogan: 'Tshirt Avatar'
		},
		date: 'Jun 2010',
		gallery: [
			'/project/wokamoka-avatar/wokamoka-avatar-01.png',
			'/project/wokamoka-avatar/wokamoka-avatar-02.png',
			'/project/wokamoka-avatar/wokamoka-avatar-03.png',
			'/project/wokamoka-avatar/wokamoka-avatar-04.png',
			'/project/wokamoka-avatar/wokamoka-avatar-05.png',
			'/project/wokamoka-avatar/wokamoka-avatar-06.png',
			'/project/wokamoka-avatar/wokamoka-avatar-07.png',
			'/project/wokamoka-avatar/wokamoka-avatar-08.png',
			'/project/wokamoka-avatar/wokamoka-avatar-09.png'
		],
		more: [
			{ name: 'Website', link: 'wokamoka-website' },
			{ name: 'Firenze', link: 'firenze' }
		]
	};
</script>

<Project {data}>
	<p>
		WokaMoka was my first project ever related to clothes and musicians. This catalog shows all the
		designs that I have been made for different artists famous and none. The idea beyond was to
		print this design on different things and sell it online allowing the customer to customize the
		color, size, dress, etc...
	</p>
</Project>
