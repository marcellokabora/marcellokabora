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
		<a href="https://berlin-ticket.web.app/" target="_blank">Berlin Ticket</a> is a small project
		built in <a href="https://angular.io/" target="_blank">Angular</a> and
		<a href="https://material.angular.io/" target="_blank">Material</a>
		where ypu can filter a list of events by price, rating and title.<br />The Dashboard is divided
		in 3 section: the left aside panel for filter the list by rating, price and special offers, the
		top menu for search tickets by title and list of the ticket displayed one by one including
		title, price and rating.
	</p>
</Project>
