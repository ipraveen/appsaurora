import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

function Container({ children, className }: Props) {
    const cName = ['container mx-auto', className ? className : ''].join(' ');
    return <div className={cName}>{children}</div>;
}

export default Container;
