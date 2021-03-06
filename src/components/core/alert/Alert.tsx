import React from 'react';
import AlertMui from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import styled from '@emotion/styled';
import clsx from 'clsx';

interface Props {
    type: 'info' | 'warning' | 'success';
    title?: string;
    children: React.ReactNode;
    variant?: 'filled';
    className?: string;
    onClose?: () => void;
}

const Container = styled(AlertMui)`
    .dark & {
        background-color: #263850;
    }
`;

const Alert = ({ type = 'info', title, children, variant, className, onClose }: Props) => {
    const cName = clsx('border border-l-2 border-blue-100 dark:border-0 dark:text-slate-400', className);

    return (
        <Container onClose={onClose} className={cName} severity={type} variant={variant}>
            {title && <AlertTitle className="dark:text-slate-200">{title}</AlertTitle>}
            {children}
        </Container>
    );
};

export default Alert;
