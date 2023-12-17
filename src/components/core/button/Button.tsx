import styled from '@emotion/styled';
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

// const StyledButton = styled.button`
//     background-color: rgb(25, 118, 210);
//     box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
//         rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
//     box-sizing: border-box;
//     color: rgb(255, 255, 255);
//     cursor: pointer;
//     font-weight: 500;
//     padding: 6px 16px;
//     height: 36.5px;
//     display: flex;
//     justify-content: center;
//     letter-spacing: 0.39998px;
//     line-height: 24.5px;
//     border-radius: 4px;
//     text-transform: uppercase;
// `;

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
