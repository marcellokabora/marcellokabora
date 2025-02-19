<script>
  import { description } from "$lib/mocks";
</script>

<svelte:head>
  <title>Marcello Kabora | Curriculum</title>
  <meta name="description" content={description} />
  <meta name="thumbnail" content="/gallery/keyboard.jpg" />
  <meta property="og:image" content="/gallery/keyboard.jpg" />
</svelte:head>

<iframe
  src="/Marcello Annicchiarico.pdf"
  frameborder="0"
  title="Curriculum"
  scrolling="off"
></iframe>

<style>
  iframe {
    padding-top: 90px;
    width: 100%;
    height: 2500px;
    margin-bottom: -5em;
    border: none;
    overflow: hidden; /* Hide iframe scrollbars */
    background-color: #525659;
  }
</style>
