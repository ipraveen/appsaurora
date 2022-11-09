import * as React from 'react';
import { AppLayout } from 'components/layout';

const AgePage = (props: any) => {
    const { location } = props;
    const { state } = location;

    return (
        <AppLayout state={state}>
           <h1>Age</h1>
        </AppLayout>
    );
};

export default AgePage;
