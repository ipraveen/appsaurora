import React, { MouseEventHandler, useState } from 'react';

import * as styles from './flipCard.module.css';

interface Props {
    className: string;
    front: React.ReactNode;
    back: React.ReactNode;
    onClick: () => void;
    flipped: boolean;
}

const FlipCard = ({ flipped, front, back, className = '', onClick }: Props) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        if (!flipped) {
            onClick();
        }
    };

    return (
        <div className={`${className} ${flipped && styles.flipped} ${styles.flipCard}`} onClick={handleClick}>
            <div className={styles.front}>{front}</div>
            <div className={styles.back}>{back}</div>
        </div>
    );
};

export default FlipCard;
