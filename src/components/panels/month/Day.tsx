import React, { MouseEventHandler } from 'react';

export enum HIGHLIGHT_TYPE {
    NONE = 'none',
    START = 'start',
    END = 'end',
    BETWEEN = 'between',
}

interface Props {
    className?: string;
    year: number;
    month: number;
    day: number;
    onClick?: (obj: { value: string; year: number; month: number; day: number }) => void;
    highlight: HIGHLIGHT_TYPE;
}

const getHighlightStyle = (highlight: string) => {
    switch (highlight) {
        case 'start':
            return 'rounded-l-full bg-gray-400';
        case 'end':
            return 'rounded-r-full bg-gray-400';
        case 'between':
            return 'bg-gray-200';
    }

    return '';
};

const Day: React.FC<Props> = ({ className = '', year, month, day, highlight, onClick }) => {
    if (day === 0) return <div />;

    const value = `${year}-${month + 1}-${day}`;
    const handleClick = (event: MouseEventHandler<HTMLDivElement>) => {
        onClick?.({
            value,
            year,
            month,
            day,
        });
    };

    return (
        <div
            data-id={value}
            className={`${getHighlightStyle(
                highlight
            )} calender-day w-10 h-10 grid place-content-center text-gray-600 cursor-pointer p-3`}
            onClick={handleClick}
        >
            {day}
        </div>
    );
};

export default Day;
