<script>
  export let company;
</script>

{#if company.name === "Eva Global"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <strong>The Challenge:</strong>
        <a href="//evaglobal.com" target="_blank">Eva Global</a> needed to scale
        its eMobility platform's frontend while building a cohesive UI library to
        serve multiple product teams managing electric vehicle charger infrastructure.
      </p>
      <p>
        <strong>My Role:</strong> As Senior Frontend Developer, I owned the
        Angular Material UI library architecture and drove UX improvements from
        concept to delivery, including the
        <a href="/project/heatmap/">Heatmap</a> feature.
      </p>
      <p>
        <strong>Architecture:</strong> Built and maintained the shared UI
        library using Angular Material and Storybook, ensuring design
        consistency across the
        <a href="/project/monitoring/">Monitoring</a> platform and other products.
      </p>
      <p>
        <strong>Result:</strong> Established a reusable component system adopted
        across teams and accelerated feature delivery through documented Storybook
        patterns.
      </p>
    </div>
  </div>
{:else if company.name === "Fast Track"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <strong>The Challenge:</strong> Fast Track needed to unify a fragmented frontend
        codebase spanning Vue, Nuxt, and Svelte into a cohesive monorepo while accelerating
        delivery through AI-driven workflows.
      </p>
      <p>
        <strong>Leadership:</strong> As Frontend AI Leader of a team of 3, I took
        ownership of the technical strategy — establishing the Design System documentation,
        defining AI agent protocols for team-wide adoption of GitHub Copilot, and
        mentoring developers on AI-augmented development practices.
      </p>
      <p>
        <strong>Architecture:</strong> I architected the monorepo structure with
        <strong>Turborepo</strong>, implemented MCP protocols for robust
        frontend-backend connectivity, and standardized the Figma-to-code
        pipeline across the
        <a href="/project/ticket-monorepo/">Ticket App</a> project.
      </p>
      <p>
        <strong>Result:</strong> Delivered a unified codebase with shared design
        tokens, reduced onboarding time for new developers, and established the foundational
        AI integration guidelines that the team continues to use.
      </p>
    </div>
  </div>
{:else if company.name === "7echno"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <a href="//7echno.com" target="_blank">7echno</a> is an AI-powered streaming
        platform that acts as a dynamic ecosystem for artists, venues, and labels
        in the techno music scene. It uses AI for intelligent matching, personalized
        recommendations, and data-driven insights, fostering connection, collaboration,
        and growth within the community.
      </p>
    </div>
  </div>
{:else if company.name === "Linus"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <a href="//linus-finance.com" target="_blank">LINUS Finance</a>
        is one of the leaders in Real Estate in Germany and wants to combine technology
        and expertise to give the co-investors access to high-quality investments
        whilst providing a best-in-class investing experience through our digital
        platform. I started work with the core of the team rebuilding the new UI
        and working on the new
        <a href="/project/linus-registration">Registration</a>, my next task was
        to build the template of the main
        <a href="/project/linus-product">Product</a>
        using Builder.io and React.js. and after I had rebuilt several landing pages
        for the
        <a href="/project/linus-marketing">marketing</a>
        team.
      </p>
    </div>
  </div>
{:else if company.name === "Buildingminds"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <strong>The Challenge:</strong>
        <a href="//buildingminds.com" target="_blank">BuildingMinds</a> needed to
        scale its Angular frontend across multiple teams while maintaining consistency
        in a complex enterprise platform built on Microsoft Azure services.
      </p>
      <p>
        <strong>Leadership:</strong> Working within a team of 3, I drove
        frontend standardization across squads — leading the migration of legacy
        UI into a shared
        <a href="/project/uicomponents">component library</a> and mentoring 2 developers
        on Angular architecture, Redux state management patterns, and Jest testing
        practices.
      </p>
      <p>
        <strong>Architecture:</strong> I established reusable component patterns
        with Angular Material and Redux, built the
        <a href="/project/appmanager">App Management</a> module, and introduced consistent
        testing strategies with Jest across the frontend codebase.
      </p>
      <p>
        <strong>Result:</strong> Unified frontend patterns adopted by multiple teams,
        reduced code duplication, and improved developer onboarding through documented
        component standards and mentorship.
      </p>
    </div>
  </div>
{:else if company.name === "Yukkalab"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <strong>The Challenge:</strong>
        <a href="//yukkalab.com" target="_blank">YUKKALab</a> needed to build a sophisticated
        news analytics platform with complex, interactive data visualizations that
        could surface market sentiment before stock exchanges reflected the trend.
      </p>
      <p>
        <strong>Leadership:</strong> As the frontend owner within a team of 3, I
        led the migration from the legacy frontend to Angular with Material Design
        and took full ownership of the data visualization architecture. I established
        charting component patterns that became the foundation for the entire product.
      </p>
      <p>
        <strong>Architecture:</strong> I designed and built advanced interactive
        visualizations using <strong>D3.js</strong> and
        <strong>Highcharts</strong>
        — including the <a href="/project/chartmap">Chartmap</a>,
        <a href="/project/network">Network</a>, and
        <a href="/project/signals">Signals</a> modules — each translating complex
        algorithmic data into actionable financial insights.
      </p>
      <p>
        <strong>Result:</strong> Delivered a production-grade analytics platform
        providing concrete investment recommendations through loss-limiting signals,
        with reusable visualization components adopted across the product.
      </p>
    </div>
  </div>
{:else if company.name === "Smava"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <a href="https://www.smava.de/" target="_blank">Smava</a>
        provides the best solution in Germany to find the right credit online with
        more than 50 bank accounts. My position as Frontend Developer was fundamental
        for the creation of the new
        <a href="/project/smava">Homepage</a>. My team was responsible for the
        conversion from the design to web application, my focus was mostly on
        HTML, CSS, and JS. I worked on all the animation, events in jquery and
        for the mail campaign building different templates for the marketing
        area.
      </p>
    </div>
  </div>
{:else if company.name === "Tang Lang"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <a href="http://www.tanglangviaggi.it/" target="_blank"
          >Tang Lang Viaggi</a
        >
        provide the best travel in bus in all Europes events, like Oktoberfest or
        IAA and others 50 events in all Europe. My job as Full Stack Developer was
        building 6 website for different event in Europe with all similar design
        but with different colors and images. The form for sell the travel provide
        several statment like the age or number of customers, the date and the time
        of the travel, the position of the pickup and the payment offcourse. Here
        the list of all the website i builded for this company :
        <a href="/project/oktoberfest">Oktoberfest</a>,
        <a href="/project/iaa">IAA</a>,
        <a href="/project/christmas">Christmas Markets</a>,
        <a href="/project/loretdemar">Loret De Mar</a>. I worked in Italy for
        the first 8 Months and the after 4 Months in remote from Berlin after i
        decided to find a Full Time employment job.
      </p>
    </div>
  </div>
{:else if company.name === "Maggiolino"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <a href="http://libreriamaggiolino.com/" target="_blank">Maggiolino</a> is
        a ecommerce website where anyone can find and buy specific books online.
        My position in the company was Full Stack Developer and my job was build
        the new website from scratch using the latest technology and design available.
        For the frontend i use Bootstrap and the layout of google images for show
        the book without disable the scroll list. For the backend i use pure php
        connected with a MySql database, all the animation are in Jquery and the
        payment is connected with paypal. I worked with this company for 16 months
        updating the database and improving the design every month, before the company
        decide to close the sell online.
      </p>
    </div>
  </div>
{:else if company.name === "Annunci Animali"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <a href="https://www.annuncianimali.it/" target="_blank"
          >Annunci Animali</a
        > is the bigger and famous website in Italy for sell or buy your animal,
        most of all dogs and cats but also others animals. My position inside the
        company was as Frontend Designer where i designed the homepage and most of
        the landing page of the website. I worked for this company for more than
        one year and i also work on the advertising department building the flyer
        and the business card.
      </p>
    </div>
  </div>
{:else if company.name === "Airesis"}
  <div class="company-description">
    <div class="description-content">
      <p>
        <a href="/project/airesis">Airesis</a>
        is a open source democracy platform where anyone can open a discussion and
        involve users to vote and discuss about it. My position inside the company
        was UI/UX Designer and i worked with them for 6 months. Currently my design
        is already part of the project and i hope the platform will be popular and
        help people around the world. I designed the menu interface and the homepage
        of the discussions testing different layout and colors trying to find the
        right way to show all the information necessary and focus on the deadline.
      </p>
    </div>
  </div>
{:else if company.name === "Shipchandler"}
  <div class="company-description">
    <div class="description-content">
      <p>
        Thomas Shipchandler, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
    </div>
  </div>
{/if}

<style>
  .company-description {
    color: #374151;
    line-height: 1.625;
  }

  .description-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .description-content p {
    font-size: 1rem;
    line-height: 1.75;
    color: #4b5563;
    margin: 0;
  }

  .description-content a {
    color: #2563eb;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    transition:
      color 0.2s ease-in-out,
      text-decoration-thickness 0.2s ease-in-out;
  }

  .description-content a:hover {
    color: #1d4ed8;
    text-decoration-thickness: 2px;
  }
</style>
