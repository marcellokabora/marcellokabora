<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/beathecue-app/_cover.jpeg',
			title: 'Beathecue',
			slogan: 'Main Application'
		},
		date: 'Jun 2021',
		gallery: [
			'/project/beathecue-app/beathecue-app-01.png',
			'/project/beathecue-app/beathecue-app-02.png',
			'/project/beathecue-app/beathecue-app-03.png'
		]
	};
</script>

<Project {data}>
	<p>
		<a href="//app.beathecue.com">Beathecue</a> is a private project that I keep updating during my free
		time; is an application where users can meet each other for friendship and knowledge. The main goal
		is to avoid the cue in big music events like we have here in Berlin, you can give or receive some
		money from the participant in the listed event and the host can decide who can join the position
		of his list in the cue.
	</p>
</Project>
