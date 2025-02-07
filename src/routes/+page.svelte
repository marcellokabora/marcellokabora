<script>
  import Gallery from "$lib/Gallery.svelte";
  import Section from "$lib/Section.svelte";
  import Header from "$lib/Header.svelte";
  import Carousel from "$lib/Carousel.svelte";
  import Projects from "$lib/Projects.svelte";

  const company = {
    cover: "/photo/back2.jpg",
    title: "CAREER",
    slogan: "I worked for different startup in Berlin and Italy",
    items: [
      {
        logo: "/company/evaglobal.jpg",
        company: "Eva Global",
        // title: "Frontend Developer",
        // time: "Oct 2022 - May 2024",
        link: "//evaglobal.com",
      },
      {
        logo: "/company/linus.png",
        company: "Linus",
        // title: "Frontend Developer",
        // time: "Sep 2021 - Aug 2022",
        link: "//linus-finance.com",
      },
      {
        logo: "/company/buildingminds.png",
        company: "Buildingminds",
        // title: "Frontend Developer ",
        // time: "Jan 2020 - Aug 2021",
        link: "//buildingminds.com",
      },
      {
        logo: "/company/yukkalab.png",
        company: "Yukkalab",
        // title: "Frontend Developer",
        // time: "Jun 2017 - Nov 2019",
        link: "//yukkalab.com",
      },
      {
        logo: "/company/smava.png",
        company: "Smava",
        // title: "Frontend Developer",
        // time: "Feb 2016 - Nov 2016",
        link: "//smava.de",
      },
      {
        logo: "/company/tanglang.png",
        company: "Tang Lang",
        // title: "Fullstack Developer",
        // time: "Apr 2014 - Dec 2015",
      },
      {
        logo: "/company/maggiolino.png",
        company: "Maggiolino",
        // title: "Fullstack Developer",
        // time: "Aug 2013 - Jan 2015",
      },
      {
        logo: "/company/airesis.png",
        company: "Airesis",
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
        title: "40%",
      },
    ],
  };
</script>

<svelte:head>
  <title>Marcello Kabora | Fronted Developer</title>
  <meta
    name="description"
    content="Frontend Developer with over 12 years of experience in frontend development, user interface, graphic design, data visualization, and progressive web app"
  />
  <meta
    name="keywords"
    content="Software, Developer, Frontend, Fullstack, Developer, UI/UX, Nodejs, Svelte, Angular, Material, D3,, NX, Firebase, Data Visualization"
  />
  <meta name="thumbnail" content="/gallery/keyboard.jpg" />
  <meta property="og:image" content="/gallery/keyboard.jpg" />
</svelte:head>

<Gallery />

<section>
  <Header
    classe="headtito"
    title="ABOUT"
    slogan="I am passionate about user interface and web application"
  />

  <div class="space"></div>

  <Section photo="/photo/software.jpg" title="Application" cover>
    <p>
      Web applications simplify software access by operating directly within web
      browsers. This allows users to access them from any device with internet
      access, and ensures seamless updates managed by the provider. They support
      a variety of tasks, including online shopping and data analysis.
    </p>
  </Section>
  <Section photo="/photo/styling.jpg" title="Design" cover aside>
    <p>
      A well-crafted user interface is the cornerstone of a successful
      application, seamlessly blending clarity with intuitive navigation. This
      design approach not only fosters a positive user experience but also
      empowers users to unleash their creativity and fully explore the
      application's rich features.
    </p>
  </Section>
  <Section photo="/photo/develop.jpeg" title="Management" cover>
    <p>
      To build complex and scalable applications, developers must choose
      appropriate frameworks based on the specific project. Frameworks such as
      <a href="//svelte.com" target="_blank">Svelte</a>,
      <a href="//reactjs.org" target="_blank">React</a>,
      <a href="//vuejs.org" target="_blank">Vue</a> and
      <a href="//angular.io" target="_blank">Angular</a> are suitable for a range
      of projects, from complex web applications to simple server-side rendered landing
      pages.
    </p>
  </Section>
  <Section photo="/photo/visualization.jpeg" title="Visualization" aside cover>
    <p>
      Data visualization is an interdisciplinary field that deals with the
      graphic representation of data and it is a particularly efficient way of
      communicating when the data is numerous for example a Time Series. I use
      <a href="//d3js.org" target="_blank">D3js</a> or
      <a href="//highcharts.com" target="_blank">Highcharts</a> to communicate information
      clearly and efficiently building statistical graphics, plots, or information
      graphics.
    </p>
  </Section>

  <div class="space"></div>
</section>

<Carousel
  title={company.title}
  slogan={company.slogan}
  cover={company.cover}
  items={company.items}
  perpage={4}
/>

<section>
  <div class="space"></div>

  <Header
    classe="headtito"
    title="ENVIROMENT"
    slogan="Develop programs by analysing and identifying areas for modification"
  />

  <div class="space"></div>

  <Section photo="/photo/frameworks.jpg" title="Framework" link="//angular.io">
    <p>
      <a href="https://svelte.dev" target="_blank">Svelte</a> and
      <a href="//angular.io" target="_blank">Angular</a> are my preferred frameworks
      for scalable projects, enabling seamless integration with leading market providers.
      Their unit testing capabilities and extensibility with authentication and pipes
      empower me to build and customize any project with precision and control.
    </p>
  </Section>
  <Section
    photo="/photo/styles.jpg"
    title="Styling"
    link="//material.angular.io"
    aside
  >
    <p>
      <a href="//material.angular.io" target="_blank">Material</a> and
      <a href="//mui.com">MUI</a>
      are my collection of ready-to-use components and seamless responsive design
      integration, making it perfect for any project. Additionally, it provides tools
      that empower developers to create custom components with familiar interaction
      patterns.
    </p>
  </Section>

  <Section
    photo="/photo/database.jpg"
    title="Database"
    link="//firebase.google.com"
  >
    <p>
      <a href="//firebase.google.com" target="_blank">Firebase</a> and
      <a href="https://aws.amazon.com/" target="_blank">AWS</a> are my favorite tools
      for working with databases that allow me to deliver richer app experiences.
      Firebase manages its own infrastructure with a nice set of tools to simplify
      the workflow of the developer by providing them with development kits and an
      online dashboard.
    </p>
  </Section>

  <Section
    photo="/photo/deployment.jpg"
    title="Deployment"
    color="#ac36f4"
    link="//vercel.com"
    aside
  >
    <p>
      <a href="//vercel.com" target="_blank">Vercel</a> or
      <a href="//aws.com" target="_blank">AWS</a> is my go-to tool for deployments,
      simplifying the process of pushing projects live. It provides insightful analytics,
      helping me understand user interaction and optimize performance. I also appreciate
      Vercel's continuous evolution, with new features like integrated commenting
      for streamlined collaboration and multi-branch management for flexible development.
    </p>
  </Section>

  <!-- <Section
    photo="/photo/webapp.png"
    title="Webapp"
    color="#ffdf00"
    link="//web.dev/progressive-web-apps"
  >
    <p>
      A web application is application software that runs on a web server,
      unlike computer-based software programs that are run locally on the
      operating system of the device, web applications are accessed by the user
      through a web browser with an active network connection.
    </p>
  </Section> -->

  <div class="space"></div>
</section>

<Carousel
  title={language.title}
  cover={language.cover}
  items={language.items}
  perpage={3}
/>

<section>
  <div class="space"></div>
  <Header title="PROJECTS" slogan="A collection of most successful projects" />
  <br /><br />
  <Projects />
</section>

<style>
  .space {
    height: 70px;
  }
</style>
