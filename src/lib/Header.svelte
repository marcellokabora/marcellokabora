<script lang="ts">
  interface Props {
    title?: string;
    slogan?: string;
    zoom?: number;
  }

  let { title = "Title", slogan = "Slogan", zoom = 1 }: Props = $props();
</script>

<header data-aos="fade" data-aos-delay="200">
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
    font-size: 2em;
    font-weight: bold;
    padding: 0px 50px;
    min-width: 30vw;
  }
  hr {
    opacity: 0.2;
  }
  .slogan {
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
    .slogan {
      padding: 0;
    }
  }
</style>
