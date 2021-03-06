import * as React from 'react';
import { AppLayout } from 'components/layout';
import Timer from 'apps/TimerNew/Timer';
import SEO from 'components/seo/SEO';
import { HeadProps, PageProps } from 'gatsby';

const TimerPage = (props: PageProps) => {
    const { location } = props;
    const { state } = location;

    return (
        <AppLayout appName='timer' state={state}>
            <Timer />
        </AppLayout>
    );
};

export default TimerPage;

export const Head = (props: HeadProps) => {
    const { location } = props;
    return (
        <SEO
            title="Timer"
            description="A Timer app with radial and flip card based countdown."
            pathname={location.pathname}
        />
    );
};
