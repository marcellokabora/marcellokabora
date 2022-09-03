<script>
    import Gallery from '$lib/Gallery.svelte';
    import Section from '$lib/Section.svelte';
    import Header from '$lib/Header.svelte';
</script>

    <Gallery/>

    <section>

        <Header title="ABOUT" slogan="I am passionate about user interface and user experience"/>

        <div class="space"></div>

        <div data-aos="fade-up" data-aos-duration="1000">
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
        </div>

        <div class="space"></div>

    

    </section>

<style>
    .welcome {
        min-height: 100vh;
    }
    .space{
        height: 70px;
    }
</style>