<script>
  import Banner from "$lib/components/Banner.svelte";
  import MetaTags from "$lib/components/MetaTags.svelte";
  import { fly } from "svelte/transition";
  import { companies } from "$lib/data/companies";
  import CompanyDescription from "./CompanyDescription.svelte";
</script>

<MetaTags
  title="Marcello Annicchiarico | Career"
  url="https://marcellokabora.com/career"
/>

<Banner
  cover="/photo/coding-purple.jpg"
  title="Career"
  slogan="I worked for different startup in Berlin, Barcelona and Italy"
/>

<section
  class="max-w-6xl mx-auto px-4 py-12"
  in:fly={{ y: 100, duration: 1000, delay: 100 }}
>
  <div class="relative">
    <!-- Timeline Line connecting all cards -->
    <div
      class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary-400 via-primary-500 to-secondary-400 transform -translate-x-1/2 z-0"
    ></div>

    <div class="">
      {#each companies as company, index (company.name)}
        <div class="relative h-16 my-8">
          <div
            class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-secondary-500 to-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20 whitespace-nowrap"
          >
            {company.time.includes(" - ")
              ? company.time.split(" - ")[1]
              : company.time}
          </div>

          <!-- Timeline Dot -->
          <div
            class="absolute left-1/2 -bottom-8 transform -translate-x-1/2 translate-y-6 w-4 h-4 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-full border-4 border-neutral-900 shadow-lg z-20"
          >
            <div
              class="absolute inset-0 bg-secondary-500 rounded-full animate-ping opacity-30"
            ></div>
          </div>
        </div>

        <div class="relative group">
          <div
            class="bg-neutral-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-secondary-500/10 transition-all duration-300 overflow-hidden border border-neutral-800 hover:border-secondary-500/50 relative z-10"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- Company Info Section -->
              <div
                class="lg:w-80 bg-gradient-to-br from-neutral-900 to-neutral-950 p-12 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-neutral-800"
              >
                <div class="space-y-4">
                  <a
                    href={company.link}
                    target="_blank"
                    class="block group/logo transition-transform duration-300 hover:scale-105"
                  >
                    <div
                      class="bg-neutral-800/50 p-6 rounded-xl shadow-sm group-hover/logo:shadow-md group-hover/logo:shadow-secondary-500/20 transition-all duration-300 border border-neutral-700 group-hover/logo:border-secondary-500/50"
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        class="w-32 h-20 object-contain mx-auto"
                      />
                    </div>
                  </a>

                  <div class="space-y-2">
                    <h3 class="text-2xl font-bold text-white">
                      {company.name}
                    </h3>
                    <p class="text-lg text-neutral-400 font-medium">
                      {company.slogan}
                    </p>
                    <div
                      class="inline-flex items-center px-3 py-1 rounded-full bg-secondary-500/10 text-secondary-400 text-sm font-medium border border-secondary-500/20"
                    >
                      {company.time}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Job Details Section -->
              <div class="flex-1 p-12">
                <div class="space-y-6">
                  <!-- Job Title -->
                  <div class="border-b border-neutral-800 pb-4">
                    <h4 class="text-2xl font-bold text-white mb-2">
                      {company.title}
                    </h4>
                  </div>
                  <!-- Technologies -->
                  <div class="space-y-3">
                    <h5
                      class="text-sm font-semibold text-neutral-500 uppercase tracking-wide"
                    >
                      Technologies Used
                    </h5>
                    <div class="flex flex-wrap gap-2">
                      {#each company.technologies.split(", ") as tech}
                        <span
                          class="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm font-medium border border-neutral-700 hover:border-secondary-500/50 hover:bg-neutral-800/80 transition-colors"
                        >
                          {tech.trim()}
                        </span>
                      {/each}
                    </div>
                  </div>
                  <!-- Description -->
                  <div class="space-y-3">
                    <h5
                      class="text-sm font-semibold text-neutral-500 uppercase tracking-wide"
                    >
                      Experience
                    </h5>
                    <div class="prose prose-invert prose-neutral max-w-none">
                      <CompanyDescription {company} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
