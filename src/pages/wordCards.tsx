import * as React from 'react';
import { WordCards } from 'apps';
import { AppLayout } from 'components/layout';
import SEO from 'components/seo/SEO';
import { HeadProps, PageProps } from 'gatsby';

const WordCardsPage = (props: PageProps) => {
    const { location } = props;

    return (
        <AppLayout appName='wordCards'>
            <WordCards />
        </AppLayout>
    );
};

export default WordCardsPage;

export const Head = (props: HeadProps) => {
    const { location } = props;
    return <SEO title="Word Cards" description='Improve your word power by flipping words card | Free English Words Cards Online' pathname={location.pathname} />;
};
