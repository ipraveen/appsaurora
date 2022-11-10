import * as React from 'react';
import { AppLayout } from 'components/layout';
import { Countdown } from 'apps/index';

const CountdownAppPage = (props: any) => {
    const { location } = props;
    const { state } = location;

    return (
        <AppLayout state={state}>
           <Countdown />
        </AppLayout>
    );
};

export default CountdownAppPage;
