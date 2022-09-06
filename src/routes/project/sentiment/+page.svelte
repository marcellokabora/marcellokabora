<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/sentiment/_cover.jpg',
			title: 'Sentiment',
			slogan: 'News Analitics'
		},
		date: 'April 2018',
		gallery: [
			'/project/sentiment/yukkalab-sentiment-01.png',
			'/project/sentiment/yukkalab-sentiment-02.png',
			'/project/sentiment/yukkalab-sentiment-03.png',
			'/project/sentiment/yukkalab-sentiment-04.png'
		]
	};
</script>

<Project {data}>
	<p>
		This project was part of the cockpit of Yukkalab it displays the stock of different markets
		using Highcharts, Angular, and Material. The chart is composed of 3 series in 2 different axes,
		2 of them combined together showing the negative or positive evaluation with an area chart with
		different colors and the last one at the bottom display the investment in percentage.
	</p>
</Project>
