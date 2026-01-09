<script lang="ts">
  import Icon from "@iconify/svelte";

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/marcellokabora/",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: "mdi:github",
      url: "https://github.com/marcellokabora",
      color: "hover:text-primary-400",
    },
    {
      name: "Email",
      icon: "material-symbols:mail",
      url: "mailto:marcellokabora@gmail.com",
      color: "hover:text-secondary-400",
    },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      url: "https://twitter.com/marcellokabora",
      color: "hover:text-sky-400",
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
      class="inline-flex items-center gap-3 px-8 py-4 bg-black/30 hover:bg-black/50 backdrop-blur-xl border border-white/10 hover:border-secondary-500/50 rounded-full text-zinc-400 hover:text-white font-medium text-lg transition-all duration-300 mb-16"
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
          class="group flex flex-col items-center gap-3 p-6 bg-black/30 hover:bg-black/50 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-300 min-w-[140px]"
        >
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300"
          >
            <Icon
              icon={social.icon}
              class="text-3xl text-zinc-400 {social.color} transition-colors duration-300"
            />
          </div>
          <span
            class="text-zinc-400 group-hover:text-white font-medium transition-colors duration-300"
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
