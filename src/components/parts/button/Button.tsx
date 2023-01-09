import React, { MouseEvent } from 'react';
import MUIButton from '@mui/material/Button';

interface Props {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    className?: string;
    variant?: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
    const { onClick, children, variant = 'contained', className, disabled } = props;

    return (
        <MUIButton variant={variant} className={className} disableElevation onClick={onClick} disabled={disabled}>
            {children}
        </MUIButton>
    );
};

export default Button;
