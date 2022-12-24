import React, { MouseEvent } from 'react';

interface Props {
    children: React.ReactNode;
    onClick: (e: MouseEvent) => void;
    className: string;
}

const Button: React.FC<Props> = (props) => {
    const { onClick, children } = props;
    const className = `px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-md shadow-sm ${props.className}`;

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
