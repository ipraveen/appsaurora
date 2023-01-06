import React from 'react';
import AlertMui from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import styled from '@emotion/styled';

interface Props {
    type: 'info' | 'warning';
    title?: string;
    children: React.ReactNode;
}

const StyledAlert = styled(AlertMui)`
    /* display: flex;
    justify-content: center; */
`;

const Alert: React.FC<Props> = ({ type = 'info', title, children }) => {
    return (
        <div className='flex justify-center'>
            <StyledAlert severity={type}>
                {title && <AlertTitle>Info</AlertTitle>}
                {children}
            </StyledAlert>
        </div>
    );
};

export default Alert;
