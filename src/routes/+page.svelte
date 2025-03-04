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
        logo: "/company/evaglobal.png",
        // company: "Eva Global",
        // title: "Frontend Developer",
        // time: "Oct 2022 - May 2024",
        link: "//evaglobal.com",
      },
      {
        logo: "/company/linus.png",
        // company: "Linus",
        // title: "Frontend Developer",
        // time: "Sep 2021 - Aug 2022",
        link: "//linus-finance.com",
      },
      {
        logo: "/company/buildingminds.png",
        // company: "Buildingminds",
        // title: "Frontend Developer ",
        // time: "Jan 2020 - Aug 2021",
        link: "//buildingminds.com",
      },
      {
        logo: "/company/yukka.png",
        // company: "Yukkalab",
        // title: "Frontend Developer",
        // time: "Jun 2017 - Nov 2019",
        link: "//yukka.ai",
      },
      {
        logo: "/company/smava.png",
        // company: "Smava",
        // title: "Frontend Developer",
        // time: "Feb 2016 - Nov 2016",
        link: "//smava.de",
      },
      // {
      //   logo: "/company/tanglang.png",
      //   company: "Tang Lang",
      //   // title: "Fullstack Developer",
      //   // time: "Apr 2014 - Dec 2015",
      // },
      // {
      //   logo: "/company/maggiolino.png",
      //   company: "Maggiolino",
      //   // title: "Fullstack Developer",
      //   // time: "Aug 2013 - Jan 2015",
      // },
      {
        logo: "/company/airesis.png",
        // company: "Airesis",
        // title: "UI Designer",
        // time: "Apr 2011 - Apr 2012",
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

  <div class="space"></div>

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

  <div class="space"></div>
</section>

<Carousel title={company.title} slogan={company.slogan} items={company.items} />

<section>
  <div class="space"></div>

  <Header
    title="ENVIROMENT"
    slogan="Develop programs by analysing and identifying areas for modification"
  />

  <div class="space"></div>

  <Section photo="/photo/framework.gif" title="Framework">
    <p>
      <a href="https://svelte.dev" target="_blank">Svelte</a>,
      <a href="https://nuxt.com" target="_blank">Nuxt</a>
      and
      <a href="//angular.io" target="_blank">Angular</a> are my preferred frameworks
      for scalable projects, enabling seamless integration with leading market providers.
      Their unit testing capabilities and extensibility with authentication and pipes
      empower me to build and customize any project with precision and control.
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

  <div class="space"></div>
</section>

<Carousel title={language.title} items={language.items} />

<section>
  <div class="space"></div>
  <Header title="PROJECTS" slogan="A collection of my successful projects" />
  <br /><br />
  <Projects {projects} />
</section>

<style>
  .space {
    height: 70px;
  }
</style>
