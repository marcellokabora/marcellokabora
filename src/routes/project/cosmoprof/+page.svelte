<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/cosmoprof/cosmoprof_00.png',
			title: 'Cosmoprof',
			slogan: 'Bus Travel'
		},
		date: 'Apr 2014',
		gallery: [
			'/project/cosmoprof/cosmoprof_01.png',
			'/project/cosmoprof/cosmoprof_02.png',
			'/project/cosmoprof/cosmoprof_03.png',
			'/project/cosmoprof/cosmoprof_04.png',
			'/project/cosmoprof/cosmoprof_05.png',
			'/project/cosmoprof/cosmoprof_06.png',
			'/project/cosmoprof/cosmoprof_07.png',
			'/project/cosmoprof/cosmoprof_08.png'
		]
	};
</script>

<Project {data}>
	<p>
		Cosmoprof is the most important international exhibition dedicated to the cosmetic production
		chain in all its components: raw materials and ingredients, third party production, packaging,
		applicators, machinery, automation and full service solutions.
	</p>

	<p>
		The website I build provides a solution to book multiple tickets for the event itself and the
		bus travel from any place in Italy, different form provide the request for the specification of
		the date or the person detail, also all the process dor the payment with Paypal was full
		implemented.
	</p>
</Project>
