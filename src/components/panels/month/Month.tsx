import React from 'react';
import Day, { HIGHLIGHT_TYPE } from './Day';
import { addDays, compare } from '../../../apps/calender/helper';
import WeekHeader from './WeekHeader';

interface Props {
    label: string;
    dayClassName?: string;
    year: number;
    month: number;
    onClick: (obj: { value: string; year: number; month: number; day: number }) => void;
    startDate: string;
    endDate: string;
    tabIndex?: number;
}

const FIRST_DAY = 1;

const Month = ({ label, dayClassName, year, month, startDate, endDate, onClick, tabIndex }: Props) => {
    const date = new Date(year, month, FIRST_DAY);
    const firstDayOfNextMonth = new Date(year, month + 1, FIRST_DAY);

    const day = date.getDay();
    const dayNaturalIndex = day === 0 ? 7 : day;
    const days: any[] = Array(dayNaturalIndex - 1).fill(<Day year={year} month={month} day={0} />);

    while (date < firstDayOfNextMonth) {
        let highlight: HIGHLIGHT_TYPE = HIGHLIGHT_TYPE.NONE;

        if (compare(date, new Date(startDate)) === 0) {
            highlight = HIGHLIGHT_TYPE.START;
        } else if (compare(date, new Date(endDate)) === 0) {
            highlight = HIGHLIGHT_TYPE.END;
        } else if (compare(date, new Date(startDate)) === 1 && compare(date, new Date(endDate)) === -1) {
            highlight = HIGHLIGHT_TYPE.BETWEEN;
        }

        days.push(
            <Day
                onClick={onClick}
                className={dayClassName}
                key={date.getTime()}
                year={year}
                month={month}
                day={date.getDate()}
                highlight={highlight}
            />
        );
        addDays(date, 1);
    }

    return (
        <div className="border rounded-2xl border-theme-400 p-6 outline-slate-400 bg-white" tabIndex={tabIndex}>
            <h1 className="text-theme-800 font-semibold align-middle text-md mb-2 uppercase">{label}</h1>
            <div className={`grid grid-cols-7 grid-rows-5 min-w-70`}>
                <WeekHeader />
                {days}
            </div>
        </div>
    );
};

export default Month;
