<script lang="ts">
  import Banner from "$lib/Banner.svelte";
  import Section from "$lib/Section.svelte";
  import { description } from "$lib/mocks";
  import { items, menu } from "./data";
  import Icon from "@iconify/svelte";

  let activeSection = "javascript";

  function scrollIntoView(value: string) {
    const el = document.getElementById(value);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      activeSection = value;
    }
  }
</script>

<svelte:head>
  <title>Marcello Kabora | Knowledge</title>
  <meta name="description" content={description} />
  <meta name="thumbnail" content="/gallery/develop.jpeg" />
  <meta property="og:image" content="/gallery/develop.jpeg" />
</svelte:head>

<Banner cover="/gallery/develop.jpeg" title="Knowledge" slogan="Technologies" />

<section class="grid gap-8" data-aos="fade-up">
  <div class="sticky top-20 flex justify-center gap-2 z-10 max-[1000px]:hidden">
    {#each menu as item}
      <button
        class="bg-white text-sm font-medium px-4 py-2 cursor-pointer capitalize border border-gray-200 rounded-full
               hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 group
               {activeSection === item.name
          ? 'border-blue-500 bg-blue-50 text-blue-600'
          : 'text-gray-600'}"
        onclick={() => scrollIntoView(item.name)}
      >
        <Icon
          icon={item.icon}
          class="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
        />
        {item.name}
      </button>
    {/each}
  </div>
  <div class="flex-1 px-5 mr-5">
    {#each items as item, id (item)}
      <div data-aos="fade-up" id={item.id}>
        <Section
          photo={item.photo}
          title={item.title}
          link={item.link}
          aside={id % 2 == 1}
          small
          objectFit="contain"
        >
          {#if item.name === "tinkercad"}
            <p>
              Tinkercad is a free web app for 3D design, electronics, and
              coding. It's beginner-friendly with an intuitive interface for
              creating 3D models, simulating circuits, and learning to code.
            </p>
          {:else if item.name === "nodejs"}
            <p>
              Node. js is primarily used for non-blocking, event-driven servers,
              due to its single-threaded nature. It's used for traditional web
              sites and back-end API services, but was designed with real-time,
              push-based architectures in mind.
            </p>
          {:else if item.name === "angular"}
            <p>
              Angular is a TypeScript-based open-source web application
              framework led by the Angular Team at Google and by a community of
              individuals and corporations. Angular is a complete rewrite from
              the same team that built AngularJS.
            </p>
          {:else if item.name === "nx"}
            <p>
              From more out-of-the-box tooling support to faster builds and more
              features, the Nx CLI dramatically improves your Angular
              development experience, while allowing you to reuse most of the
              knowledge you have gained from using the Angular CLI.
            </p>
          {:else if item.name === "svelte"}
            <p>
              Svelte is a radical new approach to building user interfaces.
              Whereas traditional frameworks like React and Vue do the bulk of
              their work in the browser, Svelte shifts that work into a compile
              step that happens when you build your app.
            </p>
          {:else if item.name === "vue"}
            <p>
              VueJS is an open source progressive JavaScript framework used to
              develop interactive web interfaces. It is one of the famous
              frameworks used to simplify web development. VueJS focusses on the
              view layer. It can be easily integrated into big projects for
              front-end development without any issues.
            </p>
          {:else if item.name === "react"}
            <p>
              ReactJS is JavaScript library used for building reusable UI
              components. According to React official documentation, following
              is the definition − React is a library for building composable
              user interfaces. It encourages the creation of reusable UI
              components, which present data that changes over time.
            </p>
          {:else if item.name === "next"}
            <p>
              Next. js is a React framework that enables several extra features,
              including server-side rendering and generating static websites.
              React is a JavaScript library that is traditionally used to build
              web applications rendered in the client's browser with JavaScript.
            </p>
          {:else if item.name === "jquery"}
            <p>
              jQuery is a JavaScript library designed to simplify HTML DOM tree
              traversal and manipulation, as well as event handling, CSS
              animation, and Ajax. It is free, open-source software using the
              permissive MIT License. As of May 2019, jQuery is used by 73% of
              the 10 million most popular websites.
            </p>
          {:else if item.name === "formly"}
            <p>
              Formly is a dynamic (JSON powered) form library for Angular that
              bring unmatched maintainability to your application's forms.
            </p>
          {:else if item.name === "ckeditor"}
            <p>
              CKEditor 5 builds are a set of ready-to-use rich text editors.
              Every build provides a single type of editor with a set of
              features and a default configuration. They provide convenient
              solutions that can be installed with no effort and that satisfy
              the most common editing use cases.
            </p>
          {:else if item.name === "d3"}
            <p>
              D3 is a JavaScript library and framework for creating
              visualizations. D3 creates visualizations by binding the data and
              graphical elements to the Document Object Model. D3 associates
              (binding) the data (stuff you want to visualize) with the DOM.
              This allows the user to manipulate, change or add to the DOM.
            </p>
          {:else if item.name === "highchart"}
            <p>
              Highcharts is a pure JavaScript based charting library meant to
              enhance web applications by adding interactive charting
              capability. Highcharts provides a wide variety of charts. For
              example, line charts, spline charts, area charts, bar charts, pie
              charts and so on.
            </p>
          {:else if item.name === "pwa"}
            <p>
              Progressive Web Apps (PWAs) are web apps that use service workers,
              manifests, and other web-platform features in combination with
              progressive enhancement to give users an experience on par with
              native apps.
            </p>
          {:else if item.name === "material"}
            <p>
              Material provide tools that help developers build their own custom
              components with common interaction patterns. Customizable within
              the bounds of the Material Design specification. Built by the
              Angular team to integrate seamlessly with Angular. Start from
              scratch or drop into your existing applications.
            </p>
          {:else if item.name === "bootstrap"}
            <p>
              Bootstrap is a free and open-source CSS framework directed at
              responsive, mobile-first front-end web development. It contains
              HTML, CSS and JavaScript-based design templates for typography,
              forms, buttons, navigation, and other interface components.
            </p>
          {:else if item.name === "semantic"}
            <p>
              Semantic is a development framework that helps create beautiful,
              responsive layouts using human-friendly HTML. Classes use syntax
              from natural languages like noun/modifier relationships, word
              order, and plurality to link concepts intuitively.
            </p>
          {:else if item.name === "git"}
            <p>
              Git is software for tracking changes in any set of files, usually
              used for coordinating work among programmers collaboratively
              developing source code during software development. Its goals
              include speed, data integrity, and support for distributed,
              non-linear workflows.
            </p>
          {:else if item.name === "npm"}
            <p>
              npm is a package manager for the JavaScript programming language
              maintained by npm, Inc. npm is the default package manager for the
              JavaScript runtime environment Node.js. It consists of a command
              line client, also called npm, and an online database of public and
              paid-for private packages, called the npm registry.
            </p>
          {:else if item.name === "php"}
            <p>
              PHP is a general-purpose scripting language geared toward web
              development. It was originally created by Danish-Canadian
              programmer Rasmus Lerdorf in 1994. The PHP reference
              implementation is now produced by The PHP Group.
            </p>
          {:else if item.name === "mysql"}
            <p>
              MySQL is an open-source relational database management system. Its
              name is a combination of "My", the name of co-founder Michael
              Widenius's daughter, and "SQL", the abbreviation for Structured
              Query Language.
            </p>
          {:else if item.name === "wordpress"}
            <p>
              WordPress is a free and open-source content management system
              written in PHP and paired with a MySQL or MariaDB database.
              Features include a plugin architecture and a template system,
              referred to within WordPress as Themes.
            </p>
          {:else if item.name === "webflow"}
            <p>
              Webflow, Inc. is an American company, based in San Francisco, that
              provides software as a service for website building and hosting.
              Their online visual editor platform allows users to design, build,
              and launch websites.
            </p>
          {:else if item.name === "builder"}
            <p>
              Builder is the only headless CMS with a complete no-code visual
              editor that allows editors to drag and drop to create pages and
              content with your data and code components.
            </p>
          {:else if item.name === "firefox"}
            <p>
              Mozilla Firefox, or simply Firefox, is a free and open-source web
              browser developed by the Mozilla Foundation and its subsidiary,
              the Mozilla Corporation. It uses the Gecko rendering engine to
              display web pages, which implements current and anticipated web
              standards.
            </p>
          {:else if item.name === "chrome"}
            <p>
              Google Chrome is a cross-platform web browser developed by Google.
              It was first released in 2008 for Microsoft Windows, built with
              free software components from Apple WebKit and Mozilla Firefox. It
              was later ported to Linux, macOS, iOS, and Android, where it is
              the default browser.
            </p>
          {:else if item.name === "safari"}
            <p>
              Safari is a graphical web browser developed by Apple. It is
              primarily based on open-source software, and mainly WebKit. It
              succeeded Netscape Navigator, Cyberdog and Internet Explorer for
              Mac as the default web browser for Macintosh computers.
            </p>
          {:else if item.name === "edge"}
            <p>
              Microsoft Edge is a cross-platform web browser created and
              developed by Microsoft. It was first bundled with Windows 10 and
              Xbox One in 2015, and later released for other platforms: Android
              and iOS in 2017, macOS and older Windows versions in 2019, and
              Linux in 2020.
            </p>
          {:else if item.name === "vsc"}
            <p>
              Visual Studio Code, also commonly referred to as VS Code, is a
              source-code editor made by Microsoft for Windows, Linux and macOS.
              Features include support for debugging, syntax highlighting,
              intelligent code completion, snippets, code refactoring, and
              embedded Git.
            </p>
          {:else if item.name === "brackets"}
            <p>
              Brackets is a source code editor with a primary focus on web
              development. Created by Adobe Inc., it is free and open-source
              software licensed under the MIT License, and is currently
              maintained on GitHub by open-source developers. It is written in
              JavaScript, HTML and CSS.
            </p>
          {:else if item.name === "slack"}
            <p>
              Slack is a messaging program designed specifically for the
              workplace. Developed by American software company Slack
              Technologies and now owned by Salesforce, Slack offers many
              IRC-style features, including persistent chat rooms organized by
              topic, private groups, and direct messaging.
            </p>
          {:else if item.name === "photoshop"}
            <p>
              Adobe Photoshop is a raster graphics editor developed and
              published by Adobe Inc. for Windows and macOS. It was originally
              created in 1988 by Thomas and John Knoll. Since then, the software
              has become the industry standard not only in raster graphics
              editing, but in digital art as a whole.
            </p>
          {:else if item.name === "illustrator"}
            <p>
              Adobe Illustrator is a vector graphics editor and design program
              developed and marketed by Adobe Inc. Originally designed for the
              Apple Macintosh, development of Adobe Illustrator began in 1985.
              Along with Creative Cloud, Illustrator CC was releasedole.
            </p>
          {:else if item.name === "ableton"}
            <p>
              Ableton AG is a German music software company that produces and
              distributes the production and performance program Ableton Live
              and a collection of related instruments and sample libraries, as
              well as their own hardware controller Ableton Push.
            </p>
          {:else if item.name === "1password"}
            <p>
              1Password is a password manager developed by AgileBits Inc. It
              provides a place for users to store various passwords, software
              licenses, and other sensitive information in a virtual vault that
              is locked with a PBKDF2-guarded master password.
            </p>
          {:else if item.name === "github"}
            <p>
              GitHub, Inc. is a provider of Internet hosting for software
              development and version control using Git. It offers the
              distributed version control and source code management
              functionality of Git, plus its own features.
            </p>
          {:else if item.name === "gitlab"}
            <p>
              GitLab Inc. is an open-core company that provides GitLab, a DevOps
              software package that combines the ability to develop, secure, and
              operate software in a single application.
            </p>
          {:else if item.name === "jira"}
            <p>
              Jira is a proprietary issue tracking product developed by
              Atlassian that allows bug tracking and agile project management.
            </p>
          {:else if item.name === "azure"}
            <p>
              Microsoft Azure, often referred to as Azure, is a cloud computing
              service operated by Microsoft for application management via
              Microsoft-managed data centers.
            </p>
          {:else if item.name === "asana"}
            <p>
              Asana is a web and mobile work management platform designed to
              help teams organize, track, and manage their work. It is produced
              by the San Francisco based company of the same name.
            </p>
          {:else if item.name === "miro"}
            <p>
              Miro is the online collaborative whiteboard platform that enables
              distributed teams to work effectively together, from brainstorming
              with digital sticky notes to planning and managing agile
              workflows.
            </p>
          {:else if item.name === "abstract"}
            <p>
              Abstract is a design intelligence platform that helps teams gather
              requirements, review designs, and continuously measure what works,
              all in one space.
            </p>
          {:else if item.name === "figma"}
            <p>
              Figma is a vector graphics editor and prototyping tool which is
              primarily web-based, with additional offline features enabled by
              desktop applications for macOS and Windows. The Figma mobile app
              for Android and iOS allow viewing and interacting with Figma
              prototypes in real-time mobile devices.
            </p>
          {:else if item.name === "storybook"}
            <p>
              Storybook is an open source tool for building UI components and
              pages in isolation. It streamlines UI development, testing, and
              documentation.
            </p>
          {:else if item.name === "firebase"}
            <p>
              Firebase is a platform developed by Google for creating mobile and
              web applications. It was originally an independent company founded
              in 2011. In 2014, Google acquired the platform and it is now their
              flagship offering for app development.
            </p>
          {:else if item.name === "supabase"}
            <p>
              Supabase is an open-source alternative to Firebase that provides
              developers with the tools they need to build, scale, and manage
              their applications. At its core, Supabase offers a Postgres
              database, which is a powerful and reliable relational database
              management system.
            </p>
          {:else if item.name === "vercel"}
            <p>
              Vercel is the platform for frontend developers, providing the
              speed and reliability innovators need to create at the moment of
              inspiration. We enable teams to iterate quickly and develop,
              preview, and ship delightful user experiences.
            </p>
          {/if}
        </Section>
      </div>
    {/each}
  </div>
</section>
