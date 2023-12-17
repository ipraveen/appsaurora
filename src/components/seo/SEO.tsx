import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
    title?: string;
    description?: string;
    pathname?: string;
    children?: React.ReactNode;
}

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    twitterUsername
                    image
                    siteUrl
                }
            }
        }
    `);

    return data.site.siteMetadata;
};

const SEO = ({ title: pageTitle, description, pathname, children }: Props) => {
    const { title: appTitle, image, siteUrl, twitterUsername } = useSiteMetadata();
    const title = pageTitle? `${pageTitle} | ${appTitle}` : appTitle;

    const seo = {
        title,
        description: description,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    };

    return (
        <>
            <title>{`${seo.title} | ${description}`}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            {children}
        </>
    );
};

export default SEO;
