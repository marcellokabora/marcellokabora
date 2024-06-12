<script>
  import { description } from "$lib/mocks";
</script>

<svelte:head>
  <title>Marcello Kabora | Curriculum</title>
  <meta name="description" content={description} />
  <meta name="thumbnail" content="/gallery/keyboard.jpg" />
  <meta property="og:image" content="/gallery/keyboard.jpg" />
</svelte:head>

<iframe src="/Marcello_Annicchiarico.pdf" frameborder="0" title="Curriculum" />

<style>
  iframe {
    background-color: #2e3031;
    width: 100%;
    height: 100vh;
    margin-bottom: -10px;
    padding-top: 60px;
  }
</style>
