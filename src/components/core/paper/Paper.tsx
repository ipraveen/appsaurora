import React from 'react';

interface Props {
    children: React.ReactNode;
    tabIndex?: number;
    className?: string;
    testId?: string;
}

const Paper: React.FC<Props> = ({ children, tabIndex, className, testId }) => {
    return (
        <div
            data-testid={testId}
            className={`${className} rounded-md bg-white dark:bg-slate-800 dark:border-0 border border-gray-200 border-solid text-slate-900 dark:text-white`}
            tabIndex={tabIndex}
        >
            {children}
        </div>
    );
};

export default Paper;
