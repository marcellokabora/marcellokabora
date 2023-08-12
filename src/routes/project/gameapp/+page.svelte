<script lang="ts">
	import { language } from '$lib/interfaces';
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/gallery/gameapp.jpg',
			title: 'Game App',
			slogan: 'Webapp'
		},
		date: 'Aug 2022',
		gallery: ['/project/gameapp/gameapp01.png'],
		lang: [language.svelte],
		more: [
			{ name: 'Network', link: 'network' },
			{ name: 'Berlin Ticket', link: 'berlinticket' }
		],
		link: '//gameapp-five.vercel.app/aa0c86fa',
		code: 'gameapp'
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
