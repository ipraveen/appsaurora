import * as React from 'react';
import AppsCatalog from 'apps/apps-catalog/AppsCatalog';
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

export const Head = () => (
    <SEO
        title="AppsAurora"
        description="AppsAurora has all the apps you will need in your daily life. A Calender, a Timer, an Alarm, image cropper...well you name it!"
    />
);
