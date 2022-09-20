<script lang="ts">
	import { language } from '$lib/interfaces';
	import Project from '$lib/Project.svelte';
	const data = {
		banner: {
			cover: '/project/mineko-upload/_cover.jpg',
			title: 'Mineko',
			slogan: 'Uploader'
		},
		date: 'Mar 2017',
		gallery: [
			'/project/mineko-upload/mineko-upload-01.png',
			'/project/mineko-upload/mineko-upload-02.png',
			'/project/mineko-upload/mineko-upload-03.png'
		],
		lang: [language.angular, language.material, language.firebase],
		more: [
			{
				name: 'Website',
				link: 'mineko-website'
			},
			{
				name: 'Tickets',
				link: 'berlinticket'
			}
		]
	};
</script>

<Project {data}>
	<p>
		This project was created for <a href="//mineko.de" target="_blank">Mineko</a>, usign
		<a href="//angular.io" target="_blank">Angular</a>
		and <a href="//firebase.com" target="_blank">Firebase</a>. After registered, you can upload
		multiple documents together and pay the service. After all the documents were ready other 2
		steps are required one for finalizing the form information and the last one for pay the service
		using a credit card or PayPal.
	</p>
</Project>
