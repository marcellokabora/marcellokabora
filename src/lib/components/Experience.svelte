<script>
  import { companies } from "$lib/data/companies";
  import Icon from "@iconify/svelte";

  // Get the last 5 companies (most recent)
  const recentCompanies = companies.slice(0, 6);

  // Transform companies data to match the experience format
  let experience = recentCompanies.map((company) => {
    return {
      timeRange: company.time.replace(/From /g, ""),
      role: company.title,
      company: company.name,
      desc: company.slogan,
      logo: company.logo,
      technologies: company.technologies,
      link: company.link,
    };
  });
</script>

<section class="py-24 px-4 w-full">
  <div class="max-w-4xl mx-auto">
    <h2
      class="text-sm font-bold text-secondary-400 uppercase tracking-widest mb-2 text-center"
    >
      Career Journey
    </h2>
    <h3 class="text-4xl font-bold text-white mb-12 text-center">
      Professional Experience
    </h3>

    <div class="relative">
      <!-- Vertical Line -->
      <div
        class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2"
      ></div>

      {#each experience as job, i}
        <div
          class="relative flex flex-col md:flex-row gap-8 mb-10 last:mb-0 group"
        >
          <!-- Logo Bubble (replaces year bubble) -->
          <div
            class="absolute left-8 md:left-1/2 w-16 h-16 rounded-full bg-neutral-900 border-2 border-zinc-700 transform -translate-x-8 md:-translate-x-8 group-hover:border-secondary-400 transition-all duration-300 z-10 p-2 flex items-center justify-center overflow-hidden shadow-xl"
          >
            {#if job.logo}
              <img
                src={job.logo}
                alt={job.company}
                class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            {:else}
              <Icon
                icon="mdi:domain"
                class="w-8 h-8 text-zinc-600 group-hover:text-secondary-400 transition-colors"
              />
            {/if}
          </div>

          <!-- Content -->
          <div
            class="ml-24 md:ml-0 md:w-1/2 {i % 2 === 0
              ? 'md:pr-16 md:text-right'
              : 'md:pl-16 md:col-start-2 md:ml-auto'}"
          >
            <div
              class="bg-neutral-900/80 backdrop-blur-sm border-2 border-zinc-700/70 rounded-2xl p-6 group-hover:border-secondary-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-300 shadow-2xl"
            >
              <span
                class="inline-block text-xs font-semibold text-secondary-400 bg-secondary-400/10 px-3 py-1 rounded-full mb-3 border border-secondary-400/20"
                >{job.timeRange}</span
              >
              <h3 class="text-2xl font-bold text-white mb-2">
                {job.company}
              </h3>
              <p class="text-zinc-200 text-base font-medium mb-3">
                {job.role}
              </p>
              <p class="text-zinc-400 text-sm leading-relaxed">{job.desc}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- View All Button -->
    <div class="flex justify-center mt-16">
      <a
        href="/career"
        class="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-secondary-400 rounded-full text-white transition-all duration-300"
      >
        <Icon icon="mdi:briefcase" class="w-5 h-5 text-secondary-400" />
        <span class="font-medium">Explore All {companies.length} Companies</span
        >
        <Icon
          icon="mdi:arrow-right"
          class="w-5 h-5 group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>
  </div>
</section>
