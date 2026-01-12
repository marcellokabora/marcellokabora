<script lang="ts">
  interface Props {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    imageWidth?: number;
    imageHeight?: number;
    url?: string;
    type?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
  }

  let {
    title = "Marcello Annicchiarico | Frontend AI Developer",
    description = "Senior Frontend Developer with a decade of experience in software development, UI/UX, and data visualization. Passionate about building high-performance UI libraries and PWAs for SaaS and B2B, using frameworks like Vue, Svelte, Angular, and React.",
    keywords = "Software, Developer, Frontend, Fullstack, Developer, UI/UX, Nodejs, Svelte, Angular, Vue, React, Material, Firebase",
    image = "https://marcellokabora.com/selfie/selfie-styled.png",
    imageWidth = 1200,
    imageHeight = 630,
    url = "https://marcellokabora.com",
    type = "article",
    author = "Marcello Annicchiarico",
    publishedTime = "2024-01-01T00:00:00Z",
    modifiedTime = "2026-01-09T00:00:00Z",
  }: Props = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />

  <!-- Open Graph / LinkedIn Meta Tags -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content={imageWidth.toString()} />
  <meta property="og:image:height" content={imageHeight.toString()} />

  <!-- Article Meta Tags -->
  <meta property="article:author" content={author} />
  <meta property="article:published_time" content={publishedTime} />
  <meta property="article:modified_time" content={modifiedTime} />

  <!-- Legacy thumbnail -->
  <meta
    name="thumbnail"
    content={image.replace("https://marcellokabora.com", "")}
  />
</svelte:head>
