import React from 'react';

interface Props {
    text: string;
    subText?: string;
}

const PageTitle: React.FC<Props> = ({ text, subText }) => {
    return (
        <div className="flex justify-center">
            <h1 className="font-sans text-theme-500 text-4xl font-bold mb-6">{text}</h1>
            {subText && <small>{subText}</small>}
        </div>
    );
};

export default PageTitle;
