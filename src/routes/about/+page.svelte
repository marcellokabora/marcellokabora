<script lang="ts">
  import FeatureSection from "$lib/components/FeatureSection.svelte";
  import Banner from "$lib/components/Banner.svelte";
</script>

<svelte:head>
  <title>Marcello Annicchiarico | Fronted AI Developer</title>
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

<Banner
  cover="/gallery/keyboard.jpg"
  title="ABOUT"
  slogan="I am passionate about user interface and web application"
/>

<!-- ABOUT section with container -->
<div class="container mx-auto max-w-6xl px-6">
  <section class="flex flex-col py-16">
    <FeatureSection photo="/photo/software.jpg" title="Development">
      <p>
        I specialize in building modern web applications that leverage the power
        of browser-native technologies. From sophisticated SaaS platforms to
        enterprise B2B solutions, I create scalable applications that provide
        seamless cross-device experiences. My focus is on delivering
        high-performance, maintainable codebases using cutting-edge frameworks
        and tools. Whether it's real-time data dashboards, e-commerce platforms,
        or collaborative business tools, I architect solutions that scale with
        your needs.
      </p>
    </FeatureSection>
    <FeatureSection photo="/photo/styling.jpg" title="Design" aside>
      <p>
        I believe exceptional UI/UX design is the foundation of any successful
        digital product. My design philosophy centers on creating interfaces
        that are both aesthetically pleasing and functionally intuitive. I focus
        on accessibility, responsive design principles, and user-centered
        workflows that reduce cognitive load while maximizing productivity. From
        wireframing to pixel-perfect implementation, I ensure every interaction
        feels natural and purposeful, resulting in interfaces that users love to
        engage with.
      </p>
    </FeatureSection>
    <FeatureSection photo="/photo/visualization.jpeg" title="Visualization">
      <p>
        I transform complex data into compelling visual narratives that drive
        business decisions. My expertise spans from interactive dashboards and
        real-time analytics to custom charting solutions for financial, IoT, and
        enterprise applications. Using powerful libraries like
        <a href="//d3js.org" target="_blank" class="underline">D3.js</a>
        and
        <a href="//highcharts.com" target="_blank" class="underline"
          >Highcharts</a
        >, I create responsive, performant visualizations that handle large
        datasets with smooth animations and intuitive interactions. From
        time-series analysis to geospatial mapping, I make data accessible and
        actionable.
      </p>
    </FeatureSection>
    <FeatureSection photo="/photo/develop.jpeg" title="Management" aside>
      <p>
        I excel at architecting technical solutions and leading development
        teams to deliver exceptional results. My approach involves strategic
        technology selection, evaluating frameworks like <a
          href="//svelte.com"
          target="_blank"
          class="underline">Svelte</a
        >,
        <a href="//reactjs.org" target="_blank" class="underline">React</a>,
        <a href="//vuejs.org" target="_blank" class="underline">Vue</a> and
        <a href="//angular.io" target="_blank" class="underline">Angular</a> based
        on performance requirements, team expertise, and long-term maintainability.
        I focus on establishing robust development workflows, code quality standards,
        and scalable architectures that enable teams to deliver consistently high-quality
        applications.
      </p>
    </FeatureSection>

    <FeatureSection photo="/photo/framework.gif" title="Framework">
      <p>
        I excel in a comprehensive range of modern front-end technologies,
        including
        <a href="//react.dev" target="_blank" class="underline">React</a>,
        <a href="//vuejs.org" target="_blank" class="underline">Vue</a>,
        <a href="//angular.io" target="_blank" class="underline">Angular</a>,
        and
        <a href="https://svelte.dev" target="_blank" class="underline">Svelte</a
        >. My expertise extends to cross-platform mobile development with
        frameworks like
        <a href="//expo.dev" target="_blank" class="underline">Expo</a>,
        <a href="//flutter.dev" target="_blank" class="underline">Flutter</a>,
        and
        <a href="//ionicframework.com" target="_blank" class="underline"
          >Ionic</a
        >. I bring deep expertise in state management patterns and
        architectures, allowing me to architect robust, scalable solutions
        tailored to each project's unique requirements and complexity level.
      </p>
    </FeatureSection>

    <FeatureSection photo="/photo/styles.jpg" title="Styling" aside>
      <p>
        I leverage powerful design systems like <a
          href="//material.io"
          target="_blank"
          class="underline">Material Design</a
        >
        and
        <a href="//flowbite-svelte.com" target="_blank" class="underline"
          >Flowbite</a
        > to deliver polished, professional interfaces. These comprehensive component
        libraries provide extensive collections of pre-built, accessible components
        with seamless responsive design integration, accelerating development while
        maintaining design consistency. Beyond ready-made solutions, these systems
        offer robust tooling for creating custom components that follow established
        interaction patterns and accessibility standards.
      </p>
    </FeatureSection>

    <FeatureSection photo="/photo/database.webp" title="Database">
      <p>
        I leverage modern Backend-as-a-Service platforms like
        <a href="//firebase.google.com" target="_blank" class="underline"
          >Firebase</a
        >
        or
        <a href="//supabase.com" target="_blank" class="underline">Supabase</a> to
        build robust, scalable data architectures. This platform enables me to rapidly
        develop real-time applications with authentication, serverless functions,
        and secure database operations. From implementing complex queries and data
        relationships to managing user permissions and real-time synchronization,
        I create seamless backend integrations that power dynamic, data-driven user
        experiences.
      </p>
    </FeatureSection>

    <FeatureSection photo="/photo/deployment.webp" title="Deployment" aside>
      <p>
        <a href="//vercel.com" target="_blank" class="underline">Vercel</a> or
        <a href="//github.com" target="_blank" class="underline">Github</a> is my
        go-to tool for deployments, simplifying the process of pushing projects live.
        It provides insightful analytics, helping me understand user interaction
        and optimize performance. I also appreciate Vercel's continuous evolution,
        with new features like integrated commenting for streamlined collaboration
        and multi-branch management for flexible development.
      </p>
    </FeatureSection>
  </section>
</div>
