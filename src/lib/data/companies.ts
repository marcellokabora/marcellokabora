interface Company {
    logo: string;
    icon?: string;
    name: string;
    slogan: string;
    title: string;
    time: string;
    link?: string;
    technologies: string;
    achievements?: string[];
}

export const companies: Company[] = [
    {
        logo: "/logo/7echno-icon.png",
        name: "7echno",
        slogan: "Music Experience",
        title: "Full Stack Developer",
        time: "From May 2024",
        link: "//7echno.com",
        technologies: "Svelte, Github, Tailwind, Typescript, Firebase, Youtube",
        achievements: [
            "Founded and architected the full platform from concept to production",
            "Built a real-time music experience app using Svelte, Firebase, and YouTube API",
            "Designed the UI/UX system and implemented the full frontend and backend stack"
        ]
    },
    {
        logo: "/logo/fasttrack.png",
        name: "Fast Track",
        slogan: "Flight Tickets",
        title: "Fullstack Developer",
        time: "From June 2024 - Feb 2025",
        link: "//fasttrack.flights",
        technologies: "Vue, Nuxt, Svelte, Github, Figma, Tailwind, Turborepo",
        achievements: [
            "Built a scalable monorepo with Turborepo spanning Vue, Nuxt, and Svelte",
            "Led MCP protocol integration to connect frontend and backend services",
            "Established AI agent workflows and Design System docs for the team"
        ]
    },
    {
        logo: "/company/evaglobal.png",
        icon: "/company/evaglobal_icon.png",
        name: "Eva Global",
        slogan: "eMobility",
        title: "Frontend Developer",
        time: "Oct 2022 - Feb 2025",
        link: "//linkedin.com/company/evaglobal",
        technologies: "Angular, Storybook, Gitlab, Jira, Figma",
        achievements: [
            "Built and maintained the shared Angular Material component library",
            "Delivered the Heatmap feature end-to-end from design to production",
            "Improved performance and accessibility across core product views"
        ]
    },
    {
        logo: "/logo/linus.png",
        name: "Linus",
        slogan: "Digital Finance",
        title: "Frontend Developer",
        time: "Sep 2021 - Aug 2022",
        link: "//linkedin.com/company/linus-digital-finance",
        technologies: "React, Vue, GraphQL, Docker, Builder, Github, Jira, Styled, Figma",
        achievements: [
            "Rebuilt the Registration and Product systems using Builder.io and React",
            "Delivered marketing landing pages aligned with business and growth goals",
            "Integrated GraphQL APIs and improved component reuse across products"
        ]
    },
    {
        logo: "/logo/buildingminds.png",
        icon: "/logo/buildingminds_icon.png",
        name: "Buildingminds",
        slogan: "Equipment Tool",
        title: "Frontend Developer",
        time: "Jan 2020 - Sep 2021",
        link: "//linkedin.com/company/buildingminds",
        technologies: "Angular, Redux, Bootstrap, Azure, Abstract, Material, Firebase, Jest",
        achievements: [
            "Migrated legacy UI components into a shared Angular component library",
            "Standardised frontend patterns and Redux state across multiple teams",
            "Mentored junior developers on Angular architecture and Jest testing"
        ]
    },
    {
        logo: "/company/yukka.png",
        icon: "/company/yukka_icon.png",
        name: "Yukkalab",
        slogan: "News analytics",
        title: "Frontend Architect",
        time: "Jun 2017 - Nov 2019",
        link: "//linkedin.com/company/yukkalabag",
        technologies: "Angular, Material, MySql, Jira, D3, Highcharts, Github, Firebase",
        achievements: [
            "Architected data visualisations (Chartmap, Network, Signals) with D3 and Highcharts",
            "Led the full migration from legacy frontend to Angular with Material Design",
            "Defined charting component patterns adopted across the entire product suite"
        ]
    },
    {
        logo: "/logo/smava.png",
        name: "Smava",
        slogan: "Credit Online",
        title: "Frontend Developer",
        time: "Feb 2016 - Feb 2017",
        link: "//linkedin.com/company/smava",
        technologies: "HTML, CSS, Javascript, Foundation, Github"
    },
    {
        logo: "/logo/tanglang.png",
        name: "Tang Lang",
        slogan: "Bus Travel",
        title: "Part Time - Fullstack Developer",
        time: "Apr 2014 - Dec 2015",
        technologies: "Jquery, CSS, Javascript, MySql"
    },
    {
        logo: "/logo/maggiolino.png",
        name: "Maggiolino",
        slogan: "Books Online",
        title: "Part Time - Fullstack Developer",
        time: "Aug 2013 - Jan 2015",
        technologies: "Jquery, Bootstrap, Javascript, MySql"
    },
    {
        logo: "/logo/petdog.png",
        name: "Annunci Animali",
        slogan: "Find your Pet",
        title: "Part Time - Frontend Developer",
        time: "Mar 2013 - Oct 2014",
        technologies: "Jquery, Javascript, MySql"
    },
    {
        logo: "/logo/airesis.png",
        name: "Airesis",
        slogan: "Edemocracy",
        title: "Part Time - UI Designer",
        time: "Apr 2011 - Apr 2012",
        technologies: "HTML, CSS, Javascript"
    },
    {
        logo: "/logo/shipchandler.png",
        name: "Shipchandler",
        slogan: "Metallurgy",
        title: "UI Designer",
        time: "Jan 2009 - Feb 2010",
        technologies: "HTML, CSS, Javascript"
    },
];
