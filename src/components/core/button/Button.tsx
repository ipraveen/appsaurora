import styled from '@emotion/styled';
import React, { MouseEvent } from 'react';
// import MUIButton from '@mui/material/Button';

interface Props {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    className?: string;
    variant?: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    color?: 'success' | 'error';
}

const StyledButton = styled.button`
    background-color: rgb(25, 118, 210);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
        rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-weight: 500;
    padding: 6px 16px;
    height: 36.5px;
    display: flex;
    justify-content: center;
    letter-spacing: 0.39998px;
    line-height: 24.5px;
    border-radius: 4px;
    text-transform: uppercase;
`;

const Button: React.FC<Props> = (props) => {
    const { onClick, children, color, variant = 'contained', className, disabled } = props;

    return (
        <StyledButton className={className} onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;
