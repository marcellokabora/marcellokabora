<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/serenitas/serenitas-00.jpg',
			title: 'Serenitas',
			slogan: 'Mind Change'
		},
		date: 'Jan 2015',
		gallery: ['/project/serenitas/serenitas-00.jpg']
	};
</script>

<Project {data}>
	<p>
		This logo was built by one of my clients ask me for something simple and natural. The sing
		Serenitas uses nice font and a circle combines the first letter of the brand with the rest of
		the logo.
	</p>
</Project>
