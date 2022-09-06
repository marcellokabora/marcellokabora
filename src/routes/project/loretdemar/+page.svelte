<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/loretdemar/loretdemar-00.png',
			title: 'Lloret De Mar',
			slogan: 'Bus Travel'
		},
		date: 'Mar 2015',
		gallery: [
			'/project/loretdemar/loretdemar-01.png',
			'/project/loretdemar/loretdemar-02.png',
			'/project/loretdemar/loretdemar-03.png',
			'/project/loretdemar/loretdemar-04.png',
			'/project/loretdemar/loretdemar-05.png',
			'/project/loretdemar/loretdemar-06.png',
			'/project/loretdemar/loretdemar-07.png',
			'/project/loretdemar/loretdemar-08.png',
			'/project/loretdemar/loretdemar-09.png',
			'/project/loretdemar/loretdemar-10.png'
		]
	};
</script>

<Project {data}>
	<p>
		Loret De Mar is on the sud cost of France and is one of the best places to visit in summer. This
		website allows anyone to reserve the bus travel from the center/north area of Italy and the
		accommodation in one of the different hotels available in the list. The project was built in <a
			href="jquery.com"
			target="_blank">jQuery</a
		>
		and <a href="mysql.com" target="_blank">MySQL</a>, the user cloud reserve multiple tickets and
		pay with credit card or PayPal.
	</p>
</Project>
