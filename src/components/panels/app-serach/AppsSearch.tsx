import React from 'react';

interface Props {
    className?: string;
}

const AppsSearch: React.FC<Props> = ({ className = '' }) => (
    <input
        className={`${className} border rounded-xl p-2 px-4 w-6/12 placeholder-shown:border-gray-500`}
        type="text"
        placeholder="Search App"
    />
);

export default AppsSearch;
