<script lang="ts">
	import { language } from '$lib/interfaces';
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/chartmap/_cover.jpg',
			title: 'Chartmap',
			slogan: 'News Analitics'
		},
		date: 'Jul 2018',
		gallery: [
			'/project/chartmap/yukkalab-chartmap-01.png',
			'/project/chartmap/yukkalab-chartmap-02.png',
			'/project/chartmap/yukkalab-chartmap-03.png',
			'/project/chartmap/yukkalab-chartmap-04.png',
			'/project/chartmap/yukkalab-chartmap-05.png',
			'/project/chartmap/yukkalab-chartmap-06.png',
			'/project/chartmap/yukkalab-chartmap-07.png'
		],
		lang: [language.angular, language.material, language.highchart],
		more: [
			{
				name: 'Network',
				link: 'network'
			},
			{
				name: 'Sentiment',
				link: 'sentiment'
			},
			{
				name: 'Signals',
				link: 'signals'
			}
		]
	};
</script>

<Project {data}>
	<p>
		This project was built in Angular and Material using Highcharts to display the value of the
		sentiment in the chart. On the left, a list of news is sorted by time and on the right, the
		chart displays the sentiment average in a range date, also in the bottom comparison of other
		stock/company related.
	</p>
</Project>
