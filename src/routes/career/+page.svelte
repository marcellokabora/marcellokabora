<script>
  import Banner from "$lib/Banner.svelte";
  import { description } from "$lib/mocks";
  const companies = [
    // {
    //   logo: "/logo/7echno.png",
    //   name: "7echno",
    //   slogan: "Music Experience",
    //   title: "Founder - Partime",
    //   time: "From May 2024",
    //   link: "//7echno.com",
    // },
    {
      logo: "/company/evaglobal.png",
      name: "Eva Global",
      slogan: "eMobility",
      title: "Full Time - Frontend Developer",
      time: "Oct 2022 - May 2024",
      link: "//linkedin.com/company/evaglobal",
    },
    {
      logo: "/logo/linus.png",
      name: "Linus",
      slogan: "Digital Finance",
      title: "Full Time - Frontend Developer",
      time: "Sep 2021 - Aug 2022",
      link: "//linkedin.com/company/linus-digital-finance",
    },
    {
      logo: "/logo/buildingminds.png",
      name: "Buildingminds",
      slogan: "Equipment Tool",
      title: "Full Time - Frontend Developer",
      time: "Jan 2020 - Sep 2021",
      link: "//linkedin.com/company/buildingminds",
    },
    {
      logo: "/logo/yukkalab.png",
      name: "Yukkalab",
      slogan: "News analytics",
      title: "Full Time - Frontend Developer",
      time: "Jun 2017 - Nov 2019",
    },
    {
      logo: "/logo/smava.png",
      name: "Smava",
      slogan: "Credit Online",
      title: "Full Time - Frontend Developer",
      time: "Feb 2016 - Feb 2017",
    },
    {
      logo: "/logo/tanglang.png",
      name: "Tang Lang",
      slogan: "Bus Travel",
      title: "Part Time - Fullstack Developer",
      time: "Apr 2014 - Dec 2015",
    },
    {
      logo: "/logo/maggiolino.png",
      name: "Maggiolino",
      slogan: "Books Online",
      title: "Part Time - Fullstack Developer",
      time: "Aug 2013 - Jan 2015",
    },
    {
      logo: "/logo/petdog.png",
      name: "Annunci Animali",
      slogan: "Find your Pet",
      title: "Part Time - Frontend Developer",
      time: "Mar 2013 - Oct 2014",
    },
    {
      logo: "/logo/airesis.png",
      name: "Airesis",
      slogan: "Edemocracy",
      title: "Part Time - UI Designer",
      time: "Apr 2011 - Apr 2012",
    },
    {
      logo: "/logo/shipchandler.png",
      name: "Shipchandler",
      slogan: "Metallurgy",
      title: "Full Time - UI Designer",
      time: "Jan 2009 - Feb 2010",
    },
  ];
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

<section>
  {#each companies as company (company.name)}
    <div class="item" data-aos="fade-up">
      <div class="logo">
        <div>
          <a href={company.link} target="_black">
            <img src={company.logo} alt={company.logo} />
          </a>
          <div class="company">{company.name}</div>
          <div class="slogan">{company.slogan}</div>
          <div class="dot">·</div>
        </div>
      </div>
      <div class="body">
        <div class="title">
          <div class="name">{company.title}</div>
          <div class="time">{company.time}</div>
        </div>
        {#if company.name === "Eva Global"}
          <p>
            <a href="//evaglobal.com" target="_blank">Eva Global</a> helps customers
            manage their electric vehicle charger infrastructure and provides a superior
            customer experience to EV drivers.
          </p>
          <p>
            As a senior frontend Developer, I was responsible for building the
            UI library using Angular Material and building multiple features for
            the <a href="/project/monitoring/">Monitoring</a>
            project . I also worked as a UX designer providing multiple designs for
            the new features like the
            <a href="/project/heatmap/">Heatmap</a>.
          </p>
          <p>
            <b>Technologies</b>: Angular, Material, NX, GraphQL, Storybook,
            Gitlab, Jira, Figma
          </p>
        {:else if company.name === "7echno"}
          <p>
            <a href="//7echno.com" target="_blank">7echno</a> is a revolutionary
            social hub where friends connect through music and technology. It offers
            collaborative DJing, interactive visuals, and remote participation in
            live music streams, plus recording and sharing capabilities. Social games
            include music trivia, rhythm games, production challenges, and karaoke.
            A museum section features interactive exhibits, workshops, and artist
            showcases. Finally, a themed bar and restaurant offers music-inspired
            food, drinks, and live performances, creating an immersive, creative
            community for all music lovers.
          </p>
          <p>
            <b>Technologies</b>: Svelte, Firebase, Vercel, Github, Figma
          </p>
        {:else if company.name === "Linus"}
          <p>
            <a href="//linus-finance.com" target="_blank">LINUS Finance</a> is one
            of the leaders in Real Estate in Germany and wants to combine technology
            and expertise to give the co-investors access to high-quality investments
            whilst providing a best-in-class investing experience through our digital
            platform.
          </p>
          <p>
            I started work with the core of the team rebuilding the new UI and
            working on the new <a
              href="https://marcellokabora.com/project/linus">registration</a
            >, my next task was to build the template of the main
            <a href="//marcellokabora.com/project/linus-product">product</a>
            using Builder.io and React.js. and after I had rebuilt several landing
            pages for the
            <a href="//marcellokabora.com/project/linus-marketing">marketing</a>
            team.
          </p>
          <p>
            <b>Technologies</b>: React, Vue, GraphQL, Docker, Builder, Github,
            Jira, Styled, Figma
          </p>
        {:else if company.name === "Buildingminds"}
          <p>
            <a href="//buildingminds.com" target="_blank">BuildingMinds</a> solution
            provides an unprecedented scope of relevant business data, organized
            in a single source of truth, it drives advanced decision making on every
            level from a single building to the entire portfolio.
          </p>
          <p>
            The application is built in Angular and Microsoft services, I worked
            on the implementation of many features moving around different
            teams, focusing on different <a
              href="//marcellokabora.com/project/uicomponents">components</a
            >
            and the creation of the
            <a href="//marcellokabora.com/project/appmanager">appmanagement</a>.
          </p>
          <p>
            <b>Technologies</b>: Angular, Redux, Bootstrap, Azure, Abstract,
            Material, Firebase, Jest
          </p>
        {:else if company.name === "Yukkalab"}
          <p>
            <a href="//yukkalab.com" target="_blank">YUKKALab</a> is an
            application for desktop and mobile built-in Angular that runs on top
            of an algorithm that shows the sentiment of the news and displays
            different kinds of data visualization like the
            <a href="//marcellokabora.com/project/chartmap">Chartmap</a>, the
            <a href="//marcellokabora.com/project/network">Network</a>, or the
            <a href="//marcellokabora.com/project/signals">Signals</a>.
          </p>
          <p>
            These technologies often highlight the market mood before the stock
            exchanges follow a few weeks later. As a result, you receive
            concrete recommendations for losses due to loss-limiting signals and
            an investment rate.
          </p>
          <p>
            <b>Technologies</b>: Angular, Material, MySql, Jira, D3, Highcharts,
            Github, Firebase
          </p>
        {:else if company.name === "Smava"}
          <p>
            <a href="https://www.smava.de/" target="_blank">Smava</a> provides
            the best solution in Germany to find the right credit online with
            more than 50 bank accounts. My position as Frontend Developer was
            fundamental for the creation of the new
            <a href="https://marcellokabora.com/project/smava-website"
              >homepage</a
            >.
          </p>
          <p>
            My team was responsible for the conversion from the design to web
            application, my focus was mostly on HTML, CSS, and JS. I worked on
            all the animation, events in jquery and for the mail campaign
            building different templates for the marketing area.
          </p>
          <p><b>Technologies</b>: HTML, CSS, Javascript, Foundation, Github</p>
        {:else if company.name === "Tang Lang"}
          <p>
            <a href="http://www.tanglangviaggi.it/" target="_blank"
              >Tang Lang Viaggi</a
            > provide the best travel in bus in all Europes events, like Oktoberfest
            or IAA and others 50 events in all Europe.
          </p>
          <p>
            My job as Full Stack Developer was building 6 website for different
            event in Europe with all similar design but with different colors
            and images. The form for sell the travel provide several statment
            like the age or number of customers, the date and the time of the
            travel, the position of the pickup and the payment offcourse.
          </p>
          <p>
            Here the list of all the website i builded for this company : <a
              href="https://marcellokabora.com/project/oktoberfest"
              >Oktoberfest</a
            >, <a href="https://marcellokabora.com/project/iaa">IAA</a>,
            <a href="https://marcellokabora.com/project/christmas"
              >Christmas Markets</a
            >,
            <a href="https://marcellokabora.com/project/loretdemar"
              >Loret De Mar</a
            >. I worked in Italy for the first 8 Months and the after 4 Months
            in remote from Berlin after i decided to find a Full Time employment
            job.
          </p>
          <p><b>Technologies</b>: Jquery, CSS, Javascript, MySql</p>
        {:else if company.name === "Maggiolino"}
          <p>
            <a href="http://libreriamaggiolino.com/" target="_blank"
              >Maggiolino</a
            > is a ecommerce website where anyone can find and buy specific books
            online. My position in the company was Full Stack Developer and my job
            was build the new website from scratch using the latest technology and
            design available.
          </p>
          <p>
            For the frontend i use Bootstrap and the layout of google images for
            show the book without disable the scroll list. For the backend i use
            pure php connected with a MySql database, all the animation are in
            Jquery and the payment is connected with paypal.
          </p>
          <p>
            I worked with this company for 16 months updating the database and
            improving the design every month, before the company decide to close
            the sell online.
          </p>
          <p><b>Technologies</b>: Jquery, Bootstrap, Javascript, MySql</p>
        {:else if company.name === "Annunci Animali"}
          <p>
            <a href="https://www.annuncianimali.it/" target="_blank"
              >Annunci Animali</a
            > is the bigger and famous website in Italy for sell or buy your animal,
            most of all dogs and cats but also others animals. My position inside
            the company was as Frontend Designer where i designed the homepage and
            most of the landing page of the website.
          </p>
          <p>
            I worked for this company for more than one year and i also work on
            the advertising department building the flyer and the business card.
          </p>
          <p><b>Technologies</b>: Jquery, Javascript, MySql</p>
        {:else if company.name === "Airesis"}
          <p>
            <a href="https://marcellokabora.com/project/airesis">Airesis</a> is a
            open source democracy platform where anyone can open a discussion and
            involve users to vote and discuss about it. My position inside the company
            was UI/UX Designer and i worked with them for 6 months. Currently my
            design is already part of the project and i hope the platform will be
            popular and help people around the world.
          </p>
          <p>
            I designed the menu interface and the homepage of the discussions
            testing different layout and colors trying to find the right way to
            show all the information necessary and focus on the deadline.
          </p>
          <p><b>Technologies</b>: HTMl, CSS, Jquery</p>
        {:else if company.name === "Shipchandler"}
          <p>
            Thomas Shipchandler, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p><b>Technologies</b>: HTMl, CSS</p>
        {/if}
      </div>
    </div>
  {/each}
</section>

<style>
  section {
    margin-top: 20px;
    margin-bottom: 4px;
    .item {
      display: flex;
      align-items: center;
      .logo {
        margin-right: 40px;
        text-align: center;
        width: 250px;
        height: 380px;
        border-right: 1px solid #d8d8d8;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        position: relative;
        img {
          width: 200px;
          height: 150px;
          object-fit: contain;
        }
        .company {
          font-size: 1.2em;
          font-weight: bold;
        }
        .slogan {
          font-size: 1.2em;
          opacity: 0.5;
        }
        .dot {
          position: absolute;
          bottom: -18px;
          right: -2px;
          color: #d6d6d6;
          zoom: 3;
        }
      }
    }
  }
  .body {
    flex: 1;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: end;
      border-bottom: 1px solid #d8d8d8;
      padding-bottom: 10px;
      .name {
        font-size: 1.2em;
        font-weight: bold;
        flex: 1;
      }
      .time {
        opacity: 0.5;
      }
    }
  }
  @media (max-width: 1000px) {
    section {
      margin-top: 40px;
      .item {
        margin: 20px 0px;
        display: inherit;
        .logo {
          border: none;
          height: auto;
          width: auto;
          text-align: left;
          margin: 0;
          display: inline;
        }
      }
    }
    .body {
      margin-top: 20px;
      margin-bottom: 80px;
    }
    .dot {
      display: none;
    }
  }
</style>
