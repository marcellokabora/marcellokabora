<script>
  import Banner from "$lib/Banner.svelte";
  const companies = [
    {
      logo: "/company/evaglobal.jpg",
      name: "Eva Global",
      slogan: "eMobility",
      title: "Full Time - Frontend Engineer",
      time: "From Oct 2022",
      link: "//linkedin.com/company/evaglobal",
    },
    {
      logo: "/logo/linus.png",
      name: "Linus",
      slogan: "Digital Finance",
      title: "Full Time - Frontend Engineer",
      time: "Sep 2021 - Aug 2022",
      link: "//linkedin.com/company/linus-digital-finance",
    },
    {
      logo: "/logo/buildingminds.png",
      name: "Buildingminds",
      slogan: "Real estate management",
      title: "Full Time - Frontend Developer",
      time: "Jan 2020 - Sep 2021",
      link: "//linkedin.com/company/buildingminds",
    },
    {
      logo: "/logo/yukkalab.png",
      name: "Yukkalab",
      slogan: "Real time news analytics",
      title: "Full Time - Frontend Developer",
      time: "Jun 2017 - Nov 2019",
    },
    // {
    //   logo: '/logo/mineko.png',
    //   company: 'Mineko',
    //   slogan: 'Nebenkosten­abrechnung',
    //   title: 'Full Time - Frontend Developer',
    //   time: 'Jan 2017 - Jun 2017',
    //   template: 'mineko'
    // },
    {
      logo: "/logo/smava.png",
      name: "Smava",
      slogan: "Credit Online",
      title: "Full Time - Frontend Developer",
      time: "Feb 2016 - Nov 2016",
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
</svelte:head>

<Banner
  cover="/gallery/styling.jpg"
  title="Career"
  slogan="I worked for different startup in Berlin and Italy"
/>

<section>
  {#each companies as company}
    <div class="item" data-aos="fade-up" data-aos-duration="1000">
      <div class="logo">
        <div>
          <a href={company.link} target="_black">
            <img src={company.logo} alt={company.logo} />
          </a>
          <div class="company">{company.name}</div>
          <div class="slogan">{company.slogan}</div>
          <div class="time">{company.time}</div>
          <div class="dot">·</div>
        </div>
      </div>
      <div class="body">
        <div class="title">{company.title}</div>
        {#if company.name === "Eva Global"}
          <p>
            <a href="//evaglobal.com" target="_blank">Eva Global</a> help customers
            to manage their electric vehicle charger infrastructure and provide a
            superior customer experience to EV drivers. Our services create new value
            and opportunities in eMobility business.
          </p>
          <p>
            Our end-to-end infrastructure management, monitoring, service desk
            and support services promises to protect the need of the consumer
            and ensure optimum uptime of the infrastructure they rely on.
          </p>
          <p>
            Since 2017, EVA has been playing a key role in shaping the future of
            electromobility. We already support the transformation in over 30
            countries and create confidence in a new technology among drivers.
            And the journey continues.
          </p>
          <p>
            <b>Technologies</b>: Angular, NX, Jira, Gitlab, AWS, GraphQL, Figma,
            Material, Chart, Potsman, Storybook
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
            <a href="//marcellokabora.com/project/linus-product" target="_blank"
              >product</a
            >
            using Builder.io and React.js. and after I had rebuilt several landing
            pages for the
            <a
              href="//marcellokabora.com/project/linus-marketing"
              target="_blank">marketing</a
            > team.
          </p>
          <p>
            <b>Technologies</b>: React, Next, Vue, GraphQL, Docker, Builder,
            Github, Jira, Styled, Figma
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
            By measuring, the sentiment in the markets and have developed
            financial models based on them. These technologies often highlight
            the market mood before the stock exchanges follow a few weeks later.
            As a result, you receive concrete recommendations for losses due to
            loss-limiting signals and an investment rate. The latter allows you
            to decide individually in which market you are investing.
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
            >. My team was responsible for the conversion from the design to web
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
  }
  section .item {
    display: flex;
    align-items: center;
  }
  section .item .logo {
    margin-right: 40px;
    text-align: center;
    width: 250px;
    height: 380px;
    border-right: 1px solid #d8d8d8;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    position: relative;
  }
  section .item .logo img {
    max-width: 200px;
    max-height: 100px;
    object-fit: contain;
    margin-bottom: 20px;
  }
  section .item .logo .company {
    font-size: 25px;
    font-weight: bold;
  }
  section .item .logo .slogan {
    font-style: 18px;
    opacity: 0.5;
  }
  section .item .logo .time {
    font-style: 16px;
    opacity: 0.3;
  }
  section .item .logo .dot {
    position: absolute;
    bottom: -18px;
    right: -2px;
    color: #d6d6d6;
    zoom: 3;
  }
  .body {
    flex: 1;
  }
  .body .title {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #d8d8d8;
    padding-bottom: 10px;
  }
  .body p {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    section {
      margin-top: 40px;
    }
    section .item {
      margin: 20px 0px;
      display: inherit;
    }
    section .item .logo {
      border: none;
      height: auto;
      width: auto;
      text-align: left;
      margin: 0;
      display: inline;
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
