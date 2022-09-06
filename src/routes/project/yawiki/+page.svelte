<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/yawiki/_cover.png',
			title: 'Yawiki',
			slogan: 'Timeline'
		},
		date: 'Oct 2015',
		gallery: [
			'/project/yawiki/yawiki1.png',
			'/project/yawiki/yawiki2.png',
			'/project/yawiki/yawiki3.png',
			'/project/yawiki/yawiki4.png',
			'/project/yawiki/yawiki5.png',
			'/project/yawiki/yawiki6.png',
			'/project/yawiki/yawiki7.png',
			'/project/yawiki/yawiki8.png',
			'/project/yawiki/yawiki9.png',
			'/project/yawiki/yawiki10.png',
			'/project/yawiki/logo.jpg'
		]
	};
</script>

<Project {data}>
	<p>
		Yawiki was a private project designed by me using <a href="//angualr.io" target="_blank"
			>Angular</a
		>
		and <a href="//firebase.com" target="_blank">Firebase</a>, the purpose of the application
		consist to display all the most important events in history divided by genre using the Wikipedia
		API and videos from youtube.
	</p>
	<p>
		Years were divided into decades selecting on year the timeline disappears and a list of events
		show up. By clicking one event the information from wikipedia are showed and a video related
		from youtube start playing.
	</p>
</Project>
