import clsx from 'clsx';
import React, { MouseEvent } from 'react';

interface Props {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    className?: string;
    variant?: 'text' | 'contained' | 'outlined' | 'default';
    type?: 'controls' | 'action';
    disabled?: boolean;
    color?: 'success' | 'error';
    size?: 'normal' | 'sm' | 'xs';
}

//
//

const Button: React.FC<Props> = (props) => {
    const { onClick, children, className, disabled, variant = 'default', type = 'action', size = 'normal' } = props;

    return (
        <button
            className={clsx(
                'flex justify-between  hover:shadow-md ',
                {
                    'py-2 px-6 font-normal text-base': size === 'normal',
                },
                {
                    'py-1 px-2 font-light text-sm': size === 'sm',
                },
                {
                    'opacity-50 cursor-not-allowed': disabled,
                },
                {
                    'rounded-full shadow-sm': variant === 'outlined' || variant === 'default',
                },
                {
                    'bg-cyan-500 hover:bg-cyan-600 text-white ': variant === 'default' && type === 'action',
                },
                {
                    'bg-blue-500 hover:bg-blue-400 text-white  rounded-md':
                        variant === 'default' && type === 'controls',
                },
                {
                    'bg-none text-cyan-600 border border-cyan-600': variant === 'outlined',
                },
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
