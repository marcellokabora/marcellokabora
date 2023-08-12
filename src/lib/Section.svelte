<script lang="ts">
	export let link: string = '';
	export let aside: boolean = false;
	export let color: string = '';
	export let photo: string = '';
	export let title: string = '';
</script>

<div class="section" class:side={aside} data-aos="fade-up" data-aos-duration="1000">
	<div class="photo" style:background={color}>
		{#if link}
			<a href={link} target="_blank">
				<img src={photo} alt="" />
			</a>
		{:else}
			<img src={photo} alt="" />
		{/if}
	</div>
	<div class="info">
		<div class="tito">
			{#if link}
				<a href={link} target="_blank">
					{title}
				</a>
			{:else}
				{title}
			{/if}
		</div>
		<hr />
		<div class="desc">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.section {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0px 0px;
	}
	.section.side {
		text-align: right;
		.photo {
			order: 2;
			margin: 0;
			margin-left: 60px;
		}
	}
	.photo {
		height: 400px;
		width: 400px;
		margin-right: 60px;
		border-radius: 10px;
		overflow: hidden;
		img {
			object-fit: cover;
			height: 100%;
			width: 100%;
		}
	}
	.info {
		flex: 1;
	}
	.info .tito {
		font-size: 24px;
		font-weight: bold;
	}
	.info .tito a {
		color: black;
		text-decoration: none;
	}
	hr {
		opacity: 0.2;
	}
	@media (max-width: 800px) {
		.section {
			flex-direction: column;
		}
		.photo {
			width: 100%;
			height: 200px;
			margin: 0 !important;
			margin-bottom: 50px !important;
			order: 2;
		}
		.info {
			margin-bottom: 20px;
			text-align: left;
		}
	}
</style>
