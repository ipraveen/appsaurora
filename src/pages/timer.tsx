import * as React from 'react';
import { AppLayout } from 'components/layout';

const TimerPage = (props: any) => {
    const { location } = props;
    const { state } = location;

    return (
        <AppLayout state={state}>
           <h1>Timer</h1>
        </AppLayout>
    );
};

export default TimerPage;
