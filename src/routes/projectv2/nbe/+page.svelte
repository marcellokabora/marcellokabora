<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/nbe/nbe-00.jpg',
			title: 'NBE',
			slogan: ''
		},
		date: 'Feb 2012',
		gallery: ['/project/nbe/nbe-00.jpg'],
		more: [
			{ name: 'MK', link: 'mklogo' },
			{ name: 'Serenitas', link: 'serenitas' }
		]
	};
</script>

<Project {data}>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>
</Project>
