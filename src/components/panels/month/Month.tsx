import React from 'react';
import Day from './Day';
import { addDays } from '../../../apps/calendar/helper';
import WeekHeader from './WeekHeader';
import { Paper } from 'components/parts';
import * as dateUtil from 'utils/dateUtil';

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
    const baseClass = 'bg-theme-200';

    if (startDate && dateUtil.compare(date, startDate) === 0) {
        return `${baseClass} rounded-l-full`;
    } else if (endDate && dateUtil.compare(date, endDate) === 0) {
        return `${baseClass} rounded-r-full`;
    } else if (
        startDate &&
        endDate &&
        dateUtil.compare(date, startDate) === 1 &&
        dateUtil.compare(date, new Date(endDate)) === -1
    ) {
        return baseClass;
    }
    return getTodayHighlight(date);
};

const getTodayHighlight = (date: Date) => {
    const today = new Date();

    if (dateUtil.compare(date, today) === 0) {
        return `bg-red-600 text-white rounded-full h-8 w-8 `;
    }
    return '';
};

const Month = ({ label, year, month, startDate, endDate, onClick, tabIndex }: Props) => {
    const date = new Date(year, month, FIRST_DAY);
    const firstDayOfNextMonth = new Date(year, month + 1, FIRST_DAY);

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
            className = getTodayHighlight(date);
        }

        days.push(
            <Day
                onClick={onClick}
                className={className}
                key={date.getTime()}
                date={new Date(date)}
            />
        );
        addDays(date, 1);
    }
    return (
        <Paper elevation={1} variant="outlined" className="p-6" tabIndex={tabIndex}>
            <h1 className="text-theme-600 font-semibold align-middle text-md mb-2 uppercase">{label}</h1>
            <div className={`grid grid-cols-7 grid-rows-5`}>
                <WeekHeader />
                {days}
            </div>
        </Paper>
    );
};

export default Month;
