import * as React from 'react';
import Calendar from 'apps/calendar/Calendar';
import { AppLayout } from 'components/layout';
import SEO from 'components/seo/SEO';
import { HeadProps, PageProps } from 'gatsby';

const CalendarPage = (props: PageProps) => {
    const { params } = props;

    return (
        <AppLayout appName="calendar">
            <Calendar params={params} />
        </AppLayout>
    );
};

export default CalendarPage;

export const Head = (props: HeadProps) => {
    const { location } = props;

    return (
        <SEO
            title="calendar"
            description="A Simple Calendar app to see the dates, find date range, weekends, weekdays, etc."
            pathname={location.pathname}
        />
    );
};
