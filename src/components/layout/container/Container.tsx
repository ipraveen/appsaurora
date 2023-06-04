import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

function Container({ children, className }: Props) {
    return <div className={`${className} container mx-auto`}>{children}</div>;
}

export default Container;
