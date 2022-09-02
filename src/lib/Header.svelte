<script lang="ts">
	import { page } from '$app/stores';
	const menus = [
		{
			icon: 'home',
			name: 'Home',
			link: '/',
		},
		{
			icon: 'dynamic_form',
			name: 'Knowledge',
			link: '/knowledge',
		},
		{
			icon: 'explore',
			name: 'Career',
			link: '/career',
		},
		{
			icon: 'shop',
			name: 'Projects',
			link: '/projects',
		},
		{
			icon: 'account_box',
			name: 'Curriculum',
			link: '/curriculum',
		},
	]
</script>

<header>

	<div class="logo" data-aos="fade-down" data-aos-duration="1000">
		<a href="/">
			<img src="/icon/mk.png" alt="Marcello Kabora" />
		</a>
		<div class="arrow"></div>
	</div>

	<nav data-aos="fade-down" data-aos-duration="1500">
		<ul>
			{#each menus as menu}
			<li class:active={$page.url.pathname === menu.link}>
				<a href={menu.link}>
					<span class="material-icons">{menu.icon}</span>
					<span>{menu.name}</span>
				</a>
			</li> 
			{/each}
		</ul>
	</nav>

</header>

<style>

	header {
		position: fixed;
		z-index: 999;
	}

	.logo {
		position: fixed;
        top: 0;
        left: 0;
        height: 100px;
        background-color: #1b1b1b;
        width: 180px;
        zoom: 0.9;
		z-index: 999;
	}
	.logo img{
		width: 100px;
		position: relative;
		left: 50px;
		top: 23px;
		z-index: 1;
		cursor: pointer;
	}

	.logo .arrow {
		position: absolute;
		top: 0;
		right: -100px;
		width: 0;
		height: 0;
		border-left: 100px solid transparent;
		border-right: 100px solid transparent;
		border-top: 100px solid #1b1b1b;
	}

	nav {
		position: fixed;
		display: flex;
		align-items: center;
		background-color: rgba(61, 61, 61, 0.3);
		color: white;
		top: 0;
		width: 100%;
		height: 60px;
	}

	ul {
        display: flex;
        align-items: center;
        flex: 1;
        margin-left: 220px;
	}

	li {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		flex: 1;
	}

	.material-icons{
		margin-right: 10px
	}

	nav a {
		color: white;
		text-decoration: none;
		display: flex;
		align-items: center;
		padding: 10px 20px;
		border-radius: 100px;
	}

	nav li.active a{
		background-color: rgba(255, 255, 255, 0.1);
	}

</style>
