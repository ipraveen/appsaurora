import React from 'react';
import { isWeekend } from '@appsaurora/utils';
import type { DayMetadata } from '../types';
import clsx from 'clsx';

interface Props {
    className?: string;
    metadata: DayMetadata;
    startDate?: string;
    endDate?: string;
    onClick?: (obj: { value: string }) => void;
}

// const getSelectionHighlight = (date: Date, startDate?: string, endDate?: string) => {
//     if (startDate && !endDate && isSameDay(date, new Date(startDate))) {
//         return 'bg-slate-300 dark:bg-slate-600 rounded-full';
//     }

//     let inBetween = false;

//     if (startDate && endDate && isWithinInterval(date, { start: new Date(startDate), end: new Date(endDate) })) {
//         inBetween = true;
//     }

//     return clsx({
//         'bg-slate-300 dark:bg-slate-600': inBetween,
//         'bg-slate-300 rounded-l-full': startDate && isSameDay(date, new Date(startDate)),
//         'bg-slate-300 rounded-r-full': endDate && isSameDay(date, new Date(endDate)),
//     });
// };
const Day: React.FC<Props> = ({ className, metadata, onClick, startDate, endDate }) => {
    const { date, isWeekend, isToday, isCurrentMonth, isStartDate, isEndDate, isInBetweenDate } = metadata;

    const value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();

        if (!isCurrentMonth) return;

        onClick?.({
            value,
        });
    };

    let backgroundClassName = 'flex justify-center align-center  w-full aspect-square gap-y-4 p-1';

    if (isCurrentMonth) {
        if (startDate && endDate) {
            backgroundClassName = clsx(
                backgroundClassName,
                {
                    'bg-blue-100 ': isStartDate || isEndDate || isInBetweenDate,
                },
                {
                    'rounded-l-full': isStartDate,
                },
                {
                    'rounded-r-full': isEndDate,
                }
            );
        } else {
            backgroundClassName = clsx(backgroundClassName, {
                'bg-blue-100 rounded-full': isStartDate,
            });
        }
    }

    let cName = clsx(className, 'grid place-content-center  w-full aspect-square');

    if (isCurrentMonth) {
        cName = clsx(
            cName,
            'cursor-pointer ',
            {
                'text-slate-400 dark:text-slate-500': isWeekend,
            },
            {
                'rounded-full': isToday || isStartDate || isEndDate,
            },
            {
                'bg-red-500 text-white': isToday,
            },
            {
                'bg-blue-500 text-white': isStartDate,
            },
            {
                'bg-blue-500 text-white': isEndDate,
            }
        );
    } else {
        cName = clsx(cName, 'text-zinc-300 dark:text-slate-500');
    }

    return (
        <div className={backgroundClassName} data-id={value} data-testid={`date_${value}`} onClick={handleClick}>
            <div className={cName}>{date.getDate()}</div>
        </div>
    );
};

export default Day;
