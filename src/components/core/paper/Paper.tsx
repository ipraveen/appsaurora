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
        <MuiPaper
            className={`${className} rounded-md bg-white dark:bg-slate-800 dark:border-0 border border-gray-200 border-solid text-slate-900 dark:text-white`}
            variant={variant}
            tabIndex={tabIndex}
        >
            {children}
        </MuiPaper>
    );
};

export default Paper;
