<script lang="ts">
	import { language } from '$lib/interfaces';
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/linus-marketing/_cover.jpeg',
			title: 'Linus - Marketing',
			slogan: 'Digital Finance'
		},
		date: 'Feb 2022',
		gallery: [
			'/project/linus-marketing/linus-lps-01.png',
			'/project/linus-marketing/linus-lps-02.png',
			'/project/linus-marketing/linus-lps-03.png'
		],
		lang: [language.react, language.builder],
		more: [
			{
				name: 'Product',
				link: 'linus-product'
			},
			{
				name: 'Registration',
				link: 'linus-registration'
			}
		]
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
