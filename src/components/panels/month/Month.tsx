import React from 'react';
import Day, { HIGHLIGHT_TYPE } from './Day';
import { addDays, compare } from '../../../apps/calender/helper';
import WeekHeader from './WeekHeader';

interface Props {
    monthClassName?: string;
    dayClassName?: string;
    year: number;
    month: number;
    onClick: (obj: { value: string; year: number; month: number; day: number }) => void;
    startDate: string;
    endDate: string;
}

const ROWS = 5;
const COLS = 7;
const FIRST_DAY = 1;

const Month: React.FC<Props> = ({ monthClassName, dayClassName, year, month, startDate, endDate, onClick }) => {
    const date = new Date(year, month, FIRST_DAY);
    const firstDayOfNextMonth = new Date(year, month + 1, FIRST_DAY);

    const day = date.getDay();
    const days: any[] = day === 0 ? [] : Array(date.getDay() - 1).fill(<Day year={year} month={month} day={0} />);

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
        <div className={`grid grid-cols-7 grid-rows-5 min-w-70`}>
            <WeekHeader />
            {days}
        </div>
    );
};

export default Month;
