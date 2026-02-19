<script lang="ts">
  import Icon from "@iconify/svelte";
  import PageHero from "$lib/components/PageHero.svelte";
  import MetaTags from "$lib/components/MetaTags.svelte";
  import { fly } from "svelte/transition";

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/marcellokabora",
      icon: "mdi:linkedin",
      color: "from-blue-500 to-blue-600",
      description: "Connect with me professionally",
    },
    {
      name: "GitHub",
      url: "https://github.com/marcellokabora",
      icon: "mdi:github",
      color: "from-primary-500 to-primary-600",
      description: "Check out my repositories",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/marcellokabora",
      icon: "mdi:twitter",
      color: "from-secondary-500 to-secondary-600",
      description: "Follow my updates",
    },
  ];
</script>

<MetaTags
  title="Marcello Annicchiarico | Contacts"
  url="https://marcellokabora.com/contact"
/>

<PageHero
  title="Contacts"
  slogan="Let's connect and explore opportunities"
  backgroundImage="/photo/coding-multi.jpg"
  badge="Get in Touch"
  stats={[
    { value: "24/7", label: "Available", icon: "material-symbols:schedule" },
    { value: "< 24h", label: "Response Time", icon: "material-symbols:speed" },
  ]}
/>

<div
  class="pb-16 px-4 max-w-7xl mx-auto"
  in:fly={{ y: 100, duration: 1000, delay: 100 }}
>
  <!-- Social Media Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
    {#each socialLinks as social}
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl backdrop-blur-sm hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
      >
        <div class="flex flex-col items-center text-center space-y-4">
          <!-- Icon with Gradient Background -->
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r {social.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
            ></div>
            <div
              class="relative bg-gradient-to-r {social.color} p-4 rounded-2xl"
            >
              <Icon icon={social.icon} class="w-12 h-12 text-white" />
            </div>
          </div>

          <!-- Text Content -->
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">{social.name}</h3>
            <p class="text-zinc-400 text-sm">{social.description}</p>
          </div>

          <!-- Hover Arrow -->
          <div class="opacity-0 group-hover:opacity-100 transition-opacity">
            <Icon icon="mdi:arrow-right" class="w-6 h-6 text-primary-400" />
          </div>
        </div>
      </a>
    {/each}
  </div>

  <!-- QR Codes Section (Mobile Only) -->
  <div class="md:hidden my-16">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold mb-4 text-white">Quick Connect</h2>
      <p class="text-zinc-400">Scan these QR codes to connect with me</p>
    </div>

    <div class="space-y-6">
      <!-- LinkedIn QR Code (Featured) -->
      <div
        class="bg-zinc-900/50 border-2 border-primary-500/50 rounded-2xl p-6 backdrop-blur-sm"
      >
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <Icon icon="mdi:linkedin" class="w-6 h-6 text-blue-500" />
            <h3 class="text-xl font-bold text-white">LinkedIn Profile</h3>
          </div>
          <div class="bg-white p-4 rounded-xl">
            <img
              src="/qrcode/linkedin.png"
              alt="LinkedIn QR Code"
              class="w-48 h-48 mx-auto"
            />
          </div>
          <p class="text-zinc-400 text-sm">Scan to connect on LinkedIn</p>
        </div>
      </div>

      <!-- Portfolio & 7echno QR Codes -->
      <div class="grid grid-cols-2 gap-4">
        <div
          class="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 backdrop-blur-sm"
        >
          <div class="flex flex-col items-center text-center space-y-3">
            <h3 class="text-sm font-bold text-white">Portfolio</h3>
            <div class="bg-white p-3 rounded-lg">
              <img
                src="/qrcode/portfolio.png"
                alt="Portfolio QR Code"
                class="w-32 h-32"
              />
            </div>
            <p class="text-zinc-400 text-xs">View my work</p>
          </div>
        </div>

        <div
          class="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 backdrop-blur-sm"
        >
          <div class="flex flex-col items-center text-center space-y-3">
            <h3 class="text-sm font-bold text-white">7echno</h3>
            <div class="bg-white p-3 rounded-lg">
              <img
                src="/qrcode/7echno.png"
                alt="7echno Project QR Code"
                class="w-32 h-32"
              />
            </div>
            <p class="text-zinc-400 text-xs">Check the project</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Curriculum Section -->
  <div class="mt-16">
    <div class="text-center mb-8">
      <h2 class="text-3xl md:text-5xl font-bold mb-4 text-white">
        My Curriculum
      </h2>
      <p class="text-zinc-400 text-lg">
        View or download my complete professional experience
      </p>
    </div>

    <!-- CV Card with iframe -->
    <div
      class="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <div
        class="p-4 border-b border-zinc-800 flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <Icon icon="mdi:file-document" class="w-6 h-6 text-primary-400" />
          <span class="text-white font-medium">Curriculum Vitae</span>
        </div>
        <a
          href="/Marcello Annicchiarico.pdf"
          download
          class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
        >
          <Icon icon="mdi:download" class="w-5 h-5" />
          Download PDF
        </a>
      </div>

      <div class="relative bg-zinc-800/50">
        <iframe
          src="/Marcello Annicchiarico.pdf"
          title="Curriculum Vitae"
          class="w-full h-[800px] md:h-[1000px] border-0"
        ></iframe>
      </div>
    </div>
  </div>
</div>
