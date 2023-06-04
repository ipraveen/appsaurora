import MuiPaper from '@mui/material/Paper';

import React from 'react';

interface Props {
    children: React.ReactNode;
    tabIndex?: number;
    className?: string;
    variant?: 'outlined';
}

const Paper: React.FC<Props> = ({ children, tabIndex, className, variant = 'outlined' }) => {
    return (
        <MuiPaper className={`${className} bg-white`} variant={variant} tabIndex={tabIndex}>
            {children}
        </MuiPaper>
    );
};

export default Paper;
