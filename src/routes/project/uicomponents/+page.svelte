<script lang="ts">
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/uicomponents/_cover.jpeg',
			title: 'Buildingminds',
			slogan: 'UI Components'
		},
		date: 'Jan 2020',
		gallery: [
			'/project/uicomponents/buildingminds-01.png',
			'/project/uicomponents/buildingminds-02.png',
			'/project/uicomponents/buildingminds-03.png',
			'/project/uicomponents/buildingminds-04.png',
			'/project/uicomponents/buildingminds-05.png',
			'/project/uicomponents/buildingminds-06.png',
			'/project/uicomponents/buildingminds-07.png',
			'/project/uicomponents/buildingminds-08.png',
			'/project/uicomponents/buildingminds-09.png',
			'/project/uicomponents/buildingminds-10.png',
			'/project/uicomponents/buildingminds-11.png'
		]
	};
</script>

<Project {data}>
	<p>
		BuildingMinds believes in empowering the real estate industry with advanced digital solutions,
		building an application with Angular and Microsoft service. As a front-end developer I worked on
		the implementation of many features inside the application moving around different 4 teams and
		focusing on different topics. After one year I was promoted to UI leader and started working
		directly with the design team in order to ensure each new component was perfect for the next
		implementation. I also worked for the construction of the support portal that provides all the
		information of the application and the tickets/support connection.
	</p>
</Project>
