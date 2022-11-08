import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => (
    <div className={`${className} container mx-auto`}>{children}</div>
);

export default Container;
