<script lang="ts">
  import { onMount } from "svelte";

  let currentSlide = $state(0);

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const p = parseInt(params.get("slide") ?? "", 10);
    if (!isNaN(p) && p >= 0 && p < slides.length) {
      currentSlide = p;
    }
  });

  $effect(() => {
    history.replaceState({}, "", `?slide=${currentSlide}`);
  });

  const slides = [
    { id: 0, component: "intro" },
    { id: 1, component: "identity" },
    { id: 2, component: "career" },
    { id: 3, component: "skills" },
    { id: 4, component: "why" },
    { id: 5, component: "personal" },
    { id: 6, component: "closing" },
  ];

  const skillCategories = [
    {
      label: "Frameworks",
      icon: "⬡",
      skills: [
        "React",
        "Next.js",
        "Vue",
        "Nuxt",
        "Svelte",
        "SvelteKit",
        "Angular",
      ],
    },
    {
      label: "AI & Automation",
      icon: "◈",
      skills: [
        "GitHub Copilot",
        "Claude",
        "Gemini",
        "LLM Integration",
        "MCP",
        "AI-augmented",
      ],
    },
    {
      label: "Data & Visualization",
      icon: "◎",
      skills: [
        "D3.js",
        "Three.js",
        "Highcharts",
        "VIZ Library",
        "Chart.js",
        "Recharts",
      ],
    },
    {
      label: "Infrastructure",
      icon: "◫",
      skills: ["AWS", "Docker", "Firebase", "Turborepo", "NX", "CI/CD"],
    },
  ];

  const career = [
    {
      logo: "/logo/fasttrack.png",
      name: "Fast Track",
      title: "Frontend AI Leader",
      time: "Jun 2024 – Jan 2025",
      highlight: "Accelerated development cycles using AI-driven workflows.",
      tag: "AI · MCP · Nuxt · Svelte",
    },
    {
      logo: "/company/evaglobal.png",
      name: "Eva Global",
      title: "Senior Frontend Developer",
      time: "Oct 2022 – Feb 2025",
      highlight:
        "Built a comprehensive UI library for an EV charging platform.",
      tag: "Angular · Storybook · VIZ Library",
    },
    {
      logo: "/logo/linus.png",
      name: "LINUS Finance",
      title: "Frontend Developer",
      time: "Sep 2021 – Aug 2022",
      highlight:
        "Modernized core investment interfaces using RSC and Builder.io.",
      tag: "React · Vue · GraphQL",
    },
    {
      logo: "/company/yukka.png",
      name: "YUKKA Lab",
      title: "Frontend Architect",
      time: "Jun 2017 – Nov 2019",
      highlight:
        "Complex data visualizations (D3.js) and modular analytics modules.",
      tag: "Angular · D3.js · Highcharts",
    },
    {
      logo: "/logo/buildingminds.png",
      name: "Building Minds",
      title: "Frontend Developer",
      time: "Jan 2020 – Sep 2021",
      highlight:
        "Modular management modules for smart building equipment tools.",
      tag: "Angular · Redux · Azure",
    },
  ];

  function next() {
    if (currentSlide < slides.length - 1) currentSlide++;
  }

  function prev() {
    if (currentSlide > 0) currentSlide--;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
  }
</script>

<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div
  class="w-screen h-[100dvh] overflow-hidden relative select-none bg-[#0a0a0a]"
>
  <!-- Slide 1: Logo -->
  {#if currentSlide === 0}
    <div class="w-full h-full flex flex-col items-center justify-center gap-8">
      <img
        src="/logo/anybotics.webp"
        alt="ANYbotics"
        class="w-[380px] max-w-[60vw]"
      />
      <div class="flex flex-col items-center gap-2">
        <p class="text-white/70 text-xl font-light tracking-wide">
          Frontend Engineering &amp; AI Specialist — presented by
        </p>
        <p class="text-white text-2xl font-semibold tracking-tight">
          Marcello Annicchiarico
        </p>
      </div>
    </div>
  {/if}

  <!-- Slide 2: Introduction & Professional Identity -->
  {#if currentSlide === 1}
    <div class="w-full h-full flex items-center justify-center px-16 gap-16">
      <!-- Headshot -->
      <div class="flex-shrink-0 relative">
        <div class="w-64 h-64 rounded-2xl overflow-hidden ring-1 ring-white/10">
          <img
            src="/selfie/selfie-styled.png"
            alt="Marcello Annicchiarico"
            class="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <!-- Identity content -->
      <div class="flex flex-col gap-6 max-w-lg">
        <!-- Name & title -->
        <div>
          <p
            class="text-white/40 text-sm font-mono tracking-widest uppercase mb-2"
          >
            Senior Frontend Developer
          </p>
          <h1
            class="text-white text-5xl font-bold leading-tight tracking-tight"
          >
            Marcello<br />Annicchiarico
          </h1>
          <p class="text-white/50 text-lg mt-3 font-light">
            10+ years of experience
          </p>
        </div>

        <!-- Power keywords -->
        <div class="flex flex-wrap gap-2">
          {#each ["Interface Design", "Generative UI", "Agentic Development"] as kw}
            <span
              class="px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-sm font-medium tracking-wide"
            >
              {kw}
            </span>
          {/each}
        </div>

        <!-- Core philosophy -->
        <div class="border-l-2 border-white/20 pl-5">
          <p class="text-white/55 text-base leading-relaxed italic">
            Turning intricate business logic into<br />
            intuitive, high-performance user experiences.
          </p>
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 3: Career Journey -->
  {#if currentSlide === 2}
    <div class="w-full h-full flex items-center justify-center">
      <div class="flex flex-col gap-6 w-full max-w-2xl px-8">
        <!-- Header -->
        <div>
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Career Journey
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            Key Milestones
          </h2>
        </div>

        <!-- Timeline -->
        <div class="relative flex flex-col gap-0">
          <!-- Vertical line -->
          <div
            class="absolute left-[27px] top-4 bottom-4 w-px bg-white/10"
          ></div>

          {#each career as item, i}
            <div class="relative flex items-start gap-6 group">
              <!-- Dot + logo -->
              <div
                class="flex-shrink-0 w-14 flex flex-col items-center gap-1 pt-1"
              >
                <div
                  class="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center overflow-hidden z-10 group-hover:border-white/30 transition-colors duration-200"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    class="w-7 h-7 object-contain"
                  />
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 pb-6 border-b border-white/5 last:border-0">
                <div class="flex items-baseline justify-between gap-4">
                  <div class="flex items-baseline gap-3">
                    <span class="text-white font-semibold text-base"
                      >{item.name}</span
                    >
                    <span class="text-white/40 text-xs">{item.title}</span>
                  </div>
                  <span class="text-white/25 text-xs font-mono flex-shrink-0"
                    >{item.time}</span
                  >
                </div>
                <p class="text-white/55 text-sm mt-1 leading-relaxed">
                  {item.highlight}
                </p>
                <div class="mt-1.5">
                  <span class="text-white/25 text-xs font-mono">{item.tag}</span
                  >
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 4: Technical Excellence & Skills -->
  {#if currentSlide === 3}
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full max-w-3xl px-8 flex flex-col gap-8">
        <!-- Header -->
        <div>
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Technical Excellence
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            Skills & Stack
          </h2>
        </div>

        <!-- Skill grid -->
        <div class="grid grid-cols-2 gap-4">
          {#each skillCategories as cat}
            <div
              class="bg-[#1a1a1a] border border-white/8 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div class="flex items-center gap-2">
                <span class="text-white/30 text-sm font-mono">{cat.icon}</span>
                <span
                  class="text-white/60 text-xs font-mono tracking-widest uppercase"
                  >{cat.label}</span
                >
              </div>
              <div class="flex flex-wrap gap-2">
                {#each cat.skills as skill}
                  <span
                    class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium"
                  >
                    {skill}
                  </span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 5: Why ANYbotics? -->
  {#if currentSlide === 4}
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full max-w-4xl px-8 flex flex-col gap-8">
        <!-- Header -->
        <div>
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Motivation & Alignment
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            Why ANYbotics?
          </h2>
        </div>

        <!-- Two-column layout -->
        <div class="grid grid-cols-2 gap-6">
          <!-- Left: Motivation -->
          <div class="flex flex-col gap-4">
            <div
              class="bg-[#1a1a1a] border border-white/8 rounded-2xl p-5 flex flex-col gap-3"
            >
              <p
                class="text-white/30 text-xs font-mono tracking-widest uppercase"
              >
                Motivation
              </p>
              <p class="text-white text-base leading-relaxed">
                Driven by the intersection of
                <span class="text-white font-semibold">physical hardware</span>
                and
                <span class="text-white font-semibold"
                  >intelligent software interfaces</span
                >.
              </p>
              <p class="text-white/55 text-sm leading-relaxed">
                ANYbotics represents the frontier of AI in the real world —
                exactly where I want to build.
              </p>
            </div>

            <!-- The Why -->
            <div class="border-l-2 border-white/20 pl-5">
              <p
                class="text-white/30 text-xs font-mono tracking-widest uppercase mb-2"
              >
                The Why
              </p>
              <p class="text-white/70 text-sm leading-relaxed italic">
                A rare blend of deep frontend engineering and AI-driven
                development — ready to scale your robotics management
                interfaces.
              </p>
            </div>
          </div>

          <!-- Right: Value Alignment -->
          <div class="flex flex-col gap-3">
            <p
              class="text-white/30 text-xs font-mono tracking-widest uppercase"
            >
              Value Alignment
            </p>

            <div class="flex flex-col gap-3">
              <!-- Innovation -->
              <div
                class="bg-[#1a1a1a] border border-white/8 rounded-xl p-4 flex gap-4 items-start"
              >
                <div
                  class="mt-0.5 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-3 h-3 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-white text-sm font-semibold mb-0.5">
                    Innovation
                  </p>
                  <p class="text-white/50 text-xs leading-relaxed">
                    Practical experience with AI-agent protocols and MCP, ready
                    to drive next-generation automation.
                  </p>
                </div>
              </div>

              <!-- Precision -->
              <div
                class="bg-[#1a1a1a] border border-white/8 rounded-xl p-4 flex gap-4 items-start"
              >
                <div
                  class="mt-0.5 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-3 h-3 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-white text-sm font-semibold mb-0.5">
                    Quality & Precision
                  </p>
                  <p class="text-white/50 text-xs leading-relaxed">
                    History of building high-performance, 100% consistent Design
                    Systems at enterprise scale.
                  </p>
                </div>
              </div>

              <!-- Scalability -->
              <div
                class="bg-[#1a1a1a] border border-white/8 rounded-xl p-4 flex gap-4 items-start"
              >
                <div
                  class="mt-0.5 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-3 h-3 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-white text-sm font-semibold mb-0.5">Scale</p>
                  <p class="text-white/50 text-xs leading-relaxed">
                    Proven track record of scalable UI architecture for complex,
                    data-dense industrial platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 6: Personal Aspects & Hobbies -->
  {#if currentSlide === 5}
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full max-w-3xl px-8 flex flex-col gap-8">
        <!-- Header -->
        <div>
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Beyond the Code
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            Personal Aspects
          </h2>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <!-- Interests -->
          <div
            class="col-span-2 bg-[#1a1a1a] border border-white/8 rounded-2xl p-5 flex flex-col gap-4"
          >
            <p
              class="text-white/30 text-xs font-mono tracking-widest uppercase"
            >
              Interests
            </p>
            <div class="grid grid-cols-3 gap-3">
              {#each [{ icon: "🎨", label: "Design" }, { icon: "🏛", label: "Architecture" }, { icon: "🎬", label: "Films" }] as item}
                <div
                  class="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/8"
                >
                  <span class="text-2xl">{item.icon}</span>
                  <span class="text-white/70 text-xs font-medium"
                    >{item.label}</span
                  >
                </div>
              {/each}
            </div>
          </div>

          <!-- Languages -->
          <div
            class="bg-[#1a1a1a] border border-white/8 rounded-2xl p-5 flex flex-col gap-4"
          >
            <p
              class="text-white/30 text-xs font-mono tracking-widest uppercase"
            >
              Languages
            </p>
            <div class="flex flex-col gap-2">
              {#each [{ flag: "🇮🇹", lang: "Italian", level: "Native" }, { flag: "🇬🇧", lang: "English", level: "Fluent" }, { flag: "🇪🇸", lang: "Spanish", level: "Basic" }] as item}
                <div class="flex items-center gap-2">
                  <span class="text-base text-white/20">{item.flag}</span>
                  <div class="flex-1">
                    <span class="text-white/70 text-xs">{item.lang}</span>
                  </div>
                  <span class="text-white/25 text-xs font-mono"
                    >{item.level}</span
                  >
                </div>
              {/each}
            </div>
          </div>

          <!-- 7echno -->
          <div
            class="col-span-3 bg-[#1a1a1a] border border-white/8 rounded-2xl p-5 flex items-center gap-6"
          >
            <div
              class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
            >
              <span class="text-xl">🎵</span>
            </div>
            <div class="flex-1">
              <div class="flex items-baseline gap-3 mb-1">
                <span class="text-white font-semibold text-sm">7echno</span>
                <span class="text-white/30 text-xs font-mono"
                  >Side Project · Founder & Developer</span
                >
              </div>
              <p class="text-white/50 text-xs leading-relaxed">
                An AI-powered electronic music platform — blending generative AI
                with audio culture. Built with Svelte, Firebase, and LLM
                integrations.
              </p>
            </div>
            <a
              href="//7echno.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-shrink-0 px-4 py-1.5 rounded-full border border-white/15 text-white/50 text-xs hover:border-white/40 hover:text-white/80 transition-colors duration-200"
            >
              7echno.com
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 7: Closing -->
  {#if currentSlide === 6}
    <div class="w-full h-full flex flex-col items-center justify-center gap-10">
      <img
        src="/logo/anybotics.webp"
        alt="ANYbotics"
        class="w-[340px] max-w-[55vw]"
      />
      <div class="flex flex-col items-center gap-3">
        <h2 class="text-white text-3xl font-bold tracking-tight text-center">
          Thank you.
        </h2>
        <p class="text-white/50 text-base font-light tracking-wide">
          Let's build something remarkable together.
        </p>
      </div>
    </div>
  {/if}

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
    {#each slides as _, i}
      <button
        onclick={() => (currentSlide = i)}
        class={[
          "w-2 h-2 rounded-full transition-all duration-300",
          currentSlide === i
            ? "bg-white scale-125"
            : "bg-white/25 hover:bg-white/50",
        ].join(" ")}
        aria-label={`Go to slide ${i + 1}`}
      ></button>
    {/each}
  </div>

  <!-- Arrow navigation -->
  {#if currentSlide > 0}
    <button
      onclick={prev}
      class="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 bg-white/5 hover:bg-white/10"
      aria-label="Previous slide"
    >
      <svg
        class="w-5 h-5 text-white/60"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  {/if}

  {#if currentSlide < slides.length - 1}
    <button
      onclick={next}
      class="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 bg-white/5 hover:bg-white/10"
      aria-label="Next slide"
    >
      <svg
        class="w-5 h-5 text-white/60"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  {/if}

  <!-- Slide counter -->
  <div class="absolute top-6 right-8 text-xs font-mono text-white/30">
    {currentSlide + 1} / {slides.length}
  </div>
</div>
