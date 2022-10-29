import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>{children}</div>;
}
