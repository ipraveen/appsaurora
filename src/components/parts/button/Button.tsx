import React, { MouseEvent } from 'react';
import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material';
import tw from 'twin.macro';

interface Props {
    children: React.ReactNode;
    onClick: (e: MouseEvent) => void;
    className?: string;
    variant?: 'text' | 'contained' | 'outlined';
}

const StyledButton = styled(MUIButton)`
    ${tw`bg-banner-800 text-white`}

    background-color: #445d6e !important;

    &:hover{
        background-color: #42525d !important;
    }
`;

const Button: React.FC<Props> = (props) => {
    const { onClick, children, variant = 'contained', className } = props;

    return (
        <StyledButton variant={variant} className={className} disableElevation onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
