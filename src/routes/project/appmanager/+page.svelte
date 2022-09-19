<script lang="ts">
	import { language } from '$lib/interfaces';
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/appmanager/_cover.jpeg',
			title: 'Buildingminds',
			slogan: 'App Manager'
		},
		date: 'May 2021',
		gallery: [
			'/project/appmanager/appmanager1.jpg',
			'/project/appmanager/appmanager2.jpg',
			'/project/appmanager/appmanager3.jpg',
			'/project/appmanager/appmanager4.jpg',
			'/project/appmanager/appmanager5.jpg',
			'/project/appmanager/appmanager6.jpg',
			'/project/appmanager/appmanager7.jpg',
			'/project/appmanager/appmanager8.jpg',
			'/project/appmanager/appmanager9.jpg',
			'/project/appmanager/appmanager10.jpg',
			'/project/appmanager/appmanager11.jpg',
			'/project/appmanager/appmanager12.jpg',
			'/project/appmanager/appmanager13.jpg',
			'/project/appmanager/appmanager14.jpg',
			'/project/appmanager/appmanager15.jpg'
		],
		lang: [language.angular, language.material, language.firebase],
		more: [
			{ name: 'Components', link: 'uicomponents' },
			{ name: 'Network', link: 'network' },
			{ name: 'Tickets', link: 'berlinticket' }
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
