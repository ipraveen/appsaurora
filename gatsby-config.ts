// import type { GatsbyConfig } from 'gatsby';
import path from 'path';

// const path = require('path');

const config = {
    siteMetadata: {
        title: `appsaurora`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-54655188-1',
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                components: path.join(__dirname, 'src/components'),
                apps: path.join(__dirname, 'src/apps'),
                assets: path.join(__dirname, 'src/assets'),
                styles: path.join(__dirname, 'src/styles'),
            },
        },
    ],
};

export default config;

// module.exports = config;