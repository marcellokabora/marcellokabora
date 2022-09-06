<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/beathecue-admin/_cover.jpeg',
			title: 'Beathecue',
			slogan: 'Admin Application'
		},
		date: 'Jun 2021',
		gallery: [
			'/project/beathecue-admin/beathecue-admin-01.png',
			'/project/beathecue-admin/beathecue-admin-02.png',
			'/project/beathecue-admin/beathecue-admin-03.png'
		]
	};
</script>

<Project {data}>
	<p>
		This is the admin app of the <a href="//admin.beathecue.com">Beathecue</a> an application where the
		admin can add, remove or modify all the events and the users of the application. Every user has access
		to a specific area depending on the location and protocol.
	</p>
</Project>
