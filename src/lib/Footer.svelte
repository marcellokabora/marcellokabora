<script>
	const menus = [
		{
			name: 'linkedin',
			icon: '/icon/linkedin.svg',
			link: '//linkedin.com/in/marcellokabora/'
		},
		{
			name: 'github',
			icon: '/icon/github.svg',
			link: '//github.com/marcellokabora'
		},
		{
			name: 'stackoverflow',
			icon: '/icon/stackoverflow.svg',
			link: '//stackoverflow.com/users/1359426/marcello-kabora?tab=profile'
		},
		{
			name: 'twitter',
			icon: '/icon/twitter.svg',
			link: '//twitter.com/marcellokabora'
		},
		{
			name: 'curriculum',
			icon: '/icon/doc.svg',
			link: '//marcellokabora.com/curriculum'
		}
	];
</script>

<footer>
	<div class="priva">
		<span class="tito">© Marcello Kabora • 2023</span>
	</div>
	<div class="icons">
		{#each menus as menu}
			<a class="icon" href={menu.link} target="_blank">
				<img src={menu.icon} alt={menu.icon} />
			</a>
		{/each}
	</div>
</footer>

<style>
	footer {
		background-color: #1b1b1b;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
	}

	.priva {
		display: flex;
		align-items: center;
		padding: 40px;
	}
	.priva span {
		margin: 0px 10px;
		font-weight: lighter;
		opacity: 0.6;
		cursor: pointer;
		transition: all 0.5s;
	}
	.priva span:hover {
		opacity: 1;
	}
	.tito {
		font-weight: bold;
		font-size: 20px;
		opacity: 0.5;
	}

	.icons {
		display: flex;
		padding: 40px;
	}
	.icons a {
		width: 35px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.5);
		color: black;
		margin: 0px 10px;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.5s;
	}
	.icons a img {
		width: 13px;
	}

	.icons a:hover {
		background-color: rgba(255, 255, 255, 1);
	}

	@media (max-width: 1000px) {
		footer {
			flex-direction: column;
		}
		.priva {
			flex-direction: column;
		}
		.icons {
			margin-top: -40px;
		}
	}
</style>
