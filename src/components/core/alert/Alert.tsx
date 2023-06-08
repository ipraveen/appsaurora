import React from 'react';
import AlertMui from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface Props {
    type: 'info' | 'warning' | 'success';
    title?: string;
    children: React.ReactNode;
    variant?: 'filled';
    className?: string;
    onClose?: () => void;
}

const Alert = ({ type = 'info', title, children, variant, className , onClose}: Props) => {
    return (
        <AlertMui onClose={onClose} className={`border border-l-2 border-blue-100 dark:bg-slate-300 ${className}`} severity={type} variant={variant}>
            {title && <AlertTitle>{title}</AlertTitle>}
            {children}
        </AlertMui>
    );
};

export default Alert;
