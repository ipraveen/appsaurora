import React from 'react';
import { Header, Footer } from 'components/layout';
import * as styles from './applayout.module.css';

interface Props {
    children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
    return (
        <div className={styles.app}>
            <Header />
            <main className='border border-solid rounded-xl border-stone-300 container mx-auto my-6'>{children}</main>
            <Footer />
        </div>
    );
}
