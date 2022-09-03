<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import Header from '$lib/Header.svelte'
  const gallery = [
    {
      photo: '/gallery/keyboard.jpg',
      title: 'Marcello Kabora',
      slogan: 'Frontend Engineer',
      link: '/curriculum',
    },
    {
      photo: '/gallery/chartmap.jpg',
      title: 'Chartmap',
      slogan: 'Analiticts',
      link: '/project/chartmap',
    },
    {
      photo: '/gallery/backfuture.png',
      title: 'Yawiki',
      slogan: 'Timeline',
      link: '/project/yawiki',
    },
    {
      photo: '/gallery/firenze.png',
      title: 'Firenze',
      slogan: 'Logo',
      link: '/project/firenze',
    },
    {
      photo: '/gallery/mineko.png',
      title: 'Mineko',
      slogan: 'Website',
      link: '/project/mineko-website',
    },
    {
      photo: '/gallery/beathecue.jpg',
      title: 'Beathecue',
      slogan: 'Skip The Cue',
      link: '/project/beathecue-website',
    },
  ]
</script>

<div class="gallery" data-aos="fade-down" data-aos-duration="1000">
  <Splide 
    options={{
        rewind: true,
        height : 500,
        autoplay: true
      }}
  >
  {#each gallery as item}
    <SplideSlide>
      <img src={item.photo} alt={item.photo} class="photo"/>
      <div class="dflex">
        <Header title={item.title} slogan={item.slogan} zoom="1.2"/>
      </div>
    </SplideSlide>
  {/each}
  </Splide>
  <img class="arcbot" src="/shape/arc_bot.png" alt="arcbot">
</div>


<style>
  .gallery{
    position: relative;
    color: white;
  }
  .arcbot{
    width: 100%;
    z-index: 999;
    position: absolute;
    bottom: 0px;
  }
  .photo{
    position: absolute;
    object-fit: cover;    
    width: 100%;
    height: 190%;
    filter: saturate(1) brightness(0.8) blur(8px);
    z-index: -1;
  }
  .dflex{
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>