import React from 'react';
import { getApps } from './config';
import AppsSection from './AppsSection';
import { Paper } from 'components/core';

interface Props {}

const AppsCatalog = () => {
    const apps = getApps();
    return (
        <Paper testId="catalog" className="flex flex-col gap-6 p-12 ">
            {apps.map(({ groupLabel, items }) => (
                <AppsSection key={groupLabel} label={groupLabel} items={items} />
            ))}
        </Paper>
    );
};

export default AppsCatalog;
