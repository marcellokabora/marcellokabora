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

<section class="mt-5 mb-1 flex flex-col gap-8">
  {#each companies as company (company.name)}
    <div
      class="flex flex-col md:flex-row items-center group"
      data-aos="fade-up"
    >
      <div
        class="w-full md:w-[250px] border-r-0 md:border-r border-gray-300 flex items-center justify-center relative mb-10 md:mb-0"
      >
        <div class="text-center">
          <a href={company.link} target="_black" class="block">
            <img
              src={company.logo}
              alt={company.logo}
              class="w-[150px] h-[100px] object-contain filter"
            />
          </a>
          <div class="text-xl font-bold mt-4">{company.name}</div>
          <div class="text-xl opacity-50 mt-2">{company.slogan}</div>
          <div class="opacity-50 text-sm mt-2">{company.time}</div>
        </div>
      </div>
      <div class="flex-1 md:pl-10 w-full text-center md:text-left">
        <div
          class="flex flex-col md:flex-row justify-between items-center md:items-end relative"
        >
          <div class="text-xl font-bold flex-1 mb-2 md:mb-0 pl-4">
            {company.title}
          </div>
        </div>
        <div class="text-sm opacity-50 pl-4 mt-4 mb-4">
          {company.technologies}
        </div>
        <div class="text-center md:text-left">
          <CompanyDescription {company} />
        </div>
      </div>
    </div>
  {/each}
</section>
