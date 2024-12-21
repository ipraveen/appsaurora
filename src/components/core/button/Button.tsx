import clsx from 'clsx';
import React, { MouseEvent } from 'react';

interface Props {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    className?: string;
    variant?: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    color?: 'success' | 'error';
}


const Button: React.FC<Props> = (props) => {
    const { onClick, children, className, disabled } = props;

    return (
        <button
            className={clsx(className, 'bg-sky-600 hover:bg-sky-500 text-white py-2 px-4 rounded', {
                'opacity-50 cursor-not-allowed': disabled,
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
