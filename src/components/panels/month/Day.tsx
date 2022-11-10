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
    let color = 'bg-orange-100';

    switch (highlight) {
        case 'start':
            return 'rounded-l-full ' + color;
        case 'end':
            return 'rounded-r-full ' + color;
        case 'between':
            return  color;
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
            )}  calender-day w-10 h-10 grid place-content-center text-gray-600 cursor-pointer p-3`}
            onClick={handleClick}
        >
            {day}
        </div>
    );
};

export default Day;
