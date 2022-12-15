import React from 'react';

interface Props {
    className?: string;
}

const AppsSearch: React.FC<Props> = ({ className = '' }) => (
    <input
        className={`${className} border rounded-md p-2 px-4 w-6/12 placeholder-shown:border-theme-400 border-theme-400 shadow-md`}
        type="text"
        placeholder="Search App"
    />
);

export default AppsSearch;
