<script lang="ts">
  import { onMount } from "svelte";

  let currentSlide = $state(0);

  const slides = [
    { id: 0, component: "intro" },
    { id: 1, component: "problem" },
    { id: 2, component: "moodboard" },
    { id: 3, component: "gap" },
    { id: 4, component: "firstships" },
    { id: 5, component: "engine" },
    { id: 6, component: "running" },
    { id: 7, component: "stack" },
    { id: 8, component: "motion" },
    { id: 9, component: "closing" },
  ];

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

  const moodboard = [
    {
      name: "Linear",
      url: "https://linear.app",
      icon: "◆",
      what: "1px precision borders and high-density typography",
      why: "Feels like a professional engineering instrument — not a marketing brochure.",
    },
    {
      name: "Railway",
      url: "https://railway.app",
      icon: "◫",
      what: "Tactile infrastructure metaphors, plug-and-play visuals",
      why: "Makes abstract cloud concepts feel physical and ownable.",
    },
    {
      name: "Vercel",
      url: "https://vercel.com",
      icon: "▲",
      what: "Code as the hero, docs as primary product asset",
      why: "Developers trust what they can read. Copy snippets beat marketing copy.",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com",
      icon: "◎",
      what: "Masterclass in skimmable, high-density technical content",
      why: "Information at velocity — no scroll fatigue, instant value.",
    },
  ];

  const firstShips = [
    {
      num: "01",
      title: "OTel-Native Header Badge",
      description:
        'Add a high-fidelity "OpenTelemetry First" live-status badge to the site header.',
      metric: "Bounce rate ↓ · Authority signal ↑",
      handoff: "Design spec + copy",
      signal: "Sets the technical tone before the user reads a single word.",
    },
    {
      num: "02",
      title: "Layered Card System",
      description:
        "Redesign all information cards with elevation-based shadows and inset highlights — creating tactile depth that guides the eye through content hierarchy.",
      metric: "Engagement depth ↑ · Scroll rate ↑",
      handoff: "Shadow scale spec + component tokens",
      signal:
        "Depth signals importance. Users instinctively read layered surfaces before flat ones.",
    },
    {
      num: "03",
      title: "Lighthouse Best Practices Patch",
      description:
        "Image compression audit + script loading optimization across all pages.",
      metric: "Score 77 → 95+",
      handoff: "Lighthouse report + fix checklist",
      signal: "Performance IS the product demo. We practice what we preach.",
    },
  ];

  const enginePillars = [
    {
      icon: "◈",
      title: "ROI Calculator",
      subtitle: '"Datadog Tax" Tool',
      description:
        "Interactive volume slider showing cost reduction vs. incumbent. Safety-orange savings counter pulses in real-time.",
      tag: "High-intent conversion",
    },
    {
      icon: "◉",
      title: "OTel Information Hub",
      subtitle: "Tailwind-style Docs Engine",
      description:
        "Rank for high-intent architectural queries. Developers searching for OTel solutions land in Dash0's ecosystem.",
      tag: "Organic SEO flywheel",
    },
    {
      icon: "◐",
      title: "PostHog Instrumentation",
      subtitle: "Full Session Recording",
      description:
        'Identify exactly where users drop off in the "30-second hook" — the sandbox. Data drives every iteration.',
      tag: "Behavioral insight",
    },
    {
      icon: "◑",
      title: "Proof Engine",
      subtitle: '"Engineering Logs"',
      description:
        "Testimonials styled as code comments. High-trust credibility signal that fits the mechanical aesthetic.",
      tag: "Social proof",
    },
  ];
</script>

<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div
  class="w-screen h-[100dvh] overflow-hidden relative select-none bg-[var(--bg)]"
  style="--accent: #f08060; --bg: #131313; --surface: var(--surface)"
>
  <!-- Slide 0: Intro -->
  {#if currentSlide === 0}
    <div class="w-full h-full flex flex-col items-center justify-center gap-10">
      <img
        src="/logo/dash0.png"
        alt="dash0"
        class="w-[420px] max-w-[55vw] rounded-2xl"
      />
      <div class="flex flex-col items-center gap-3">
        <p class="text-white/40 text-sm font-mono tracking-widest uppercase">
          Master Rebuild Strategy & Growth Engine
        </p>
        <div class="w-12 h-px bg-[var(--accent)]"></div>
        <p class="text-white/60 text-base font-light tracking-wide mt-1">
          Presented by <span class="text-white font-semibold"
            >Marcello Annicchiarico</span
          >
        </p>
        <p class="text-white/30 text-sm font-mono">
          Senior Frontend Developer · AI Specialist
        </p>
      </div>
    </div>
  {/if}

  <!-- Slide 1: The Problem -->
  {#if currentSlide === 1}
    <div class="w-full h-full flex items-center justify-center px-16">
      <div class="w-full max-w-5xl flex items-center gap-16">
        <!-- Left: The Market -->
        <div class="flex-1 flex flex-col gap-5">
          <div>
            <p
              class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
            >
              The Market Today
            </p>
            <h2 class="text-white text-3xl font-bold tracking-tight">
              Sea of Sameness
            </h2>
          </div>
          <div class="flex flex-col gap-3">
            {#each [{ name: "Datadog", desc: "Enterprise dashboard overload" }, { name: "New Relic", desc: "Dense, utility-first, no personality" }, { name: "Grafana", desc: "Open-source complexity, hard to convert" }] as competitor}
              <div
                class="flex items-center gap-4 bg-white/3 border border-white/8 rounded-xl p-4"
              >
                <div
                  class="w-2 h-2 rounded-full bg-white/20 flex-shrink-0"
                ></div>
                <div>
                  <span class="text-white/80 text-sm font-semibold"
                    >{competitor.name}</span
                  >
                  <span class="text-white/35 text-xs ml-3"
                    >{competitor.desc}</span
                  >
                </div>
              </div>
            {/each}
          </div>
          <p class="text-white/30 text-xs font-mono leading-relaxed">
            Every site: dark blue gradients, abstract glowing spheres,<br />
            generic "observability" copy. Nothing memorable.
          </p>
        </div>

        <!-- Divider -->
        <div class="w-px h-48 bg-white/10"></div>

        <!-- Right: The Opportunity -->
        <div class="flex-1 flex flex-col gap-6">
          <div>
            <p
              class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
            >
              The Opportunity
            </p>
            <h2 class="text-white text-3xl font-bold tracking-tight">
              Dash0 can own<br /><span class="text-[var(--accent)]"
                >The Interactive Logic Model</span
              >
            </h2>
          </div>
          <div
            class="border-l-2 border-[var(--accent)]/50 pl-5 flex flex-col gap-3"
          >
            <p class="text-white/70 text-sm leading-relaxed">
              While competitors prove value with <span
                class="text-white font-semibold">static screenshots</span
              >
              (black boxes, no trust), Dash0 can own
              <span class="text-white font-semibold">Live Proof</span> — letting
              users interact with the technical and economic logic before signing
              up.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 mt-2">
            {#each ["Live Proof", "Real-Time", "Interactive", "Transparent"] as tag}
              <span
                class="px-3 py-1 rounded-full border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono"
              >
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 2: Moodboard -->
  {#if currentSlide === 2}
    <div
      class="w-full h-full flex flex-col items-center justify-center gap-6 px-16"
    >
      <div class="w-full max-w-4xl">
        <div class="mb-5">
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Q1 — Moodboard
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            What's catching my attention
          </h2>
        </div>

        <div class="grid grid-cols-2 gap-4">
          {#each moodboard as ref}
            <div
              class="bg-[var(--surface)] border border-white/8 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="text-[var(--accent)] text-lg font-mono"
                    >{ref.icon}</span
                  >
                  <div>
                    <span class="text-white font-semibold text-sm"
                      >{ref.name}</span
                    >
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-white/25 hover:text-[var(--accent)] text-xs font-mono ml-2 transition-colors duration-200"
                      >{ref.url.replace("https://", "")}</a
                    >
                  </div>
                </div>
              </div>
              <p class="text-white/80 text-sm font-medium leading-snug">
                {ref.what}
              </p>
              <p class="text-white/40 text-xs leading-relaxed italic">
                {ref.why}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 3: The Dash0 Gap -->
  {#if currentSlide === 3}
    <div
      class="w-full h-full flex flex-col items-center justify-center gap-6 px-16"
    >
      <div class="w-full max-w-4xl">
        <div class="mb-5">
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Q1 — The Gap
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            The Interactive Logic Model
          </h2>
          <p class="text-white/40 text-sm mt-2">
            Others prove value with static screenshots. Dash0 can own
            <span class="text-[var(--accent)]">Live Proof</span>.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div
            class="bg-[var(--surface)] border border-white/8 rounded-2xl p-5 flex flex-col gap-3"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center flex-shrink-0"
              >
                <span class="text-[var(--accent)] font-mono text-base">◈</span>
              </div>
              <p class="text-white font-semibold text-sm">
                Volume-Based Cost Calculator
              </p>
            </div>
            <p class="text-white/50 text-xs leading-relaxed">
              Move away from generic "Contact Sales" buttons. An interactive
              slider lets users visualize their exact cost savings against
              incumbents — immediately.
            </p>
            <div class="mt-auto">
              <span
                class="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/8 border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-mono"
                >High-intent conversion</span
              >
            </div>
          </div>

          <div
            class="bg-[var(--surface)] border border-[var(--accent)]/20 rounded-2xl p-5 flex flex-col gap-3"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center flex-shrink-0"
              >
                <span class="text-[var(--accent)] font-mono text-base">◐</span>
              </div>
              <p class="text-white font-semibold text-sm">
                The Data Density Slider
              </p>
            </div>
            <p class="text-white/50 text-xs leading-relaxed">
              A unique scrubbing tool that shows the "raw truth" of a noisy
              trace versus a Dash0 Purified Trace — side by side, in real time.
            </p>
            <div class="mt-auto">
              <span
                class="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/8 border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-mono"
                >Product-led proof</span
              >
            </div>
          </div>

          <div
            class="bg-[var(--surface)] border border-white/8 rounded-2xl p-5 flex flex-col gap-3"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center flex-shrink-0"
              >
                <span class="text-[var(--accent)] font-mono text-base">◑</span>
              </div>
              <p class="text-white font-semibold text-sm">
                Engineering Logs as Social Proof
              </p>
            </div>
            <p class="text-white/50 text-xs leading-relaxed">
              Testimonials styled as code comments. High-trust credibility that
              speaks the developer's own language — not marketing quotes.
            </p>
            <div class="mt-auto">
              <span
                class="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/8 border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-mono"
                >Developer credibility</span
              >
            </div>
          </div>

          <div
            class="bg-[var(--surface)] border border-white/8 rounded-2xl p-5 flex flex-col gap-3"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center flex-shrink-0"
              >
                <span class="text-[var(--accent)] font-mono text-base">◉</span>
              </div>
              <p class="text-white font-semibold text-sm">The Core Gap</p>
            </div>
            <p class="text-white/50 text-xs leading-relaxed">
              Competitors are <span class="text-white/70 font-medium"
                >Static Documents</span
              >. Dash0 becomes an
              <span class="text-[var(--accent)] font-medium"
                >Engineering Instrument</span
              > — you interact with the technical and economic logic before you sign
              up.
            </p>
            <div class="mt-auto">
              <span
                class="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/8 border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-mono"
                >Category-defining</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 4: First Ships -->
  {#if currentSlide === 4}
    <div
      class="w-full h-full flex flex-col items-center justify-center gap-6 px-16"
    >
      <div class="w-full max-w-3xl">
        <div class="mb-5">
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Q2 — First Ships
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            Concrete. Handoff-ready. <span class="text-[var(--accent)]"
              >&lt; 30 days.</span
            >
          </h2>
        </div>

        <div class="flex flex-col gap-3">
          {#each firstShips as item}
            <div
              class="bg-[var(--surface)] border border-white/8 rounded-2xl p-5 flex gap-5 items-start"
            >
              <span
                class="text-[var(--accent)]/40 font-mono text-2xl font-bold flex-shrink-0 leading-none mt-0.5"
                >{item.num}</span
              >
              <div class="flex-1 flex flex-col gap-2">
                <div class="flex items-start justify-between gap-4">
                  <p class="text-white font-semibold text-sm">{item.title}</p>
                  <span
                    class="flex-shrink-0 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-mono"
                    >{item.handoff}</span
                  >
                </div>
                <p class="text-white/50 text-xs leading-relaxed">
                  {item.description}
                </p>
                <div class="flex items-center gap-3 mt-1">
                  <span
                    class="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/25 text-[var(--accent)] text-xs font-mono"
                    >↑ {item.metric}</span
                  >
                </div>
                <p
                  class="text-white/25 text-xs italic leading-relaxed border-l border-white/10 pl-3"
                >
                  {item.signal}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 5: Lead Generation Engine -->
  {#if currentSlide === 5}
    <div
      class="w-full h-full flex flex-col items-center justify-center gap-6 px-16"
    >
      <div class="w-full max-w-4xl">
        <div class="mb-5">
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Q3 — Lead Generation
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            The Marketing Engine
          </h2>
        </div>

        <div class="grid grid-cols-2 gap-4">
          {#each enginePillars as pillar}
            <div
              class="bg-[var(--surface)] border border-white/8 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div class="flex items-center gap-3">
                <span class="text-[var(--accent)] text-xl font-mono"
                  >{pillar.icon}</span
                >
                <div>
                  <p class="text-white font-semibold text-sm">{pillar.title}</p>
                  <p class="text-white/30 text-xs font-mono">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
              <p class="text-white/50 text-xs leading-relaxed">
                {pillar.description}
              </p>
              <div class="mt-auto">
                <span
                  class="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/8 border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-mono"
                  >{pillar.tag}</span
                >
              </div>
            </div>
          {/each}
        </div>

        <div class="mt-4 text-center">
          <p class="text-white/30 text-xs font-mono">
            dash0.com as a <span class="text-white/60"
              >self-sustaining growth machine</span
            > — not just a front door.
          </p>
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 6: Running the Project -->
  {#if currentSlide === 6}
    <div
      class="w-full h-full flex flex-col items-center justify-center gap-6 px-16"
    >
      <div class="w-full max-w-4xl">
        <div class="mb-6">
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Q4 — Project Management
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            How I'd actually run this
          </h2>
        </div>

        <div class="grid grid-cols-3 gap-5">
          <!-- Kickoff -->
          <div
            class="bg-[var(--surface)] border border-white/8 rounded-2xl p-5 flex flex-col gap-4"
          >
            <div class="flex items-center gap-2">
              <span class="text-[var(--accent)] font-mono text-sm">Day 1–3</span
              >
            </div>
            <p class="text-white font-bold text-sm">Kickoff</p>
            <div class="flex flex-col gap-2">
              <p
                class="text-white/40 text-xs font-mono tracking-wide uppercase"
              >
                Know early
              </p>
              <ul class="flex flex-col gap-1.5">
                {#each ["ICP definition", "Brand guidelines", "CMS decision", "Analytics baseline"] as item}
                  <li class="flex items-center gap-2 text-white/65 text-xs">
                    <span class="text-[var(--accent)] text-xs">·</span>{item}
                  </li>
                {/each}
              </ul>
              <div class="mt-2 pt-2 border-t border-white/6">
                <p
                  class="text-white/40 text-xs font-mono tracking-wide uppercase mb-1.5"
                >
                  Can wait
                </p>
                <ul class="flex flex-col gap-1">
                  {#each ["Final copy", "All imagery", "Full design approval"] as item}
                    <li class="flex items-center gap-2 text-white/30 text-xs">
                      <span class="text-white/20 text-xs">·</span>{item}
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>

          <!-- Momentum -->
          <div
            class="bg-[var(--surface)] border border-[var(--accent)]/20 rounded-2xl p-5 flex flex-col gap-4"
          >
            <div class="flex items-center gap-2">
              <span class="text-[var(--accent)] font-mono text-sm">Ongoing</span
              >
            </div>
            <p class="text-white font-bold text-sm">Keeping Momentum</p>
            <div class="flex flex-col gap-3">
              <p class="text-white/55 text-xs leading-relaxed">
                AI-Native loop eliminates the Figma sign-off bottleneck.
              </p>
              <div class="flex flex-col gap-1.5">
                {#each ["Copilot — code generation", "Figma — rapid prototyping", "Claude — agentic architecture"] as tool}
                  <div
                    class="flex items-center gap-2 bg-white/3 border border-white/8 rounded-lg px-3 py-1.5"
                  >
                    <span class="text-[var(--accent)] text-xs font-mono">→</span
                    >
                    <span class="text-white/60 text-xs">{tool}</span>
                  </div>
                {/each}
              </div>
              <p class="text-white/35 text-xs italic">
                "Design-in-code. Ship to Learn."
              </p>
            </div>
          </div>

          <!-- Shipping Criteria -->
          <div
            class="bg-[var(--surface)] border border-white/8 rounded-2xl p-5 flex flex-col gap-4"
          >
            <div class="flex items-center gap-2">
              <span class="text-[var(--accent)] font-mono text-sm"
                >Definition of Done</span
              >
            </div>
            <p class="text-white font-bold text-sm">Shipping Criteria</p>
            <div class="flex flex-col gap-2.5">
              {#each [{ check: "Lighthouse ≥ 91", sub: "Performance as feature" }, { check: "Core user route works", sub: "Self-serve → sign-up" }, { check: "Zero a11y regressions", sub: "Target: 100 score" }, { check: "No Figma dependency", sub: "Code is the source of truth" }] as criterion}
                <div class="flex items-start gap-2.5">
                  <span
                    class="text-[var(--accent)] text-xs mt-0.5 flex-shrink-0"
                    >✓</span
                  >
                  <div>
                    <p class="text-white/75 text-xs font-medium">
                      {criterion.check}
                    </p>
                    <p class="text-white/25 text-xs">{criterion.sub}</p>
                  </div>
                </div>
              {/each}
            </div>
            <p class="text-white/25 text-xs italic mt-auto">
              "Perfection is a later phase."
            </p>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 7: Tech Stack & Roadmap -->
  {#if currentSlide === 7}
    <div class="w-full h-full flex items-center justify-center px-16">
      <div class="w-full max-w-5xl flex items-center gap-16">
        <!-- Left: Stack -->
        <div class="flex flex-col gap-6 flex-1">
          <div>
            <p
              class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
            >
              Technology
            </p>
            <h2 class="text-white text-3xl font-bold tracking-tight">
              Stack Decisions
            </h2>
          </div>
          <div class="flex flex-col gap-3">
            {#each [{ icon: "▲", label: "Framework", value: "Next.js / Astro", note: "Static-first for speed" }, { icon: "◈", label: "CMS", value: "Sanity", note: "Headless, structured content" }, { icon: "◉", label: "Analytics", value: "PostHog", note: "Product-led tracking" }, { icon: "◆", label: "Deployment", value: "Vercel", note: "Global CI/CD" }] as item}
              <div
                class="flex items-center gap-4 bg-[var(--surface)] border border-white/8 rounded-xl px-4 py-3"
              >
                <span class="text-[var(--accent)] font-mono w-5 flex-shrink-0"
                  >{item.icon}</span
                >
                <span class="text-white/30 text-xs font-mono w-20 flex-shrink-0"
                  >{item.label}</span
                >
                <span class="text-white font-semibold text-sm flex-1"
                  >{item.value}</span
                >
                <span class="text-white/25 text-xs font-mono">{item.note}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Divider -->
        <div class="w-px h-64 bg-white/10"></div>

        <!-- Right: Roadmap -->
        <div class="flex flex-col gap-6 flex-1">
          <div>
            <p
              class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
            >
              Roadmap
            </p>
            <h2 class="text-white text-3xl font-bold tracking-tight">
              4 Phases
            </h2>
          </div>
          <div class="relative flex flex-col gap-0">
            <div
              class="absolute left-[19px] top-4 bottom-4 w-px bg-white/8"
            ></div>
            {#each [{ phase: "Phase 1", weeks: "Wk 1–3", title: "Foundation", desc: "Stack setup, AI design system, 99+ performance guardrails" }, { phase: "Phase 2", weeks: "Wk 4–7", title: "The Hub", desc: "OTel repository, Schematic Gallery, Mechanical Proofs" }, { phase: "Phase 3", weeks: "Wk 8–10", title: "The Engine", desc: "PostHog instrumentation, ROI Calculator, full SEO crawl" }, { phase: "Phase 4", weeks: "Ongoing", title: "The Loop", desc: "Daily ships based on user data. Constant iteration." }] as item, i}
              <div class="relative flex items-start gap-5 pb-5 last:pb-0">
                <div
                  class="flex-shrink-0 w-10 flex items-center justify-center z-10 pt-0.5"
                >
                  <div
                    class="w-5 h-5 rounded-full border {i === 0
                      ? 'border-[var(--accent)] bg-[var(--accent)]/20'
                      : 'border-white/15 bg-[var(--bg)]'} flex items-center justify-center"
                  >
                    <div
                      class="w-1.5 h-1.5 rounded-full {i === 0
                        ? 'bg-[var(--accent)]'
                        : 'bg-white/20'}"
                    ></div>
                  </div>
                </div>
                <div class="flex-1 pt-0.5">
                  <div class="flex items-baseline gap-3 mb-0.5">
                    <span class="text-white/70 text-sm font-semibold"
                      >{item.title}</span
                    >
                    <span class="text-white/25 text-xs font-mono"
                      >{item.weeks}</span
                    >
                  </div>
                  <p class="text-white/40 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 8: Motion & Interactivity -->
  {#if currentSlide === 8}
    <div
      class="w-full h-full flex flex-col items-center justify-center gap-6 px-16"
    >
      <div class="w-full max-w-4xl">
        <div class="mb-6">
          <p
            class="text-white/30 text-xs font-mono tracking-widest uppercase mb-1"
          >
            Vision
          </p>
          <h2 class="text-white text-3xl font-bold tracking-tight">
            Motion & Interactivity
          </h2>
          <p class="text-white/35 text-sm mt-1">
            From static document → engineering instrument
          </p>
        </div>

        <div class="grid grid-cols-2 gap-5">
          <!-- Data Density Slider -->
          <div
            class="bg-[var(--surface)] border border-white/8 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div class="flex items-center gap-3">
              <span class="text-[var(--accent)] text-xl font-mono">⟺</span>
              <p class="text-white font-bold text-sm">Data Density Slider</p>
            </div>
            <div
              class="bg-[var(--bg)] border border-white/6 rounded-xl p-4 flex flex-col gap-2"
            >
              <div class="flex items-center justify-between text-xs font-mono">
                <span class="text-white/25">Messy Trace (Legacy)</span>
                <span class="w-px h-8 bg-[var(--accent)]"></span>
                <span class="text-[var(--accent)]">Dash0 Purified</span>
              </div>
              <div
                class="h-8 bg-gradient-to-r from-white/5 via-[var(--accent)]/10 to-[var(--accent)]/5 rounded-lg border border-white/6 flex items-center px-3"
              >
                <div
                  class="w-full h-px bg-gradient-to-r from-white/10 via-[var(--accent)]/40 to-white/5"
                ></div>
              </div>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">
              A 1px vertical scrub handle reveals the clarity Dash0 provides in
              real-time. Invites users to experience the product before signing
              up.
            </p>
          </div>

          <!-- Volume Dial ROI -->
          <div
            class="bg-[var(--surface)] border border-[var(--accent)]/15 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div class="flex items-center gap-3">
              <span class="text-[var(--accent)] text-xl font-mono">◎</span>
              <p class="text-white font-bold text-sm">Volume Dial ROI Chart</p>
            </div>
            <div
              class="bg-[var(--bg)] border border-white/6 rounded-xl p-4 flex flex-col gap-3"
            >
              <div class="flex items-center justify-between">
                <span class="text-white/25 text-xs font-mono"
                  >Monthly Traces</span
                >
                <span class="text-[var(--accent)] text-sm font-bold font-mono"
                  >$4,200/mo saved</span
                >
              </div>
              <div class="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  class="h-full w-2/3 bg-gradient-to-r from-[var(--accent)]/60 to-[var(--accent)] rounded-full"
                ></div>
              </div>
              <div class="flex gap-1 items-end h-10">
                {#each [3, 5, 4, 7, 6, 8, 7, 9, 8, 10, 9, 8] as h}
                  <div
                    class="flex-1 bg-[var(--accent)]/20 rounded-sm"
                    style="height: {h * 10}%"
                  ></div>
                {/each}
              </div>
            </div>
            <p class="text-white/40 text-xs leading-relaxed">
              SVG waveform morphs dynamically. Real-time savings counter pulses
              in coral. Converts skeptics with their own numbers.
            </p>
          </div>
        </div>

        <div
          class="mt-4 flex items-center justify-center gap-6 text-xs font-mono text-white/20"
        >
          <span>GPU-accelerated only (transform + opacity)</span>
          <span>·</span>
          <span>Respects prefers-reduced-motion</span>
          <span>·</span>
          <span>60fps promise</span>
        </div>
      </div>
    </div>
  {/if}

  <!-- Slide 9: Closing -->
  {#if currentSlide === 9}
    <div class="w-full h-full flex flex-col items-center justify-center gap-10">
      <img
        src="/logo/dash0.png"
        alt="dash0"
        class="w-[420px] max-w-[55vw] rounded-2xl"
      />
      <div class="flex flex-col items-center gap-4">
        <h2 class="text-white text-3xl font-bold tracking-tight text-center">
          Let's build something<br /><span class="text-[var(--accent)]"
            >unmistakably Dash0.</span
          >
        </h2>
        <p class="text-white/35 text-sm font-mono">
          Mechanical. Precise. Built to convert.
        </p>
      </div>
      <div class="flex items-center gap-3 flex-wrap justify-center">
        {#each ["99+ Performance", "100 Accessibility", "Mechanical Aesthetic", "AI-Native Workflow"] as badge}
          <span
            class="px-4 py-1.5 rounded-full border border-white/12 text-white/50 text-xs font-mono"
          >
            {badge}
          </span>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Nav dots -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
    {#each slides as _, i}
      <button
        onclick={() => (currentSlide = i)}
        class={[
          "w-2 h-2 rounded-full transition-all duration-300",
          currentSlide === i
            ? "bg-[var(--accent)] scale-125"
            : "bg-white/20 hover:bg-white/40",
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
  <div class="absolute top-6 right-8 text-xs font-mono text-white/25">
    {currentSlide + 1} / {slides.length}
  </div>
</div>
