<script>
    import Gallery from '$lib/Gallery.svelte';
    import Section from '$lib/Section.svelte';
    import Header from '$lib/Header.svelte';
    import Carousel from '$lib/Carousel.svelte';

    const company = {
        cover: '/photo/back2.jpg',
        title: 'CAREER',
        slogan: 'I worked for different startup in Berlin and Italy',
        items: [
            {
                logo: '/company/linus.png',
                company: 'Linus',
                title: 'Software Engineer',
                time: 'Sep 2021 - Aug 2022',
                link: '//linus-finance.com',
            },
            {
                logo: '/company/buildingminds.png',
                company: 'Buildingminds',
                title: 'Frontend Developer ',
                time: 'Jan 2020 - Aug 2021',
                link: '//buildingminds.com',
            },
            {
                logo: '/company/yukkalab.png',
                company: 'Yukkalab',
                title: 'Frontend Developer',
                time: 'Jun 2017 - Nov 2019',
                link: '//yukkalab.com',
            },
            {
                logo: '/company/smava.png',
                company: 'Smava',
                title: 'Frontend Developer',
                time: 'Feb 2016 - Nov 2016',
                link: '//smava.de',
            },
            {
                logo: '/company/tanglang.png',
                company: 'Tang Lang',
                title: 'Fullstack Developer',
                time: 'Apr 2014 - Dec 2015',
            },
            {
                logo: '/company/maggiolino.png',
                company: 'Maggiolino',
                title: 'Fullstack Developer',
                time: 'Aug 2013 - Jan 2015',
            },
            {
                logo: '/company/petdog.png',
                company: 'Annunci Animali',
                title: 'Frontend Developer',
                time: 'Mar 2013 - Oct 2014',
            },
            {
                logo: '/company/airesis.png',
                company: 'Airesis',
                title: 'UI Designer',
                time: 'Apr 2011 - Apr 2012',
            },
        ]
    }

    const language = {
        cover: '/gallery/back2.jpg',
        title: 'LANGUAGE',
        items: [
            {
                logo: '/flag/it.png',
                company: 'Italian',
                title: '100%',
            },
            {
                logo: '/flag/en.png',
                company: 'English',
                title: '100% ',
            },
            {
                logo: '/flag/sp.png',
                company: 'Spanish',
                title: '30%',
            },
        ]
    }


</script>

    <Gallery/>

    <section>

        <Header title="ABOUT" slogan="I am passionate about user interface and user experience"/>

        <div class="space"></div>

        <Section photo="/photo/software.jpg" title="Software">
            <p>Building software is something I have always done from my early beginning, trying to create something unique with special features is been my goal. Staying updated to the latest technology is very important using powerful tools like <a href="//code.visualstudio.com/" target="_blank">VSC</a> and <a href="//google.com/chrome/" target="_blank">Chrome</a> I can test components in real-time and finalize complex layouts.</p>
        </Section>
        <Section photo="/photo/develop.jpeg" title="Framework" aside>
            <p>I like to work using object-oriented program language in order to build complex features and maintain scalable functionality. I can use different frameworks like <a href="//reactjs.org" target="_blank">React</a> or <a href="//vuejs.org" target="_blank">Vue</a> but my favorite one is by far <a href="//angular.io" target="_blank">Angular</a>. I started using it from the beginning and until now in version eleven following most of my projects like this website for example.</p>
        </Section>
        <Section photo="/photo/styling.jpg" title="Styling">
            <p>CSS or Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML, in particular, SCSS is used in different libraries like material design. For me is extremely easy to develop complex layouts using this technology with the help of auto complete and nested classes.</p>
        </Section>
        <Section photo="/photo/visualization.jpeg" title="Visualizzation" aside>
            <p>Data visualization is an interdisciplinary field that deals with the graphic representation of data and it is a particularly efficient way of communicating when the data is numerous as for example a Time Series. I use <a href="//d3js.org" target="_blank">D3js</a> o <a href="//highcharts.com" target="_blank">Highcharts</a> to communicate information clearly and efficiently building statistical graphics, plots or information graphics.</p>
        </Section>

        <div class="space"></div>

    </section>

    <Carousel title={company.title} slogan={company.slogan} cover={company.cover} items={company.items} perpage={4}/>

    <section>

        <div class="space"></div>

        <Header title="ABOUT" slogan="I am passionate about user interface and user experience"/>

        <div class="space"></div>

        <Section photo="/photo/software.jpg" title="Software">
            <p>Building software is something I have always done from my early beginning, trying to create something unique with special features is been my goal. Staying updated to the latest technology is very important using powerful tools like <a href="//code.visualstudio.com/" target="_blank">VSC</a> and <a href="//google.com/chrome/" target="_blank">Chrome</a> I can test components in real-time and finalize complex layouts.</p>
        </Section>
        <Section photo="/photo/develop.jpeg" title="Framework" aside>
            <p>I like to work using object-oriented program language in order to build complex features and maintain scalable functionality. I can use different frameworks like <a href="//reactjs.org" target="_blank">React</a> or <a href="//vuejs.org" target="_blank">Vue</a> but my favorite one is by far <a href="//angular.io" target="_blank">Angular</a>. I started using it from the beginning and until now in version eleven following most of my projects like this website for example.</p>
        </Section>
        <Section photo="/photo/styling.jpg" title="Styling">
            <p>CSS or Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML, in particular, SCSS is used in different libraries like material design. For me is extremely easy to develop complex layouts using this technology with the help of auto complete and nested classes.</p>
        </Section>
        <Section photo="/photo/visualization.jpeg" title="Visualizzation" aside>
            <p>Data visualization is an interdisciplinary field that deals with the graphic representation of data and it is a particularly efficient way of communicating when the data is numerous as for example a Time Series. I use <a href="//d3js.org" target="_blank">D3js</a> o <a href="//highcharts.com" target="_blank">Highcharts</a> to communicate information clearly and efficiently building statistical graphics, plots or information graphics.</p>
        </Section>

        <div class="space"></div>

    </section>

    <Carousel title={language.title} cover={language.cover} items={language.items} perpage={3}/>

    <div class="space"></div>

<style>
    .welcome {
        min-height: 100vh;
    }
    .space{
        height: 70px;
    }
</style>