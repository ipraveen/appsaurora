import * as React from 'react';
import { Calender } from 'apps';
import { AppLayout } from 'components/layout';
import SEO from 'components/seo/SEO';
import { HeadProps, PageProps } from 'gatsby';

const CalenderPage = (props: PageProps) => {
    const { location } = props;

    return (
        <AppLayout state={location.state}>
            <Calender />
        </AppLayout>
    );
};

export default CalenderPage;

export const Head = (props: HeadProps) => {
    const { location } = props;
    return <SEO title="Calender" description='A Simple Calender app to see the dates, find date range, weekends, weekdays, etc.' pathname={location.pathname} />;
};
