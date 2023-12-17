import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const gatsbyConfig: GatsbyConfig = {
    siteMetadata: {
        title: `appsaurora`,
        siteUrl: `https://appsaurora.com/`,
        image: `/favicon-32x32.png`,
        twitterUsername: '@i_praveensingh',
    },
    graphqlTypegen: true,
    flags: {
        DEV_SSR: true,
    },
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
