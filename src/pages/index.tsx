import * as React from 'react';
import AppsCatalog from 'apps/apps-catalog/AppsCatalog';
import { AppLayout } from 'layout/index';
import SEO from 'components/seo/SEO';

const AgeIndexPagePage = () => {
    return (
        <AppLayout appName="catalog-page">
            <AppsCatalog />
        </AppLayout>
    );
};

export default AgeIndexPagePage;

export const Head = () => (
    <SEO
        title=""
        description="appsaurora is a cloud apps development company. We build cloud apps for your business and daily use."
    />
);
