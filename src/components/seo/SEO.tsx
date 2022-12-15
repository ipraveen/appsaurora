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
                    description
                    twitterUsername
                    image
                    siteUrl
                }
            }
        }
    `);

    return data.site.siteMetadata;
};

const SEO = ({ title, description, pathname, children }: Props) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    };

    return (
        <>
            <title>{`${seo.title} | ${defaultTitle} | ${description}`}</title>
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
