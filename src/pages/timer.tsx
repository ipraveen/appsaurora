import * as React from 'react';
import { AppLayout } from 'layout/index';;
import { Timer } from 'apps/timer';
import SEO from 'components/seo/SEO';
import { HeadProps, PageProps } from 'gatsby';

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

const TimerPage = (props: PageProps) => {
    const { location } = props;
    const { state } = location;

    return (
        <AppLayout appName="timer" state={state}>
            <Timer />
        </AppLayout>
    );
};

export default TimerPage;
