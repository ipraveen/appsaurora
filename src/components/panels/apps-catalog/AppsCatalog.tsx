import React from 'react';
import { getApps } from './config';
import AppsSection from './AppsSection';

interface Props {}

const AppsCatalog = () => {
    const apps = getApps();
    return (
        <div className="flex flex-col gap-6 px-6 py-2">
            {apps.map(({ groupLabel, items }) => (
                <AppsSection key={groupLabel} label={groupLabel} items={items} />
            ))}
        </div>
    );
};

export default AppsCatalog;
