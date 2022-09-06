<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/linus-product/_cover.jpeg',
			title: 'Linus - Product',
			slogan: 'Sep 2021'
		},
		date: 'Feb 2022',
		gallery: [
			'/project/linus-product/linus-lps-01.png',
			'/project/linus-product/linus-lps-02.png',
			'/project/linus-product/linus-lps-03.png',
			'/project/linus-product/linus-lps-04.png'
		]
	};
</script>

<Project {data}>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</Project>
