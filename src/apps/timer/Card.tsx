import React, { LegacyRef } from 'react';
import * as style from './flip.module.css';

interface Props {
    zIndex: string;
    className: string;
}

const Card = React.forwardRef(({ zIndex, className }: Props, ref: LegacyRef<HTMLDivElement> | undefined) => (
    <div className={`${className} card`}>
        <div ref={ref} className={`flex flex-col ${zIndex}`}>
            <div className={`top ${style.top} `} />
            <div className={`bottom ${style.bottom}`} />
        </div>
    </div>
));

export default Card;
