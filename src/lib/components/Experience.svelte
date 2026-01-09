<script>
  import { companies } from "$lib/data/companies";
  import Icon from "@iconify/svelte";

  // Get the last 5 companies (most recent)
  const recentCompanies = companies.slice(0, 5);

  // Transform companies data to match the experience format
  let experience = recentCompanies.map((company) => {
    // Extract year from time string
    const yearMatch = company.time.match(/(\d{4})/);
    const year = yearMatch ? yearMatch[1] : "";

    return {
      year: year,
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
          class="relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 group"
        >
          <!-- Year Bubble -->
          <div
            class="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 transform -translate-x-2 md:-translate-x-2 mt-1.5 group-hover:border-secondary-400 group-hover:bg-secondary-900 transition-colors z-10"
          ></div>

          <!-- Content -->
          <div
            class="ml-20 md:ml-0 md:w-1/2 {i % 2 === 0
              ? 'md:pr-12 md:text-right'
              : 'md:pl-12 md:col-start-2 md:ml-auto'}"
          >
            <span
              class="text-4xl font-bold text-zinc-700 group-hover:text-zinc-500 transition-colors"
              >{job.year}</span
            >
            <h3 class="text-xl font-bold text-white mt-2">{job.role}</h3>
            <p class="text-secondary-400 text-sm mb-2">{job.company}</p>
            <p class="text-zinc-400 text-sm leading-relaxed">{job.desc}</p>
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
