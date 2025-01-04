import * as React from 'react';
import Calendar from '@/apps/calendar/components/CalendarApp';
import { AppLayout } from '@/layout/index';;
import SEO from '@/components/seo/SEO';
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
            description="Calendar app to see the dates, find date range, weekends, weekdays, etc. by appsaurora.com"
            pathname={location.pathname}
        />
    );
};
