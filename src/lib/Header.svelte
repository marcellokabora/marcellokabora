<script type="ts">
	export let title: string = 'Title';
	export let slogan: string = 'Slogan';
	export let zoom: number = 1;
</script>

<header data-aos="fade-up" data-aos-duration="1000">
	<div class="flexone" style:zoom>
		<div class="title">{title}</div>
		<hr />
		<div class="slogan">{slogan}</div>
	</div>
</header>

<style>
	header {
		text-align: center;
		display: flex;
		justify-content: center;
	}
	.title {
		font-size: 30px;
		font-weight: bold;
		padding: 0px 50px;
	}
	hr {
		opacity: 0.2;
	}
	.slogan {
		font-size: 20px;
		opacity: 0.6;
		padding: 0px 50px;
	}
	@media (max-width: 1200px) {
		hr {
			margin: 10px 0px;
		}
	}
	@media (max-width: 800px) {
		.flexone {
			max-width: none;
			min-width: none;
			padding-top: 40px;
		}
	}
</style>
