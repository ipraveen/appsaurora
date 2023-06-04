import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const gatsbyConfig: GatsbyConfig = {
    siteMetadata: {
        title: `AppsAurora`,
        siteUrl: `https://appsaurora.com/`,
        description: `AppsAurora has all the apps you will need in your daily life. A Calender, a Timer, an Alarm, image cropper...well you name it!`,
        image: `/favicon-32x32.png`,
        twitterUsername: '@i_praveensingh',
    },
    graphqlTypegen: true,
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `dominantColor`,
                    quality: 50,
                    breakpoints: [750, 1080, 1366, 1920],
                    backgroundColor: `transparent`,
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },
        `gatsby-transformer-sharp`,
        'gatsby-plugin-material-ui',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-postcss',
        'gatsby-plugin-emotion',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/images/icon.png',
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
export default gatsbyConfig;

