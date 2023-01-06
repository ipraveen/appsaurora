// // import type { GatsbyConfig } from 'gatsby';
// import path from 'path';

const path = require('path');

const config = {
    siteMetadata: {
        title: `AppsAurora`,
        siteUrl: `https://appsaurora.com/`,
        description: `AppsAurora has all the apps you will need in your daily life. A Calender, a Timer, an Alarm, image cropper...well you name it!`,
        image: `/favicon-32x32.png`,
        twitterUsername: '@i_praveensingh',
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-material-ui',
        'gatsby-plugin-postcss',
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-54655188-1',
            },
        },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                components: path.join(__dirname, 'src/components'),
                apps: path.join(__dirname, 'src/apps'),
                utils: path.join(__dirname, 'src/utils'),
                assets: path.join(__dirname, 'src/assets'),
                styles: path.join(__dirname, 'src/styles'),
            },
        },
    ],
};

// export default config;

module.exports = config;
