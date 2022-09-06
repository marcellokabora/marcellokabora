<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/berlinticket/berlinticket0.jpg',
			title: 'Berlin Ticket',
			slogan: 'Webapp'
		},
		date: 'Jul 2022',
		gallery: ['/project/berlinticket/berlinticket1.jpg']
	};
</script>

<Project {data}>
	<p>
		<a href="//beathecue.com">Beathecue</a> is a private project that I keep updating during my free
		time; is an application where users can meet each other for friendship and knowledge. The main goal
		is to avoid the cue in big music events like we have here in Berlin, you can give or receive some
		money from the participant in the listed event and the host can decide who can join the position
		of his list in the cue.
	</p>
</Project>
