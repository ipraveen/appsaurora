import React from 'react';
import { Header, Footer } from 'components/layout';
import * as styles from './applayout.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props {
    children: React.ReactNode;
    state?: {
        appId: string;
        icon: IconDefinition;
        label: string;
    };
}

export default function AppLayout({ children, state }: Props) {
    return (
        <div className={`${styles.app} `}>
            <Header icon={state?.icon} label={state?.label} />
            <main className="container mx-auto my-2  bg-white py-6 px-4">{children}</main>
            <Footer />
        </div>
    );
}
