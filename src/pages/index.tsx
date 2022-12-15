import * as React from 'react';
import { AppsCatalog } from 'components/panels';
import { AppLayout } from 'components/layout';
import SEO from 'components/seo/SEO';

const AgeIndexPagePage = () => {
    return (
        <AppLayout>
            <AppsCatalog />
        </AppLayout>
    );
};

export default AgeIndexPagePage;

export const Head = () => <SEO />;
