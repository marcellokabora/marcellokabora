<script type="ts">
	export let title: string = 'Title';
	export let slogan: string = 'Slogan';
	export let zoom: number = 1;
	export let classe: string = '';
</script>

<header data-aos="fade-up" data-aos-duration="1000" class={classe}>
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
		min-width: 30vw;
	}
	hr {
		opacity: 0.2;
	}
	.slogan {
		/* font-size: 20px; */
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

		.headtito .flexone {
			text-align: left;
			margin-bottom: 0;
		}
		.headtito .flexone .title {
			padding: 0;
		}
		.headtito .flexone .slogan {
			padding: 0;
		}
	}
</style>
