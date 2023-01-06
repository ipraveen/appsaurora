import React from 'react';
import Day, { HIGHLIGHT_TYPE } from './Day';
import { addDays } from '../../../apps/calender/helper';
import WeekHeader from './WeekHeader';
import { Paper } from 'components/parts';
import * as dateUtil from 'utils/dateUtil';

interface Props {
    label: string;
    year: number;
    month: number;
    onClick: (obj: { value: string; year: number; month: number; day: number }) => void;
    startDate?: string;
    endDate?: string;
    tabIndex?: number;
}

const FIRST_DAY = 1;

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
        let className = 'bg-theme-200';

        if (startDate && dateUtil.compare(date, startDate) === 0) {
            className += ' rounded-l-full';
        } else if (endDate && dateUtil.compare(date, endDate) === 0) {
            className += ' rounded-r-full';
        } else if (
            startDate &&
            endDate &&
            dateUtil.compare(date, startDate) === 1 &&
            dateUtil.compare(date, new Date(endDate)) === -1
        ) {
            className = 'bg-theme-200';
        } else {
            className = '';
        }

        days.push(
            <Day
                onClick={onClick}
                className={className}
                key={date.getTime()}
                year={year}
                month={month}
                day={date.getDate()}
            />
        );
        addDays(date, 1);
    }
    // className="border rounded-2xl border-theme-400 p-6 outline-slate-400 bg-white"
    return (
        <Paper elevation={0} variant="outlined" className="p-6" tabIndex={tabIndex}>
            <h1 className="text-theme-00 font-semibold align-middle text-md mb-2 uppercase">{label}</h1>
            <div className={`grid grid-cols-7 grid-rows-5 min-w-70 `}>
                <WeekHeader />
                {days}
            </div>
        </Paper>
    );
};

export default Month;
