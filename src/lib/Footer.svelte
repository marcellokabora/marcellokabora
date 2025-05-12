<script>
  import Icon from "@iconify/svelte";

  const menus = [
    {
      name: "Linkedin",
      icon: "mdi:linkedin",
      link: "//linkedin.com/in/marcellokabora/",
    },
    {
      name: "Github",
      icon: "mdi:github",
      link: "//github.com/marcellokabora",
    },
    {
      name: "Stackoverflow",
      icon: "mdi:stackoverflow",
      link: "//stackoverflow.com/users/1359426/marcello-kabora?tab=profile",
    },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      link: "//twitter.com/marcellokabora",
    },
    {
      name: "Curriculum",
      icon: "material-symbols:account-box",
      link: "//marcellokabora.com/curriculum",
    },
  ];
</script>

<footer
  class="bg-[#1b1b1b] flex flex-col md:flex-row justify-between items-center text-white"
>
  <div class="flex flex-col md:flex-row items-center p-10">
    <span class="font-bold opacity-50">© Marcello Kabora • 2025</span>
  </div>
  <div class="flex p-10 -mt-10 md:mt-0">
    {#each menus as menu (menu.name)}
      <a
        class="w-[35px] h-[35px] flex items-center justify-center bg-white/50 text-black mx-2.5 rounded-full cursor-pointer transition-all duration-500 hover:bg-white"
        href={menu.link}
        target="_blank"
        title={menu.name}
      >
        <Icon icon={menu.icon} />
      </a>
    {/each}
  </div>
</footer>
