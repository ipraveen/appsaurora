import MuiPaper from '@mui/material/Paper';

import React from 'react';

interface Props {
    children: React.ReactNode;
    tabIndex?: number;
    className?: string;
}

const Paper: React.FC<Props> = ({ children, tabIndex, className }) => {
    return (
        <MuiPaper className={`${className} bg-white`} elevation={0} variant="outlined" tabIndex={tabIndex}>
            {children}
        </MuiPaper>
    );
};

export default Paper;
