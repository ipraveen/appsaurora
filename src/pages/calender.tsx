import * as React from 'react';
import { Calender } from 'apps';
import { AppLayout } from 'components/layout';

const CalenderPage = (props: any) => {
    const { location } = props;
    const { state } = location;

    return (
        <AppLayout state={state}>
            <Calender />
        </AppLayout>
    );
};

export default CalenderPage;
