import clsx from 'clsx';
import React from 'react';

interface Props {
    className?: string;
    type?: 'title' | 'h1' | 'h2' | 'small';
    children: React.ReactNode;
}

export function Label({ type = 'h1', children, className }: Props) {
    if (type === 'title') {
        return <h1 className={clsx(className, 'my-1 text-6xl')}>{children}</h1>;
    }

    if (type === 'small') {
        return (
            <small className={clsx(className, 'my-1 font-semibold text-slate-400 dark:text-slate-300')}>
                {children}
            </small>
        );
    }
    return <h1 className={clsx(className, 'my-2 mb-6 text-xl font-medium text-slate-400 dark:text-slate-300')}>{children}</h1>;
}
