export interface Project {
    banner: {
        cover: string;
        title: string;
        slogan: string;
    };
    date: string;
    gallery: string[]
    lang?: Link[]
    more?: Link[]
    link?: string
    code?: string
}
export interface Link {
    name: string;
    link: string;
}
export interface ProjectThumb {
    photo: string,
    name: string,
    link: string,
    height: number,
    type: string,
    time: string
    lang: string[]
}
export const language = {
    angular: {
        name: 'angular',
        link: '//angular.io'
    },
    react: {
        name: 'react',
        link: '//reactjs.org'
    },
    svelte: {
        name: 'svelte',
        link: '//svelte.dev'
    },
    jquery: {
        name: 'Jquery',
        link: '//jquery.com'
    },
    material: {
        name: 'Material',
        link: '//material.io'
    },
    firebase: {
        name: 'Firebase',
        link: '//firebase.google.com'
    },
    bootstrap: {
        name: 'Bootstrap',
        link: '//getbootstrap.com'
    },
    mysql: {
        name: 'MySQL',
        link: '//mysql.com'
    },
    d3: {
        name: 'D3',
        link: '//d3js.org'
    },
    highchart: {
        name: 'Highcharts',
        link: '//highcharts.com'
    },
    builder: {
        name: 'Builder',
        link: '//builder.io'
    }
}