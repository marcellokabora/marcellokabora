<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/mklogo/marcellokabora.jpg',
			title: 'Marcello Kabora',
			slogan: ''
		},
		date: 'Apr 2013',
		gallery: ['/project/mklogo/marcellokabora.jpg']
	};
</script>

<Project {data}>
	<p>
		This is my logo design a long time ago it represents the first letters of my nick name Marcello
		Kabora. The K is connected with the M and the borders have a different opacity in order to
		maintain a nice blur effect on the background.
	</p>
</Project>
