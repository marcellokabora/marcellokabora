<script lang="ts">
	const items = [
		{
			photo: '/project/btcprice/photo/btcprice0.jpg',
			name: 'Bitcoin Price',
			link: '/project/btcprice',
			height: iHeight(),
			type: 'webapp',
			time: 'Jul 2022'
		},
		{
			photo: '/project/berlinticket/photo/berlinticket0.jpg',
			name: 'Berlin Ticket',
			link: '/project/berlinticket',
			height: iHeight(),
			type: 'webapp',
			time: 'Jul 2022'
		},
		{
			photo: '/project/beathecue-admin/photo/_cover.jpeg',
			name: 'Beathecue - Admin',
			link: '/project/beathecue-admin',
			height: iHeight(),
			type: 'webapp',
			time: 'Jun 2021'
		},
		{
			photo: '/project/beathecue-app/photo/_cover.jpeg',
			name: 'Beathecue - Webpp',
			link: '/project/beathecue-app',
			height: iHeight(),
			type: 'webapp',
			time: 'Jun 2021'
		},
		{
			photo: '/project/beathecue-website/photo/_cover.jpeg',
			name: 'Beathecue - Website',
			link: '/project/beathecue-website',
			height: iHeight(),
			type: 'website',
			time: 'Jun 2021'
		},
		{
			photo: '/project/linus-marketing/photo/_cover.jpeg',
			name: 'Linus - Marketing',
			link: '/project/linus-marketing',
			height: iHeight(),
			type: 'website',
			time: 'Feb 2022'
		},
		{
			photo: '/project/linus-product/photo/_cover.jpeg',
			name: 'Linus - Product',
			link: '/project/linus-product',
			height: iHeight(),
			type: 'website',
			time: 'Sep 2021'
		},
		{
			photo: '/project/linus/photo/_cover.jpeg',
			name: 'Linus - Registration',
			link: '/project/linus',
			height: iHeight(),
			type: 'webapp',
			time: 'Apr 2021'
		},
		{
			photo: '/project/uicomponents/photo/_cover.jpeg',
			name: 'Building Minds - Components',
			link: '/project/uicomponents',
			height: iHeight(),
			type: 'webapp',
			time: 'Jan 2020'
		},
		{
			photo: '/project/appmanager/_cover.jpeg',
			name: 'Building Minds - Appmanager',
			link: '/project/appmanager',
			height: iHeight(),
			type: 'webapp',
			time: 'May 2021'
		},
		{
			photo: '/project/nbe/photo/nbe-00.jpg',
			name: 'NBE',
			link: '/project/nbe',
			height: iHeight(),
			type: 'design',
			time: 'Feb 2012'
		},
		{
			photo: '/project/serenitas/photo/serenitas-00.jpg',
			name: 'Serenitas',
			link: '/project/serenitas',
			height: iHeight(),
			type: 'design',
			time: 'Jan 2015'
		},
		{
			photo: '/project/firenze/photo/_cover.png',
			name: 'Firenze',
			link: '/project/firenze',
			height: iHeight(),
			type: 'design',
			time: 'Aug 2012'
		},
		{
			photo: '/project/mklogo/photo/marcellokabora.jpg',
			name: 'Marcello Kabora',
			link: '/project/mklogo',
			height: iHeight(),
			type: 'design',
			time: 'Apr 2013'
		},
		{
			photo: '/project/loretdemar/photo/loretdemar-00.png',
			name: 'TangLang - Lloret De Mar',
			link: '/project/loretdemar',
			height: iHeight(),
			type: 'website',
			time: 'Mar 2015'
		},
		{
			photo: '/project/wokamoka-avatar/photo/wokamoka-avatar-00.jpg',
			name: 'Wokamoka',
			link: '/project/wokamoka-avatar',
			height: iHeight(),
			type: 'design',
			time: 'Jun 2010'
		},
		{
			photo: '/project/wokamoka-website/photo/wokamoka-website-00.png',
			name: 'Wokamoka',
			link: '/project/wokamoka-website',
			height: iHeight(),
			type: 'website',
			time: 'Oct 2010'
		},
		{
			photo: '/project/mineko-upload/photo/_cover.jpg',
			name: 'Mineko - Upload',
			link: '/project/mineko-upload',
			height: iHeight(),
			type: 'webapp',
			time: 'Mar 2017'
		},
		{
			photo: '/project/airesis/airesis-00.png',
			name: 'Airesis',
			link: '/project/airesis',
			height: iHeight(),
			type: 'webapp',
			time: 'Dec 2014'
		},
		{
			photo: '/project/iaa/photo/iaa_00.png',
			name: 'TangLang - IAA',
			link: '/project/iaa',
			height: iHeight(),
			type: 'website',
			time: 'Feb 2015'
		},
		{
			photo: '/project/network/photo/_cover.png',
			name: 'Yukka - Network',
			link: '/project/network',
			height: iHeight(),
			type: 'webapp',
			time: 'Jan 2018'
		},
		{
			photo: '/project/sentiment/photo/_cover.jpg',
			name: 'Yukka - Sentiment',
			link: '/project/sentiment',
			height: iHeight(),
			type: 'webapp',
			time: 'April 2014'
		},
		{
			photo: '/project/chartmap/photo/_cover.jpg',
			name: 'Yukka - Chartmap',
			link: '/project/chartmap',
			height: iHeight(),
			type: 'webapp',
			time: 'Jul 2018'
		},
		{
			photo: '/project/yawiki/photo/_cover.png',
			name: 'Yawiki',
			link: '/project/yawiki',
			height: iHeight(),
			type: 'webapp',
			time: 'Oct 2015'
		},
		{
			photo: '/project/signals/photo/_cover.jpg',
			name: 'Yukka - Singnals',
			link: '/project/signals',
			height: iHeight(),
			type: 'webapp',
			time: 'Feb 2018'
		},
		{
			photo: '/project/oktoberfest/photo/_cover.png',
			name: 'TangLang - Oktoberfest',
			link: '/project/oktoberfest',
			height: iHeight(),
			type: 'website',
			time: 'Marc 2015'
		},
		{
			photo: '/project/smava-best/photo/smava-best-00.jpg',
			name: 'Best',
			link: '/project/smava-best',
			height: iHeight(),
			type: 'recommendation',
			time: 'Nov 2016'
		},
		{
			photo: '/project/autoginevra/photo/autoginevra_00.png',
			name: 'TangLang - Autoginevra',
			link: '/project/autoginevra',
			height: iHeight(),
			type: 'website',
			time: 'Jul 2015'
		},
		{
			photo: '/project/maggiolino/photo/maggiolino_00.png',
			name: 'Maggiolino',
			link: '/project/maggiolino',
			height: iHeight(),
			type: 'website',
			time: 'Mar 2015'
		},
		{
			photo: '/project/smava-website/photo/smava_website_00.jpg',
			name: 'Smava',
			link: '/project/smava-website',
			height: iHeight(),
			type: 'website',
			time: 'Jun 2016'
		},
		{
			photo: '/project/cosmoprof/photo/cosmoprof_00.png',
			name: 'TangLang - Cosmoprof',
			link: '/project/cosmoprof',
			height: iHeight(),
			type: 'website',
			time: 'Apr 2014'
		},
		{
			photo: '/project/christmas/photo/christmas_00.png',
			name: 'TangLang - Christmas',
			link: '/project/christmas',
			height: iHeight(),
			type: 'website',
			time: 'Mar 2014'
		},
		{
			photo: '/project/mineko-website/photo/_cover.png',
			name: 'Mineko',
			link: '/project/mineko-website',
			height: iHeight(),
			type: 'website',
			time: 'Jan 2017'
		}
	];

	function iHeight() {
		return Math.random() * (400 - 200) + 200;
	}

	let search = '';
	let filterby = '';

	$: filteredList = items
		.filter((item) => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
		.filter((item) => (filterby ? item.type === filterby : item));
</script>

<section>
	<div class="search">
		<input type="text" bind:value={search} placeholder="Search..." />
		<div class="radio">
			<button
				on:click={() => (filterby === 'webapp' ? (filterby = '') : (filterby = 'webapp'))}
				class:active={filterby === 'webapp'}>Webapp</button
			>
			<button
				on:click={() => (filterby === 'website' ? (filterby = '') : (filterby = 'website'))}
				class:active={filterby === 'website'}>Website</button
			>
			<button
				on:click={() => (filterby === 'design' ? (filterby = '') : (filterby = 'design'))}
				class:active={filterby === 'design'}>Design</button
			>
		</div>
	</div>

	<div class="container">
		{#each filteredList as item}
			<a href={item.link}>
				<div class="item" data-aos="fade-up" data-aos-duration="1000">
					<div class="imgcont">
						<div class="more">
							<div class="type">{item.type}</div>
							<div class="time">{item.time}</div>
						</div>
						<img src={item.photo} style:height.px={item.height} alt="" />
					</div>
					<div class="info">{item.name}</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	section {
		margin-top: 10px;
	}
	.radio {
		margin-left: 0px;
	}
	.radio button {
		border: 1px solid silver;
		box-shadow: none;
		padding: 0px 22px;
		font-size: 13px;
		font-weight: normal;
		margin: 0 -3px;
		border-radius: 0px;
		height: 47px;
		cursor: pointer;
	}
	.radio button.active {
		background-color: rgb(160, 160, 160);
		color: white;
	}
	/* .radio button:first-child {
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
	} */
	.radio button:last-child {
		border-top-right-radius: 100px;
		border-bottom-right-radius: 100px;
	}
	.search {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 45px;
	}
	.search input {
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
		padding: 15px 20px;
		border: 1px solid silver;
	}

	a {
		text-decoration: none;
		color: black;
	}
	.container {
		column-gap: 20px;
		column-count: 3;
		margin-top: 60px;
		margin-bottom: 60px;
	}
	.item {
		break-inside: avoid-column;
		padding: 1px;
		margin-bottom: 20px;
		padding: 0px;
		border: 1px solid rgb(224, 224, 224);
		border-radius: 2px;
		text-align: center;
		overflow: hidden;
		cursor: pointer;
		transition: all 0.5s;
		position: relative;
	}
	.item:hover img {
		filter: brightness(0.5);
	}
	.item:hover .info {
		opacity: 1;
	}
	.item:hover .more {
		opacity: 1;
	}
	.item img {
		width: 100%;
		height: 100%;
		transition: all 0.5s;
		object-fit: cover;
	}
	.item .info {
		transition: all 0.5s;
		opacity: 0.8;
		font-weight: bold;
		padding: 10px;
		font-size: 18px;
		margin-top: -5px;
		text-transform: capitalize;
	}
	.item .more {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		font-size: 30px;
		color: white;
		opacity: 0;
		z-index: 10;
		transition: all 0.5s;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.imgcont {
		position: relative;
	}
	.more {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		font-size: 30px;
		color: white;
		opacity: 0;
		z-index: 10;
		transition: all 0.5s;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.more .type {
		text-transform: capitalize;
	}
	.more .time {
		opacity: 0.6;
		font-size: 20px;
	}
	@media (max-width: 1000px) {
		.container {
			column-count: 2;
		}
	}
	@media (max-width: 600px) {
		.container {
			column-count: 1;
		}
	}
	@media (max-width: 600px) {
		.search {
			display: none;
		}
	}
</style>
