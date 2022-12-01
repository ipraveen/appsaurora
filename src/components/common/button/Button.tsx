import React, { MouseEvent } from 'react';
import { Button as MUIButton } from '@mui/material';

interface Props {
    children: React.ReactNode;
    onClick: (e: MouseEvent) => void;
}

const Button: React.FC<Props> = (props) => {
    return <MUIButton {...props} />;
};

export default Button;
