<script lang="ts">
  import { items } from "$lib/data/knowledge";
  import { companies } from "$lib/data/companies";
  import Icon from "@iconify/svelte";

  let { projectCount = 12 }: { projectCount?: number } = $props();

  // Get a selection of featured technologies
  const featuredTech = [
    "svelte",
    "react",
    "nodejs",
    "figma",
    "firebase",
    "tailwindcss",
  ];
  const techStack = items.filter((item) => featuredTech.includes(item.name));
  const totalSkills = items.length;
  const companyCount = companies.length;
</script>

<section class="py-24 px-4 w-full">
  <div class="max-w-7xl mx-auto">
    <h2
      class="text-sm font-bold text-secondary-400 uppercase tracking-widest mb-2 text-center"
    >
      About Me
    </h2>
    <h3 class="text-4xl font-bold text-white mb-12 text-center">
      Beyond the Code
    </h3>

    <div
      class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]"
    >
      <!-- Large Card: Bio -->
      <div
        class="col-span-1 md:col-span-2 row-span-2 bg-neutral-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row gap-6 hover:border-zinc-600 transition-all duration-300 group overflow-hidden relative"
      >
        <!-- <div
          class="absolute bottom-0 left-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity"
        >
          <Icon icon="carbon:cube" class="w-32 h-32 text-white" />
        </div> -->
        <div class="flex-1 flex flex-col z-10">
          <h4 class="text-2xl font-bold text-white mb-4">The Architect</h4>
          <p class="text-zinc-400 leading-relaxed">
            I bridge the gap between form and function through an AI-augmented
            development flow. From automated unit testing to real-time code
            optimization, I leverage an intelligent toolchain to build faster
            and more reliably, ensuring that every pixel is perfect and every
            backend system is bulletproof.
          </p>
        </div>
        <div
          class="w-full md:w-64 h-100 md:h-full bg-zinc-800/50 rounded-xl flex items-center justify-center overflow-hidden border border-zinc-700/50 flex-shrink-0"
        >
          <img
            src="/selfie/selfie-styled.png"
            alt="Marcello Annicchiarico"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Wide Card: Stack -->
      <div
        class="col-span-1 md:col-span-2 bg-neutral-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-900/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
        ></div>
        <h3 class="text-xl font-semibold text-zinc-100 mb-6">Technologies</h3>
        <div class="flex flex-wrap gap-3">
          {#each techStack as tech}
            <a
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-300 text-sm font-mono hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
            >
              {tech.title}
            </a>
          {/each}
          <a
            href="/skills"
            class="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 border border-primary-500 rounded-full text-white text-sm font-mono hover:from-primary-600 hover:to-primary-700 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all cursor-pointer inline-flex items-center gap-1"
          >
            <span>+{totalSkills - techStack.length} more</span>
          </a>
        </div>
      </div>

      <!-- Small Card: Exp -->
      <div
        class="col-span-1 bg-neutral-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform"
      >
        <span
          class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600"
          >10+</span
        >
        <span
          class="text-sm text-zinc-500 mt-2 uppercase tracking-widest font-semibold"
          >Years Exp</span
        >
      </div>

      <!-- Small Card: Products -->
      <div
        class="col-span-1 bg-neutral-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform"
      >
        <span
          class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-secondary-300 to-secondary-600"
          >{projectCount}</span
        >
        <span
          class="text-sm text-zinc-500 mt-2 uppercase tracking-widest font-semibold"
          >Projects</span
        >
      </div>

      <!-- Small Card: Companies -->
      <div
        class="col-span-1 bg-neutral-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform"
      >
        <span
          class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-300 to-primary-600"
          >{companyCount}+</span
        >
        <span
          class="text-sm text-zinc-500 mt-2 uppercase tracking-widest font-semibold"
          >Companies</span
        >
      </div>

      <!-- Small Card: Status -->
      <div
        class="col-span-1 bg-neutral-900 border max-md:hidden border-slate-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform relative overflow-hidden group"
      >
        <div class="absolute top-2 right-2">
          <span class="flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
            ></span>
          </span>
        </div>
        <Icon icon="mdi:check-circle" class="w-12 h-12 text-green-400 mb-2" />
        <span
          class="text-sm text-zinc-400 mt-2 uppercase tracking-widest font-semibold"
          >Available</span
        >
      </div>

      <!-- Small Card: CV Download -->
      <a
        href="/Marcello Annicchiarico.pdf"
        download
        class="col-span-1 md:col-span-2 bg-gradient-to-br from-primary-900/20 to-secondary-900/20 border border-primary-500/30 rounded-2xl p-6 flex flex-row items-center justify-between hover:border-primary-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
        ></div>
        <div class="flex items-center gap-4 z-10">
          <div
            class="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center border border-primary-500/30"
          >
            <Icon icon="mdi:file-document" class="w-6 h-6 text-primary-400" />
          </div>
          <div>
            <h4 class="text-lg font-bold text-white">Download CV</h4>
            <p class="text-sm text-zinc-400">View my full resume</p>
          </div>
        </div>
        <Icon
          icon="mdi:download"
          class="w-6 h-6 text-primary-400 group-hover:translate-y-1 transition-transform z-10"
        />
      </a>
    </div>
  </div>
</section>
