<script lang="ts">
	import Banner from '$lib/Banner.svelte';
	import type { Project } from './interfaces';
	export let data: Project;
</script>

<svelte:head>
	<title>Marcello Kabora | {data.banner.title} {data.banner.slogan}</title>
</svelte:head>

<Banner {...data.banner} />

<section data-aos="fade-up" data-aos-duration="1000">
	<div class="visual">
		<div class="flexo">
			<div class="header">
				<div class="desc">Description</div>
			</div>
			<slot />
		</div>
		<div class="space" />
		<div class="infos">
			<div class="header">
				<div class="desc">Detail</div>
			</div>
			<div class="info">
				<span class="material-icons">event</span>
				<span>{data.date}</span>
			</div>
			{#if data.lang}
				<div class="info">
					<span class="material-icons">code</span>
					{#each data.lang as lang}
						<a class="lang" href={lang.link} target="_blank">{lang.name}</a>
					{/each}
				</div>
			{/if}
			{#if data.link}
				<div class="info">
					<span class="material-icons">web</span>
					<a class="lang" href={data.link} target="_blank">Website</a>
				</div>
			{/if}
			{#if data.code}
				<div class="info">
					<img class="icon" src="/icon/github.svg" alt="github" />
					<a class="lang" href={`//github.com/marcellokabora/${data.code}`} target="_blank"
						>Repository
					</a>
				</div>
			{/if}
			{#if data.more}
				<div class="header">
					<div class="desc">More</div>
				</div>
				<div class="info">
					<span class="material-icons">hub</span>
					{#each data.more as more}
						<a class="lang" href={`/project/${more.link}`}>{more.name}</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<div class="header">Gallery</div>
	<div class="gallery">
		{#each data.gallery as photo}
			<div class="photo" data-aos="fade-up" data-aos-duration="1000">
				<img class="image" src={photo} alt="" />
			</div>
		{/each}
	</div>
</section>

<style>
	.visual {
		margin-top: 20px;
	}
	.header {
		border-bottom: 1px solid silver;
		opacity: 0.5;
		margin-bottom: 20px;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
		padding-top: 10px;
		padding-bottom: 10px;
		font-weight: bold;
	}
	.info .material-icons {
		margin-right: 10px;
	}
	.visual {
		flex: 1;
		flex-wrap: wrap;
		display: flex;
	}
	.flexo {
		flex: 1;
	}
	.space {
		width: 20px;
	}
	.info {
		display: flex;
		align-items: center;
		text-transform: capitalize;
		min-width: 200px;
		margin-bottom: 10px;
	}
	.info .icon {
		width: 23px;
		height: 23px;
		margin-right: 10px;
	}
	.info .lang:not(:last-child)::after {
		content: ',';
		margin-right: 10px;
	}
	.image {
		width: 100% !important;
	}
	.photo {
		position: relative;
		margin-bottom: 20px;
	}
	.photo:hover .image {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}
	.image {
		width: 100%;
		transition: all 0.3s;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
		border-radius: 3px;
	}
	.gallery {
		margin-bottom: 50px;
	}

	@media (max-width: 1000px) {
		.visual {
			flex-direction: column;
		}
	}
</style>
