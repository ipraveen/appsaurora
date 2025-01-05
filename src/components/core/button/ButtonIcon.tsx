import clsx from 'clsx';
import React, { MouseEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FaBeer } from '@react-icons/all-files/fa/FaBeer';
import Button from './Button';

interface Props {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent) => void;
    className?: string;
    variant?: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    color?: 'success' | 'error';
}

//
//

const ButtonIcon: React.FC<Props> = (props) => {
    const { children, className } = props;

    return (
        <Button className={clsx('pr-4 group', className)} {...props}>
            {children}
            <div className="rounded-full bg-cyan-600 group-hover:bg-cyan-800  grid place-content-center w-6 aspect-square ml-2">
                <FaArrowRight />
            </div>
        </Button>
    );
};

export default ButtonIcon;
