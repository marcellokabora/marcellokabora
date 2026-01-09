<script lang="ts">
  import Icon from "@iconify/svelte";

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/marcellokabora/",
      color: "hover:text-secondary-400",
    },
    {
      name: "GitHub",
      icon: "mdi:github",
      url: "https://github.com/marcellokabora",
      color: "hover:text-primary-400",
    },
    // {
    //   name: "Email",
    //   icon: "material-symbols:mail",
    //   url: "mailto:marcellokabora@gmail.com",
    //   color: "hover:text-secondary-400",
    // },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      url: "https://twitter.com/marcellokabora",
      color: "hover:text-secondary-400",
    },
  ];
</script>

<section
  id="connect"
  class="py-24 px-4 w-full bg-neutral-950 border-t border-white/5"
>
  <div class="max-w-4xl mx-auto text-center">
    <h2
      class="text-sm font-bold text-secondary-400 uppercase tracking-widest mb-4"
    >
      Get In Touch
    </h2>
    <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">
      Let's Build Something
    </h3>
    <p class="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
      I'm always open to discussing new projects, creative ideas, or
      opportunities to be part of your vision.
    </p>

    <!-- Primary Email CTA -->
    <a
      href="mailto:marcellokabora@gmail.com"
      class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300 mb-16 transform hover:scale-105"
    >
      <Icon icon="material-symbols:mail" class="text-2xl" />
      <span>Send me an Email</span>
    </a>

    <!-- Social Links -->
    <div class="flex flex-wrap justify-center gap-6 mt-12">
      {#each socialLinks as social}
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-3 p-6 bg-neutral-900/80 backdrop-blur-sm hover:bg-neutral-800 border-2 border-zinc-700/70 hover:border-secondary-500 rounded-2xl transition-all duration-300 min-w-[140px] shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transform hover:scale-105"
        >
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800 group-hover:bg-secondary-500/20 transition-all duration-300 border border-zinc-700 group-hover:border-secondary-400"
          >
            <Icon
              icon={social.icon}
              class="text-3xl text-zinc-400 {social.color} transition-colors duration-300"
            />
          </div>
          <span
            class="text-zinc-300 group-hover:text-white font-medium transition-colors duration-300"
          >
            {social.name}
          </span>
        </a>
      {/each}
    </div>

    <!-- Optional: Additional Info -->
    <div class="mt-16 pt-12 border-t border-white/5">
      <p class="text-zinc-500 text-sm">
        Based in Berlin DE • Available for remote opportunities worldwide
      </p>
    </div>
  </div>
</section>
