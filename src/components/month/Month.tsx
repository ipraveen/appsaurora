import React from 'react';
import Day from './Day';
import { addDays, compare } from '@appsaurora/utils';
import WeekHeader from './WeekHeader';
import { Paper } from 'components/core';
import useTodayDate from './useTodayDate';
import isSameDay from 'date-fns/isSameDay';
import clsx from 'clsx';
import isWithinInterval from 'date-fns/isWithinInterval';

interface Props {
    label: string;
    year: number;
    month: number;
    onClick: (obj: { value: string }) => void;
    startDate?: string;
    endDate?: string;
    tabIndex?: number;
}

const FIRST_DAY = 1;

const getSelectionHighlight = (date: Date, startDate?: string, endDate?: string) => {
    // if (startDate && endDate && compare(date, startDate) === 1 && compare(date, new Date(endDate)) === -1) {
    //         return 'bg-slate-200 dark:bg-slate-600';
    //     }

    if (startDate && !endDate && isSameDay(date, new Date(startDate))) {
        return 'bg-slate-300 dark:bg-slate-600 rounded-full';
    }

    let inBetween = false;

    if (startDate && endDate && isWithinInterval(date, { start: new Date(startDate), end: new Date(endDate) })) {
        inBetween = true;
    }

    return clsx({
        'bg-slate-300 dark:bg-slate-600': inBetween,
        'bg-slate-300 rounded-l-full': startDate && isSameDay(date, new Date(startDate)),
        'bg-slate-300 rounded-r-full': endDate && isSameDay(date, new Date(endDate)),
    });

    // const baseClass = 'bg-slate-200 dark:bg-slate-600';

    // if (startDate && isSameDay(date, new Date(startDate))) {
    //     return `${baseClass} rounded-l-full`;
    // } else if (endDate && isSameDay(date, new Date(endDate))) {
    //     return `${baseClass} rounded-r-full`;
    // } else if (startDate && endDate && compare(date, startDate) === 1 && compare(date, new Date(endDate)) === -1) {
    //     return baseClass;
    // }
    // return getTodayHighlight(today, date);
};

const getTodayHighlight = (today: Date, date: Date) => {
    if (isSameDay(date, today)) {
        return `day-today bg-red-500 text-white rounded-full`;
    }
    return '';
};

const Month = ({ label, year, month, startDate, endDate, onClick, tabIndex }: Props) => {
    const [today] = useTodayDate();
    const date = new Date(year, month, FIRST_DAY);
    const firstDayOfNextMonth = new Date(year, month + 1, FIRST_DAY);

    if (today == null) return null;

    const day = date.getDay();
    const dayNaturalIndex = day === 0 ? 7 : day;

    const days: any[] = [];
    for (let i = 0; i < dayNaturalIndex - 1; i++) {
        days.push(<div key={i} />);
    }

    while (date < firstDayOfNextMonth) {
        let className = '';

        if (startDate || endDate) {
            className = `${getSelectionHighlight(date, startDate, endDate)}`;
        } else {
            className = getTodayHighlight(today, date);
        }

        days.push(<Day onClick={onClick} className={className} key={date.getTime()} date={new Date(date)} />);
        addDays(date, 1);
    }

    return (
        <Paper className="p-6" tabIndex={tabIndex}>
            <h1 className="text-theme-600 dark:text-slate-400 font-semibold align-middle text-md mb-2 uppercase">
                {label}
            </h1>
            <div className={`grid grid-cols-7 grid-rows-5`}>
                <WeekHeader />
                {days}
            </div>
        </Paper>
    );
};

export default Month;
