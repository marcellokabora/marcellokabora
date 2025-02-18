<script>
  const menus = [
    {
      name: "Linkedin",
      icon: "/icon/linkedin.svg",
      link: "//linkedin.com/in/marcellokabora/",
    },
    {
      name: "Github",
      icon: "/icon/github.svg",
      link: "//github.com/marcellokabora",
    },
    {
      name: "Stackoverflow",
      icon: "/icon/stackoverflow.svg",
      link: "//stackoverflow.com/users/1359426/marcello-kabora?tab=profile",
    },
    {
      name: "Twitter",
      icon: "/icon/twitter.svg",
      link: "//twitter.com/marcellokabora",
    },
    {
      name: "Curriculum",
      icon: "/icon/doc.svg",
      link: "//marcellokabora.com/curriculum",
    },
  ];
</script>

<footer>
  <div class="priva">
    <span class="tito">© Marcello Kabora • 2025</span>
  </div>
  <div class="icons">
    {#each menus as menu}
      <a class="icon" href={menu.link} target="_blank" title={menu.name}>
        <img src={menu.icon} alt={menu.icon} />
      </a>
    {/each}
  </div>
</footer>

<style>
  footer {
    background-color: #1b1b1b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-top: 4em;
    .priva {
      display: flex;
      align-items: center;
      padding: 40px;
      .tito {
        font-weight: bold;
        opacity: 0.5;
      }
    }
    .icons {
      display: flex;
      padding: 40px;
      a {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.5);
        color: black;
        margin: 0px 10px;
        border-radius: 100px;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
          background-color: rgba(255, 255, 255, 1);
        }
        img {
          width: 13px;
        }
      }
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      .priva {
        flex-direction: column;
      }
      .icons {
        margin-top: -40px;
      }
    }
  }
</style>
