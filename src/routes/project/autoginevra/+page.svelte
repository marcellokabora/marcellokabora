<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/autoginevra/autoginevra_00.png',
			title: 'Buildingminds',
			slogan: 'App Manager'
		},
		date: 'May 2021',
		gallery: [
			'/project/autoginevra/autoginevra_01.png',
			'/project/autoginevra/autoginevra_02.png',
			'/project/autoginevra/autoginevra_03.png',
			'/project/autoginevra/autoginevra_04.png',
			'/project/autoginevra/autoginevra_05.png',
			'/project/autoginevra/autoginevra_06.png',
			'/project/autoginevra/autoginevra_07.png',
			'/project/autoginevra/autoginevra_08.png'
		]
	};
</script>

<Project {data}>
	<p>
		This international auto show takes place one time every year in <a
			href="https://en.wikipedia.org/wiki/Geneva_Motor_Show"
			target="_blank">Geneva Motor Show</a
		> . This website provide all the information about the event with the map and the brands with the
		possibility to book a ticket for the event and for the bus travel from all Italy.
	</p>
	<p>
		The website was designed and built by myself in jQuery and MySQL, the user could purchase the
		tickets with a reservation with multiple people only on specific dates.
	</p>
</Project>
