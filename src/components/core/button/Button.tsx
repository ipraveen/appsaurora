import React, { MouseEvent } from 'react';
import MUIButton from '@mui/material/Button';

interface Props {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    className?: string;
    variant?: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    color?: 'success' | 'error';
}

const Button: React.FC<Props> = (props) => {
    const { onClick, children, color, variant = 'contained', className, disabled } = props;

    return (
        <MUIButton
            variant={variant}
            color={color}
            className={className}
            disableElevation
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </MUIButton>
    );
};

export default Button;
