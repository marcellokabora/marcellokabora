<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';

  const gallery = [
    {
      photo: '/photo/develop.jpg'
    },
    {
      photo: '/photo/projects.jpg'
    },
    {
      photo: '/photo/styling.jpg'
    },
  ]
</script>

  <Splide 
    options={ 
      {
        rewind: true,
        height : 500,
        // gap   : '1rem',
      } 
  }
  >
  {#each gallery as item}
    <SplideSlide>
      <img src={item.photo} alt={item.photo}/>
    </SplideSlide>
  {/each}
  </Splide>

<style>
  img{
    width: 100%;
  }
</style>