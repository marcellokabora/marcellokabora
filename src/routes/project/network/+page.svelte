<script lang="ts">
	import { language } from '$lib/interfaces';
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/network/_cover.png',
			title: 'Network',
			slogan: 'Analitics'
		},
		date: 'Jan 2018',
		gallery: [
			'/project/network/yukkalab-netwotk-01.png',
			'/project/network/yukkalab-netwotk-02.png',
			'/project/network/yukkalab-netwotk-03.png',
			'/project/network/yukkalab-netwotk-04.png',
			'/project/network/yukkalab-netwotk-05.png',
			'/project/network/yukkalab-netwotk-06.png',
			'/project/network/yukkalab-netwotk-07.png'
		],
		lang: [language.angular, language.material, language.d3],
		more: [
			{
				name: 'Signals',
				link: 'signals'
			},
			{
				name: 'Chartmap',
				link: 'chartmap'
			},
			{
				name: 'Sentiment',
				link: 'sentiment'
			}
		]
	};
</script>

<Project {data}>
	<p>
		This particular component use <a href="d3js.org" target="_blank">D3</a> collision functionality in
		order to display the connection between the works collected by the news, the line define the connection,
		the opacity of the line define the quantity of the connection, the color of the word define the sentiment
		positive/neutral/negative and the size of the word define the total amount of news collected.
	</p>
	<p>
		All the circles/words can be moved around in order to display the related connection using this
		D3 collision functionality in order to not overlap each other.
	</p>
</Project>
