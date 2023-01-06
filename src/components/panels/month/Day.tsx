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
    highlight?: HIGHLIGHT_TYPE;
}

// const getHighlightStyle = (highlight: string) => {
//     let color = 'bg-theme-200';

//     switch (highlight) {
//         case 'start':
//             return 'rounded-l-full ' + color;
//         case 'end':
//             return 'rounded-r-full ' + color;
//         case 'between':
//             return  color;
//     }

//     return '';
// };

const Day: React.FC<Props> = ({ className, year, month, day, highlight, onClick }) => {
    if (day === 0) return <div />;

    const value = `${year}-${month + 1}-${day}`;
    const handleClick = () => {
        onClick?.({
            value,
            year,
            month,
            day,
        });
    };

    // Note: Do not remove calender-day class.
    return (
        <div
            data-id={value}
            className={`${className} calender-day grid place-content-center text-theme-800 cursor-pointer p-3`}
            onClick={handleClick}
        >
            {day}
        </div>
    );
};

export default Day;
