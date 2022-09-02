<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';

  const gallery = [
    {
      photo: '/gallery/keyboard.jpg',
      title: 'Marcello Kabora',
      slogan: 'Senior Frontend Engineer',
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

<div class="gallery">
  <Splide 
    options={{
        rewind: true,
        height : 600,
        autoplay: true
      }}
  >
  {#each gallery as item}
    <SplideSlide>
      <img src={item.photo} alt={item.photo} class="photo"/>
      <div class="flexone">
        <div class="title">{item.title}</div>
        <hr>
        <div class="slogan">{item.slogan}</div>
      </div>
    </SplideSlide>
  {/each}
  </Splide>
  <img class="arcbot" src="/shape/arc_bot.png" alt="arcbot">
</div>


<style>
  .gallery{
    position: relative;
  }
  .arcbot{
    width: 100%;
    z-index: 999;
    position: absolute;
    bottom: 0px;
  }

  .photo{
    position: absolute;
    /* top: -20px;
    bottom: -20px;
    left: -20px;
    right: -20px; */
    object-fit: cover;    
    width: 100%;
    height: 190%;
    filter: saturate(1) brightness(0.8) blur(8px);
    z-index: -1;
  }

  .flexone {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .title {
    font-size: 30px;
    font-weight: bold;
    zoom: 1.3
  }
  hr {
      opacity: 0.2;
      margin: 10px -50px;
      width: 100%;
      max-width: 60vw;
  }
  .slogan {
      font-size: 20px;
      opacity: 0.6;
      margin-bottom: 20px;
  }
</style>