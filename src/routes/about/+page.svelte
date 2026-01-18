<script lang="ts">
  import Banner from "$lib/components/Banner.svelte";
  import MetaTags from "$lib/components/MetaTags.svelte";
  import { items, menu } from "$lib/data/knowledge";
  import Icon from "@iconify/svelte";

  let activeSection = $state("features");

  function scrollIntoView(value: string) {
    const el = document.getElementById(value);
    if (el) {
      // Offset for sticky header/banner
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      activeSection = value;
    }
  }

  // Unified menu with features and skills
  const unifiedMenu: Array<{ name: string; icon: string; label?: string }> = [
    { name: "skills", icon: "mdi:star-circle", label: "Skills" },
    ...menu.map((item) => ({ ...item, label: item.name })),
    {
      name: "recommendations",
      icon: "mdi:certificate",
      label: "Recommendations",
    },
  ];

  const recommendations = [
    {
      company: "SMAVA",
      file: "/recommendation/SMAVA recommendation.jpg",
      type: "image",
      description: "Recommendation letter from SMAVA",
    },
    {
      company: "EVA Global",
      file: "/recommendation/EVA recommendation.pdf",
      type: "pdf",
      description: "Recommendation letter from EVA Global",
    },
  ];

  const descriptions: Record<string, string> = {
    tinkercad:
      "Tinkercad is a free web app for 3D design, electronics, and coding. It's beginner-friendly with an intuitive interface for creating 3D models, simulating circuits, and learning to code.",
    deno: "Deno is a secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust. It aims to be a productive and secure scripting environment for the modern programmer.",
    turborepo:
      "Turborepo is a high-performance, incremental build system for JavaScript and TypeScript codebases. Developed by Vercel and written in Rust, it is designed to make managing monorepos (repositories containing multiple projects/packages) faster and more efficient.",
    nodejs:
      "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.",
    angular:
      "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
    nx: "From more out-of-the-box tooling support to faster builds and more features, the Nx CLI dramatically improves your Angular development experience, while allowing you to reuse most of the knowledge you have gained from using the Angular CLI.",
    svelte:
      "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.",
    vue: "VueJS is an open source progressive JavaScript framework used to develop interactive web interfaces. It is one of the famous frameworks used to simplify web development. VueJS focusses on the view layer. It can be easily integrated into big projects for front-end development without any issues.",
    react:
      "ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition − React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
    next: "Next. js is a React framework that enables several extra features, including server-side rendering and generating static websites. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.",
    jquery:
      "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites.",
    formly:
      "Formly is a dynamic (JSON powered) form library for Angular that bring unmatched maintainability to your application's forms.",
    ckeditor:
      "CKEditor 5 builds are a set of ready-to-use rich text editors. Every build provides a single type of editor with a set of features and a default configuration. They provide convenient solutions that can be installed with no effort and that satisfy the most common editing use cases.",
    d3: "D3 is a JavaScript library and framework for creating visualizations. D3 creates visualizations by binding the data and graphical elements to the Document Object Model. D3 associates (binding) the data (stuff you want to visualize) with the DOM. This allows the user to manipulate, change or add to the DOM.",
    highchart:
      "Highcharts is a pure JavaScript based charting library meant to enhance web applications by adding interactive charting capability. Highcharts provides a wide variety of charts. For example, line charts, spline charts, area charts, bar charts, pie charts and so on.",
    pwa: "Progressive Web Apps (PWAs) are web apps that use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps.",
    material:
      "Material provide tools that help developers build their own custom components with common interaction patterns. Customizable within the bounds of the Material Design specification. Built by the Angular team to integrate seamlessly with Angular. Start from scratch or drop into your existing applications.",
    bootstrap:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    semantic:
      "Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML. Classes use syntax from natural languages like noun/modifier relationships, word order, and plurality to link concepts intuitively.",
    git: "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
    npm: "npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.",
    php: "PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.",
    mysql:
      'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
    wordpress:
      "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes.",
    webflow:
      "Webflow, Inc. is an American company, based in San Francisco, that provides software as a service for website building and hosting. Their online visual editor platform allows users to design, build, and launch websites.",
    builder:
      "Builder is the only headless CMS with a complete no-code visual editor that allows editors to drag and drop to create pages and content with your data and code components.",
    firefox:
      "Mozilla Firefox, or simply Firefox, is a free and open-source web browser developed by the Mozilla Foundation and its subsidiary, the Mozilla Corporation. It uses the Gecko rendering engine to display web pages, which implements current and anticipated web standards.",
    chrome:
      "Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, built with free software components from Apple WebKit and Mozilla Firefox. It was later ported to Linux, macOS, iOS, and Android, where it is the default browser.",
    safari:
      "Safari is a graphical web browser developed by Apple. It is primarily based on open-source software, and mainly WebKit. It succeeded Netscape Navigator, Cyberdog and Internet Explorer for Mac as the default web browser for Macintosh computers.",
    edge: "Microsoft Edge is a cross-platform web browser created and developed by Microsoft. It was first bundled with Windows 10 and Xbox One in 2015, and later released for other platforms: Android and iOS in 2017, macOS and older Windows versions in 2019, and Linux in 2020.",
    vsc: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
    brackets:
      "Brackets is a source code editor with a primary focus on web development. Created by Adobe Inc., it is free and open-source software licensed under the MIT License, and is currently maintained on GitHub by open-source developers. It is written in JavaScript, HTML and CSS.",
    slack:
      "Slack is a messaging program designed specifically for the workplace. Developed by American software company Slack Technologies and now owned by Salesforce, Slack offers many IRC-style features, including persistent chat rooms organized by topic, private groups, and direct messaging.",
    photoshop:
      "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.",
    illustrator:
      "Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985. Along with Creative Cloud, Illustrator CC was releasedole.",
    ableton:
      "Ableton AG is a German music software company that produces and distributes the production and performance program Ableton Live and a collection of related instruments and sample libraries, as well as their own hardware controller Ableton Push.",
    "1password":
      "1Password is a password manager developed by AgileBits Inc. It provides a place for users to store various passwords, software licenses, and other sensitive information in a virtual vault that is locked with a PBKDF2-guarded master password.",
    github:
      "GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.",
    gitlab:
      "GitLab Inc. is an open-core company that provides GitLab, a DevOps software package that combines the ability to develop, secure, and operate software in a single application.",
    jira: "Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.",
    azure:
      "Microsoft Azure, often referred to as Azure, is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers.",
    asana:
      "Asana is a web and mobile work management platform designed to help teams organize, track, and manage their work. It is produced by the San Francisco based company of the same name.",
    miro: "Miro is the online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows.",
    abstract:
      "Abstract is a design intelligence platform that helps teams gather requirements, review designs, and continuously measure what works, all in one space.",
    figma:
      "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows. The Figma mobile app for Android and iOS allow viewing and interacting with Figma prototypes in real-time mobile devices.",
    storybook:
      "Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.",
    copilot:
      "GitHub Copilot is an AI pair programmer tool that helps you write code faster and with less work. It draws context from comments and code to suggest individual lines and whole functions instantly.",
    chatgpt:
      "ChatGPT is an artificial intelligence chatbot developed by OpenAI and launched in November 2022. It is built on top of OpenAI's GPT-3.5 and GPT-4 families of large language models and has been fine-tuned using both supervised and reinforcement learning techniques.",
    gemini:
      "Gemini is a family of multimodal large language models developed by Google DeepMind, serving as the successor to PaLM and LaMDA. Gemini is designed to understand and process information from different modalities, including text, code, audio, image, and video.",
    claude:
      "Claude is a family of large language models developed by Anthropic. The first model was released in March 2023. Claude is designed to be helpful, harmless, and honest.",
    firebase:
      "Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.",
    vercel:
      "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences.",
  };

  const features = [
    {
      title: "AI & Agents",
      photo: "/photo/ai-logo2.jpg",
      description: `I integrate cutting-edge AI and LLM technologies into development workflows and applications. By leveraging tools like <a href="//github.com/features/copilot" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Copilot</a>, <a href="//anthropic.com" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Claude</a>, and <a href="//deepmind.google/technologies/gemini/" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Gemini</a>, I enhance productivity and build intelligent features. My focus extends to creating agentic systems that automate complex tasks, providing users with smart, context-aware assistance that evolves with their needs.`,
    },
    {
      title: "Development",
      photo: "/photo/software.jpg",
      description: `I specialize in building modern web applications that leverage the power
        of browser-native technologies. From sophisticated SaaS platforms to
        enterprise B2B solutions, I create scalable applications that provide
        seamless cross-device experiences. My focus is on delivering
        high-performance, maintainable codebases using cutting-edge frameworks
        and tools. Whether it's real-time data dashboards, e-commerce platforms,
        or collaborative business tools, I architect solutions that scale with
        your needs.`,
    },
    {
      title: "Design",
      photo: "/photo/styling.jpg",
      description: `I believe exceptional UI/UX design is the foundation of any successful
        digital product. My design philosophy centers on creating interfaces
        that are both aesthetically pleasing and functionally intuitive. I focus
        on accessibility, responsive design principles, and user-centered
        workflows that reduce cognitive load while maximizing productivity. From
        wireframing to pixel-perfect implementation, I ensure every interaction
        feels natural and purposeful, resulting in interfaces that users love to
        engage with.`,
    },
    {
      title: "Visualization",
      photo: "/photo/visualization.jpeg",
      description: `I transform complex data into compelling visual narratives that drive
        business decisions. My expertise spans from interactive dashboards and
        real-time analytics to custom charting solutions for financial, IoT, and
        enterprise applications. Using powerful libraries like
        <a href="//d3js.org" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">D3.js</a>
        and
        <a href="//highcharts.com" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Highcharts</a>,
        I create responsive, performant visualizations that handle large
        datasets with smooth animations and intuitive interactions. From
        time-series analysis to geospatial mapping, I make data accessible and
        actionable.`,
    },
    {
      title: "Management",
      photo: "/photo/develop.jpeg",
      description: `I excel at architecting technical solutions and leading development
        teams to deliver exceptional results. My approach involves strategic
        technology selection, evaluating frameworks like <a
          href="//svelte.com"
          target="_blank"
          class="underline text-primary-400 hover:text-primary-300 transition-colors">Svelte</a
        >,
        <a href="//reactjs.org" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">React</a>,
        <a href="//vuejs.org" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Vue</a> and
        <a href="//angular.io" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Angular</a> based
        on performance requirements, team expertise, and long-term maintainability.
        I focus on establishing robust development workflows, code quality standards,
        and scalable architectures that enable teams to deliver consistently high-quality
        applications.`,
    },
    {
      title: "Framework",
      photo: "/photo/framework.gif",
      description: `I excel in a comprehensive range of modern front-end technologies,
        including
        <a href="//react.dev" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">React</a>,
        <a href="//vuejs.org" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Vue</a>,
        <a href="//angular.io" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Angular</a>,
        and
        <a href="https://svelte.dev" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Svelte</a>.
        My expertise extends to cross-platform mobile development with
        frameworks like
        <a href="//expo.dev" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Expo</a>,
        <a href="//flutter.dev" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Flutter</a>,
        and
        <a href="//ionicframework.com" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Ionic</a>.
        I bring deep expertise in state management patterns and
        architectures, allowing me to architect robust, scalable solutions
        tailored to each project's unique requirements and complexity level.`,
    },
    {
      title: "Styling",
      photo: "/photo/styles.jpg",
      description: `I leverage powerful design systems like <a
          href="//material.io"
          target="_blank"
          class="underline text-primary-400 hover:text-primary-300 transition-colors">Material Design</a
        >
        and
        <a href="//flowbite-svelte.com" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Flowbite</a>
        to deliver polished, professional interfaces. These comprehensive component
        libraries provide extensive collections of pre-built, accessible components
        with seamless responsive design integration, accelerating development while
        maintaining design consistency. Beyond ready-made solutions, these systems
        offer robust tooling for creating custom components that follow established
        interaction patterns and accessibility standards.`,
    },
    {
      title: "Database",
      photo: "/photo/database.webp",
      description: `I leverage modern Backend-as-a-Service platforms like
        <a href="//firebase.google.com" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Firebase</a>
        or
        <a href="//supabase.com" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Supabase</a> to
        build robust, scalable data architectures. This platform enables me to rapidly
        develop real-time applications with authentication, serverless functions,
        and secure database operations. From implementing complex queries and data
        relationships to managing user permissions and real-time synchronization,
        I create seamless backend integrations that power dynamic, data-driven user
        experiences.`,
    },
    {
      title: "Deployment",
      photo: "/photo/deployment.webp",
      description: `<a href="//vercel.com" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Vercel</a> or
        <a href="//github.com" target="_blank" class="underline text-primary-400 hover:text-primary-300 transition-colors">Github</a> is my
        go-to tool for deployments, simplifying the process of pushing projects live.
        It provides insightful analytics, helping me understand user interaction
        and optimize performance. I also appreciate Vercel's continuous evolution,
        with new features like integrated commenting for streamlined collaboration
        and multi-branch management for flexible development.`,
    },
  ];
</script>

<MetaTags
  title="Marcello Annicchiarico | About"
  url="https://marcellokabora.com/about"
/>

<Banner
  cover="/gallery/keyboard.jpg"
  title="About Me"
  slogan="Learn more about my journey and expertise"
/>

<div class="container mx-auto max-w-7xl px-4 py-16">
  <div class="flex flex-col lg:flex-row gap-12">
    <!-- Unified Sticky Menu -->
    <div
      class="sticky top-24 self-start z-10 hidden lg:flex flex-col gap-2 min-w-[220px]"
    >
      <h3
        class="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-4 px-4"
      >
        Explore
      </h3>
      {#each unifiedMenu as item}
        <button
          class="text-sm font-medium px-4 py-3 cursor-pointer capitalize rounded-xl text-left
                 transition-all duration-300 flex items-center gap-3 group
                 {activeSection === item.name
            ? 'bg-neutral-800 text-primary-400 shadow-lg shadow-black/20 border-l-2 border-primary-500'
            : 'text-zinc-400 hover:text-white hover:bg-neutral-800/50'}"
          onclick={() => scrollIntoView(item.name)}
        >
          <Icon
            icon={item.icon}
            class="w-5 h-5 transition-transform duration-300 {activeSection ===
            item.name
              ? 'scale-110 text-primary-400'
              : 'group-hover:scale-110'}"
          />
          {item.label || item.name}
        </button>
      {/each}
    </div>

    <!-- Mobile Menu -->
    <div
      class="lg:hidden sticky top-0 z-90 overflow-x-auto pb-4 pl-0 pr-4 bg-bg-color/90 backdrop-blur-md border-b border-white/5 pt-2"
    >
      <div class="flex gap-2">
        {#each unifiedMenu as item}
          <button
            class="whitespace-nowrap text-sm font-medium px-4 py-2 cursor-pointer capitalize rounded-full border transition-all duration-200 flex items-center gap-2
                 {activeSection === item.name
              ? 'bg-neutral-800 border-primary-500 text-primary-400'
              : 'border-zinc-800 text-zinc-400 hover:border-zinc-600 bg-black/50'}"
            onclick={() => scrollIntoView(item.name)}
          >
            <Icon icon={item.icon} class="w-4 h-4" />
            {item.label || item.name}
          </button>
        {/each}
      </div>
    </div>

    <!-- Unified Content -->
    <div class="flex-1">
      <!-- Features Section -->
      <div id="skills" class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8">Skills</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {#each features as feature}
            <div
              class="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 transition-all duration-300 hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              <!-- Image with Overlay -->
              <div class="relative h-48 w-full overflow-hidden">
                <img
                  src={feature.photo}
                  alt={feature.title}
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-80"
                ></div>
              </div>

              <!-- Content -->
              <div class="flex flex-1 flex-col p-6 pt-0">
                <div class="-mt-6 relative z-10 mb-3">
                  <h3
                    class="inline-block text-xl font-bold text-white bg-neutral-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 group-hover:border-primary-500/30 transition-colors"
                  >
                    {feature.title}
                  </h3>
                </div>
                <p
                  class="text-sm text-zinc-400 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300"
                >
                  {@html feature.description}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Skills Grid Content -->
      <div class="flex-1">
        <h2 class="text-3xl font-bold text-white mb-8">Tools</h2>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {#each items as item}
            <div
              id={item.id}
              class="group relative flex flex-col bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300"
            >
              <!-- Card Header -->
              <div
                class="relative h-48 bg-black/20 p-6 flex items-center justify-center group-hover:bg-black/30 transition-colors"
              >
                <!-- Glow Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/90"
                ></div>

                <!-- Image -->
                <img
                  src={item.photo}
                  alt={item.title}
                  class="relative z-10 h-24 w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                />
              </div>

              <!-- Card Body -->
              <div class="p-6 pt-0 flex-1 flex flex-col relative z-20">
                <div class="flex items-center justify-between mb-3 -mt-6">
                  <h3
                    class="text-xl font-bold text-white bg-neutral-900 px-3 py-1 rounded-lg border border-white/10 group-hover:border-primary-500/30 transition-colors shadow-lg"
                  >
                    {item.title}
                  </h3>
                  {#if item.link}
                    <a
                      href={item.link}
                      target="_blank"
                      class="text-zinc-500 hover:text-primary-400 transition-colors bg-neutral-900 p-2 rounded-lg border border-white/10 group-hover:border-primary-500/30 shadow-lg"
                    >
                      <Icon icon="mdi:external-link" class="w-5 h-5" />
                    </a>
                  {/if}
                </div>

                <p
                  class="text-sm text-zinc-400 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300"
                >
                  {descriptions[item.name] || item.title}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Recommendations Section -->
      <div id="recommendations" class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8">Recommendations</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each recommendations as recommendation}
            <a
              href={recommendation.file}
              target="_blank"
              class="group relative flex flex-col bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 p-6"
            >
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="flex-shrink-0 w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors"
                >
                  <Icon
                    icon="mdi:file-pdf-box"
                    class="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-white mb-1">
                    {recommendation.company}
                  </h3>
                  <p class="text-sm text-zinc-500">Recommendation Letter</p>
                </div>
                <Icon
                  icon="mdi:open-in-new"
                  class="w-5 h-5 text-zinc-500 group-hover:text-primary-400 transition-colors"
                />
              </div>
              <p class="text-sm text-zinc-400 leading-relaxed">
                {recommendation.description}
              </p>
              <div class="mt-4 pt-4 border-t border-white/5">
                <span
                  class="text-xs text-secondary-400 uppercase tracking-wider font-medium"
                >
                  Open {recommendation.type === "pdf" ? "PDF" : "Image"}
                </span>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
