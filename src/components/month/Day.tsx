import React from 'react';
import { isWeekend } from '@appsaurora/utils';

interface Props {
    className?: string;
    date: Date;
    onClick?: (obj: { value: string }) => void;
}

const Day: React.FC<Props> = ({ className, date, onClick }) => {
    const value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();

        onClick?.({
            value,
        });
    };

    // Note: Do not remove calender-day class. text-slate-900 dark:text-white
    return (
        <div
            className={`calender-day  grid place-content-center aspect-square cursor-pointer p-2 ${
                isWeekend(date) ? 'text-slate-400 dark:text-slate-500' : `text-slate-900 dark:text-slate-200`
            }`}
            data-id={value}
            data-testid={`date_${value}`} 
            onClick={handleClick}
        >
            <div className={`${className} p-2 rounded-full w-8 h-8 grid place-content-center aspect-square`}>{date.getDate()}</div>
        </div>
    );
};

export default Day;
