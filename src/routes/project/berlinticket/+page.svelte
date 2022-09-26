<script lang="ts">
	import { language } from '$lib/interfaces';
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/berlinticket/berlinticket0.jpg',
			title: 'Berlin Ticket',
			slogan: 'Webapp'
		},
		date: 'Jul 2022',
		gallery: ['/project/berlinticket/berlinticket1.jpg'],
		lang: [language.angular, language.material, language.firebase],
		more: [
			{ name: 'Gameapp', link: 'gameapp' },
			{ name: 'Uploader', link: 'mineko-upload' }
		],
		link: '//https://berlin-tickets.web.app/',
		code: 'berlin-ticket'
	};
</script>

<Project {data}>
	<p>
		Berlin Ticket is a small project where you can filter a list of events by price, rating, and
		title. The Dashboard is divided into 3 sections: the left side panel for filtering the list by
		rating, price, and special offers, the top menu for searching tickets by title, and the ticket
		list displayed one by one including title, price, and rating.
	</p>
</Project>
