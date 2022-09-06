<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/btcprice/btcprice0.jpg',
			title: 'Bitcoin Price',
			slogan: 'Webapp'
		},
		date: 'Jul 2022',
		gallery: ['/project/btcprice/btcprice1.jpg']
	};
</script>

<Project {data}>
	<p>
		<a href="https://xeotek.web.app/" target="_blank">Bitcoin Price</a> is a small app built in
		<a href="https://angular.io/" target="_blank">Angular</a>
		and <a href="https://www.highcharts.com/" target="_blank">Highcharts</a> the dashboard is divided
		into two sections above the highchart stock line chart displaying the value of the price and the
		time and above a reverse list of the price/time where the last value is animated.
	</p>
</Project>
