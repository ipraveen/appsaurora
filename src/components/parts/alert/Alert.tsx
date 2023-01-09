import React from 'react';
import AlertMui from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface Props {
    type: 'info' | 'warning' | 'success';
    title?: string;
    children: React.ReactNode;
    variant?: 'filled';
    className?: string;
}

const StyledAlert = styled(AlertMui)`
    ${tw``}/* display: flex;
    justify-content: center; */
`;

const Alert: React.FC<Props> = ({ type = 'info', title, children, variant, className }) => {
    return (
        <StyledAlert className={className} severity={type} variant={variant}>
            {title && <AlertTitle>{title}</AlertTitle>}
            {children}
        </StyledAlert>
    );
};

export default Alert;
