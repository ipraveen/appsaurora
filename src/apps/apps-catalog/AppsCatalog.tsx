import React from 'react';
import { getApps } from './config';
import AppsSection from './AppsSection';
import { Paper } from '@/components/core';
import { Container } from '@/layout/index';

interface Props {}

const AppsCatalog = () => {
    const apps = getApps();
    return (
        <Container>
            <Paper testId="catalog" className="flex flex-col gap-6 p-12 ">
                {apps.map(({ groupLabel, items }) => (
                    <AppsSection key={groupLabel} label={groupLabel} items={items} />
                ))}
            </Paper>
        </Container>
    );
};

export default AppsCatalog;
