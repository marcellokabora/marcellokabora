<script lang="ts">
	import { language, type Project } from '$lib/interfaces';
	import ProjectUi from '$lib/Project.svelte';
	const data: Project = {
		banner: {
			cover: '/project/portfolio/_cover.jpg',
			title: 'Marcello Kabora',
			slogan: 'Portfolio'
		},
		date: 'Aug 2022',
		gallery: ['/project/portfolio/portfolio.png'],
		lang: [language.svelte],
		more: [
			{ name: 'Game App', link: 'gameapp' },
			{ name: 'Network', link: 'network' }
		],
		link: '//marcellokabora.com',
		code: 'svelte-marcellokabora'
	};
</script>

<ProjectUi {data}>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</ProjectUi>
