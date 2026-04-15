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
    // {
    //     logo: "/logo/7echno.png",
    //     name: "7echno",
    //     slogan: "Music Experience",
    //     title: "Partime - Founder Developer",
    //     time: "From May 2024",
    //     link: "//7echno.com",
    //     technologies: "Svelte, Github, Tailwind, Typescript, Firebase, Youtube"
    // },
    {
        logo: "/logo/fasttrack.png",
        name: "Fast Track",
        slogan: "Flight Tickets",
        title: "Tech Leader",
        time: "From June 2024 - Feb 2025",
        link: "//fasttrack.flights",
        technologies: "Vue, Nuxt, Svelte, Github, Figma, Tailwind, Turborepo",
        achievements: [
            "Established AI agent protocols and Design System documentation for the team",
            "Led MCP protocol implementation for frontend-backend connectivity",
            "Architected monorepo structure with Turborepo across Vue, Nuxt, and Svelte"
        ]
    },
    {
        logo: "/company/evaglobal.png",
        icon: "/company/evaglobal_icon.png",
        name: "Eva Global",
        slogan: "eMobility",
        title: "Senior Frontend Developer",
        time: "Oct 2022 - Feb 2025",
        link: "//linkedin.com/company/evaglobal",
        technologies: "Angular, Storybook, Gitlab, Jira, Figma",
        achievements: [
            "Built and maintained the shared Angular Material UI library",
            "Drove UX improvements including the Heatmap feature from concept to delivery"
        ]
    },
    {
        logo: "/logo/linus.png",
        name: "Linus",
        slogan: "Digital Finance",
        title: "Senior Frontend Developer",
        time: "Sep 2021 - Aug 2022",
        link: "//linkedin.com/company/linus-digital-finance",
        technologies: "React, Vue, GraphQL, Docker, Builder, Github, Jira, Styled, Figma",
        achievements: [
            "Led the rebuild of the Registration and Product template systems with Builder.io and React",
            "Delivered multiple marketing landing pages aligning frontend with business goals"
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
            "Led migration of legacy UI components to a shared Angular component library",
            "Worked across multiple teams to standardize frontend patterns and Redux state management",
            "Mentored 2 developers on Angular architecture and testing with Jest"
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
            "Architected and built advanced data visualizations (Chartmap, Network, Signals) with D3 and Highcharts",
            "Led the migration from legacy frontend to Angular with Material Design",
            "Established charting component patterns reused across the entire product"
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
