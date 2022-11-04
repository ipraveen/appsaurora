import React from 'react';
import Header from './header/header';

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main>
                <div>{children}</div>
            </main>
        </>
    );
}
