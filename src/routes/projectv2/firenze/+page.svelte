<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/firenze/_cover.png',
			title: 'Firenze',
			slogan: 'Brand Logo'
		},
		date: 'Aug 2012',
		gallery: [
			'/project/firenze/_cover.png',
			'/project/firenze/firenze-02.png',
			'/project/firenze/firenze-03.png'
		],
		more: [{ name: 'Wakamoka', link: 'wokamoka-avatar' }]
	};
</script>

<Project {data}>
	<p>
		For the creation of this logo I chosed one of the most important monuments of Florence, the
		David by MIchelangelo, the sign Florence fits perfectly into the body of the David where a
		circle encloses name and the slogan: Culla del RInascimento.
	</p>
</Project>
