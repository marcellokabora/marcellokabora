<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Header from '$lib/Header.svelte';
	export let cover: string = '/gallery/back2.jpg';
	export let title: string = '';
	export let slogan: string = '';
	export let perpage: number = 4;
	export let items: Item[] = [];

	interface Item {
		logo: string;
		company: string;
		title: string;
		time?: string;
		link?: string;
	}
</script>

<div
	class="carousel"
	data-aos="fade-down"
	data-aos-duration="1000"
	style="background-image: url({cover})"
>
	<section>
		<Header {title} {slogan} />

		<div class="space" />

		<Splide
			options={{
				rewind: true,
				autoplay: true,
				perPage: perpage,
				arrows: false,
				pagination: true,
				breakpoints: {
					1200: {
						perPage: 3
					},
					800: {
						perPage: 2
					},
					600: {
						perPage: 1
					}
				}
			}}
		>
			{#each items as item}
				<SplideSlide>
					<div class="dflex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
						<a href={item.link} target="_blank">
							<img src={item.logo} alt={item.logo} class="photo" />
							<div class="cont">
								<div class="company">{item.company}</div>
								<div class="title">{item.title}</div>
								{#if item.time}
									<div class="time">{item.time}</div>
								{/if}
							</div>
						</a>
					</div>
				</SplideSlide>
			{/each}
		</Splide>
	</section>
</div>

<style>
	a {
		color: white;
		text-decoration: none;
	}
	.carousel {
		position: relative;
		color: white;
		background-position: center center;
		background-size: cover;
		text-align: center;
		padding-top: 50px;
		padding-bottom: 130px;
	}
	.space {
		height: 40px;
	}
	.photo {
		height: 130px;
		object-fit: contain;
		max-width: 200px;
		margin-bottom: 20px;
	}
	.dflex {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.company {
		font-size: 26px;
	}
	.title {
		font-size: 20px;
		opacity: 0.6;
	}
	.time {
		font-size: 14px;
		opacity: 0.5;
	}
</style>
