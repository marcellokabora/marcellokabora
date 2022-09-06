<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/smava-best/smava-best-00.jpg',
			title: 'Smava',
			slogan: 'Recommendation'
		},
		date: 'Feb 2018',
		gallery: ['/project/smava-best/smava-best-01.jpg']
	};
</script>

<Project {data}>
	<p>
		This is a letter of recommendation by my manager after I finish my one-year contract in Smava, I
		passed a great time in this company and I learned a lot as a developer but more as a colleague.
		After that time my job was no more necessary cause of a different administration of the
		roles/teams.
	</p>
</Project>
