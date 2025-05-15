<script lang="ts">
  import Gallery from "$lib/Gallery.svelte";
  import Section from "$lib/Section.svelte";
  import Header from "$lib/Header.svelte";
  import Carousel from "$lib/Carousel.svelte";
  import Projects from "$lib/Projects.svelte";
  import type { Projecto } from "$lib/database.types";

  let { data } = $props();

  let projects = data.projects?.sort(
    (a: Projecto, b: Projecto) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf(),
  );

  const company = {
    cover: "/photo/back2.jpg",
    title: "CAREER",
    slogan: "I worked for different startup in Berlin and Italy",
    items: [
      {
        logo: "/logo/7echno.png",
        link: "//7echno.com",
      },
      {
        logo: "/company/evaglobal.png",
        link: "//evaglobal.com",
      },
      {
        logo: "/company/linus.png",
        link: "//linus-finance.com",
      },
      {
        logo: "/company/buildingminds.png",
        link: "//buildingminds.com",
      },
      {
        logo: "/company/yukka.png",
        link: "//yukka.ai",
      },
      {
        logo: "/company/smava.png",
        link: "//smava.de",
      },
    ],
  };

  const language = {
    cover: "/gallery/back2.jpg",
    title: "LANGUAGE",
    items: [
      {
        logo: "/flag/it.png",
        company: "Italian",
        title: "100%",
      },
      {
        logo: "/flag/en.png",
        company: "English",
        title: "100% ",
      },
      {
        logo: "/flag/sp.png",
        company: "Spanish",
        title: "50%",
      },
    ],
  };
</script>

<svelte:head>
  <title>Marcello Kabora | Fronted Developer</title>
  <meta
    name="description"
    content="Senior Frontend Developer with a decade of experience in software development, UI/UX, and data visualization.  Passionate about building high-performance UI libraries and PWAs for SaaS and B2B, using frameworks like Vue, Svelte, Angular, and React."
  />
  <meta
    name="keywords"
    content="Software, Developer, Frontend, Fullstack, Developer, UI/UX, Nodejs, Svelte, Angular, Vue, React, Material, Firebase"
  />
  <meta name="thumbnail" content="/gallery/keyboard.jpg" />
  <meta property="og:image" content="/gallery/keyboard.jpg" />
</svelte:head>

<Gallery />

<section>
  <Header
    title="ABOUT"
    slogan="I am passionate about user interface and web application"
  />

  <div class="h-[70px]"></div>

  <Section photo="/photo/software.jpg" title="Development">
    <p>
      Web-based developer applications, such as Sass or B2B platforms,
      streamline software access. Because they run in web browsers, users can
      access them from any internet-connected device. Updates are handled
      seamlessly by the provider. These applications support a range of
      functions, from online shopping to data analysis.
    </p>
  </Section>
  <Section photo="/photo/styling.jpg" title="Design" aside>
    <p>
      A well-crafted user interface is the cornerstone of a successful
      application, seamlessly blending clarity with intuitive navigation. This
      design approach not only fosters a positive user experience but also
      empowers users to unleash their creativity and fully explore the
      application's rich features.
    </p>
  </Section>
  <Section photo="/photo/visualization.jpeg" title="Visualization">
    <p>
      I specialize in data visualization, a field that uses graphical
      representations to make data more understandable. This is especially
      useful for large datasets, like time series. I leverage tools like D3.js
      and Highcharts to create clear and effective statistical graphics, plots,
      and information graphics.
    </p>
  </Section>
  <Section photo="/photo/develop.jpeg" title="Management" aside>
    <p>
      To build complex and scalable applications, I must choose the appropriate
      framework based on the specific project. Frameworks such as <a
        href="//svelte.com"
        target="_blank">Svelte</a
      >,
      <a href="//reactjs.org" target="_blank">React</a>,
      <a href="//vuejs.org" target="_blank">Vue</a> and
      <a href="//angular.io" target="_blank">Angular</a> are suitable for a range
      of projects, from complex web applications to simple server-side rendered landing
      pages.
    </p>
  </Section>

  <div class="h-[70px]"></div>
</section>

<Carousel title={company.title} slogan={company.slogan} items={company.items} />

<section>
  <div class="h-[70px]"></div>

  <Header
    title="ENVIROMENT"
    slogan="Develop programs by analysing and identifying areas for modification"
  />

  <div class="h-[70px]"></div>

  <Section photo="/photo/framework.gif" title="Framework">
    <p>
      I'm proficient in a wide array of front-end technologies, including
      <a href="//react.dev" target="_blank">React</a>,
      <a href="//vuejs.org" target="_blank">Vue</a>,
      <a href="//angular.io" target="_blank">Angular</a>,
      <a href="https://svelte.dev" target="_blank">Svelte</a>, and mobile
      frameworks like <a href="//expo.dev" target="_blank">Expo</a>,
      <a href="/flutter.dev" target="_blank">Flutter</a>, and
      <a href="//ionicframework.com" target="_blank">Ionic</a>. My proficiency
      in state management encompasses a comprehensive understanding of different
      approaches and their trade-offs, enabling me to choose and implement
      optimal solutions for varying application scales and complexities
    </p>
  </Section>
  <Section photo="/photo/styles.jpg" title="Styling" aside>
    <p>
      <a href="//material.io" target="_blank">Material</a> and
      <a href="//flowbite-svelte.com" target="_blank">Flowbite</a>
      are my collection of ready-to-use components and seamless responsive design
      integration, making it perfect for any project. Additionally, it provides tools
      that empower developers to create custom components with familiar interaction
      patterns.
    </p>
  </Section>

  <Section photo="/photo/database.webp" title="Database">
    <p>
      <a href="//firebase.google.com" target="_blank">Firebase</a> and
      <a href="https://supabase.com/" target="_blank">Superbase</a> are my favorite
      tools for working with databases that allow me to deliver richer app experiences.
      Firebase manages its own infrastructure with a nice set of tools to simplify
      the workflow of the developer by providing them with development kits and an
      online dashboard.
    </p>
  </Section>

  <Section photo="/photo/deployment.webp" title="Deployment" aside>
    <p>
      <a href="//vercel.com" target="_blank">Vercel</a> or
      <a href="//github.com" target="_blank">Github</a> is my go-to tool for deployments,
      simplifying the process of pushing projects live. It provides insightful analytics,
      helping me understand user interaction and optimize performance. I also appreciate
      Vercel's continuous evolution, with new features like integrated commenting
      for streamlined collaboration and multi-branch management for flexible development.
    </p>
  </Section>

  <div class="h-[70px]"></div>
</section>

<Carousel title={language.title} items={language.items} />

<section class="py-8">
  <Header title="PROJECTS" slogan="A collection of my successful projects" />
  <Projects {projects} />
</section>
