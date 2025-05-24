<script>
  import Banner from "$lib/Banner.svelte";
  import { description } from "$lib/mocks";
  import { companies } from "./companies";
  import CompanyDescription from "./CompanyDescription.svelte";
</script>

<svelte:head>
  <title>Marcello Kabora | Career</title>
  <meta name="description" content={description} />
  <meta name="thumbnail" content="/gallery/styling.jpg" />
  <meta property="og:image" content="/gallery/styling.jpg" />
</svelte:head>

<Banner
  cover="/gallery/styling.jpg"
  title="Career"
  slogan="I worked for different startup in Berlin and Italy"
/>

<section class="max-w-6xl mx-auto px-4 py-12">
  <div class="space-y-16">
    {#each companies as company (company.name)}
      <div
        class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        data-aos="fade-up"
      >
        <div class="flex flex-col lg:flex-row">
          <!-- Company Info Section -->
          <div
            class="lg:w-80 bg-gradient-to-br from-white to-gray-50 p-8 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-gray-100"
          >
            <div class="space-y-4">
              <a
                href={company.link}
                target="_blank"
                class="block group transition-transform duration-300 hover:scale-105"
              >
                <div
                  class="bg-gray-50 p-6 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    class="w-32 h-20 object-contain mx-auto"
                  />
                </div>
              </a>

              <div class="space-y-2">
                <h3 class="text-2xl font-bold text-gray-900">
                  {company.name}
                </h3>
                <p class="text-lg text-gray-600 font-medium">
                  {company.slogan}
                </p>
                <div
                  class="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                >
                  {company.time}
                </div>
              </div>
            </div>
          </div>

          <!-- Job Details Section -->
          <div class="flex-1 p-8">
            <div class="space-y-6">
              <!-- Job Title -->
              <div class="border-b border-gray-100 pb-4">
                <h4 class="text-2xl font-bold text-gray-900 mb-2">
                  {company.title}
                </h4>
              </div>
              <!-- Technologies -->
              <div class="space-y-3">
                <h5
                  class="text-sm font-semibold text-gray-500 uppercase tracking-wide"
                >
                  Technologies Used
                </h5>
                <div class="flex flex-wrap gap-2">
                  {#each company.technologies.split(", ") as tech}
                    <span
                      class="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium"
                    >
                      {tech.trim()}
                    </span>
                  {/each}
                </div>
              </div>
              <!-- Description -->
              <div class="space-y-3">
                <h5
                  class="text-sm font-semibold text-gray-500 uppercase tracking-wide"
                >
                  Experience
                </h5>
                <div class="prose prose-gray max-w-none">
                  <CompanyDescription {company} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
