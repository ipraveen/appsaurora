import * as React from 'react';
import Calendar from 'apps/calendar/Calendar';
import { AppLayout } from 'components/layout';
import SEO from 'components/seo/SEO';
import { HeadProps } from 'gatsby';

const CalendarPage = () => {
    return (
        <AppLayout appName="calendar">
            <Calendar />
        </AppLayout>
    );
};

export default CalendarPage;

export const Head = (props: HeadProps) => {
    const { location } = props;
    return (
        <SEO
            title="Calendar"
            description="A Simple Calendar app to see the dates, find date range, weekends, weekdays, etc."
            pathname={location.pathname}
        />
    );
};
