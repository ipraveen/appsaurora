import React, { useReducer } from 'react';
import { Container } from '@/layout/index';
import clsx from 'clsx';
import { useNotificationContext } from '../hooks/useNotificationContext';
import './style.css';

const PageNotification = () => {
    const { node } = useNotificationContext();
    const show = Boolean(node);

    const className = clsx('aurora-ui page-notification bg-white dark:bg-slate-600 p-2 w-full h-20 ', {
        show: show,
    });

    // if (node == null) {
    //     return null;
    // }

    return (
        <div className={className}>
            <Container>{node}</Container>
        </div>
    );
};

export default PageNotification;
