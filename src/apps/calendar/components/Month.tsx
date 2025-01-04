import React, { useMemo } from 'react';
import Day from './Day';
import { addDays, isDateInBetween, isSameDay, isWeekend, parseISODate } from '@/utils/date';
import WeekHeader from './WeekHeader';
import { Paper } from '@/components/core';
import useTodayDate from '../hooks/useTodayDate';
import clsx from 'clsx';
import isWithinInterval from 'date-fns/isWithinInterval';
import type { DayMetadata } from '../types';

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

// const getTodayHighlight = (today: Date, date: Date) => {
//     if (isSameDay(date, today)) {
//         return `day-today bg-red-500 text-white rounded-full`;
//     }
//     return '';
// };

const getDayIdx = (dayIdx) => {
    return dayIdx === 0 ? 6 : dayIdx - 1;
};

const buildDaysMetadata = ({ year, month, today, startDate, endDate }) => {
    const firstDay = new Date(year, month, FIRST_DAY);
    // const firstDayOfNextMonth = new Date(year, month + 1, FIRST_DAY);

    const firstDayInCal = addDays(firstDay, -1 * getDayIdx(firstDay.getDay()));
    const lastDayInCal = addDays(firstDayInCal, 41); // (7 * 6 ) - 1

    let date = firstDayInCal;


    const metadata: DayMetadata[] = [];

    while (date <= lastDayInCal) {
        let isStartDate = false;
        let isEndDate = false;
        let isInBetweenDate = false;

        if (startDate) {
            const startDateObj = new Date(startDate)
            isStartDate = isSameDay(startDateObj, date);

           
        }

        if (endDate) {
            const isEndDateObj = new Date(endDate)
            isEndDate = isSameDay(isEndDateObj, date);
        }

        if (startDate && endDate) {
            const startDateObj = new Date(startDate);
            const isEndDateObj = new Date(endDate);
            isInBetweenDate = isDateInBetween(date, startDateObj, isEndDateObj);
        }


      
        metadata.push({
            date,
            isCurrentMonth: date.getMonth() === month,
            isToday: isSameDay(today, date),
            isStartDate,
            isEndDate,
            isInBetweenDate,
            isWeekend: isWeekend(date),
        });

        date = addDays(date, 1);
    }

    return metadata;
};

const Month = ({ label, year, month, startDate, endDate, onClick, tabIndex }: Props) => {
    const [today] = useTodayDate();

   //  const metadataArr = buildDaysMetadata({ year, month, today, startDate, endDate });

    const metadataArr = useMemo(() => buildDaysMetadata({ year, month, today, startDate, endDate }), [year, month, today, startDate, endDate])

    // if(month === 11){
    //     console.log('==> metadataArr: ', today, metadataArr)
    // }

    // if (today == null) return null;

    // const day = date.getDay();
    // const dayNaturalIndex = day === 0 ? 7 : day;

    // const days: any[] = [];
    // for (let i = 0; i < dayNaturalIndex - 1; i++) {
    //     days.push(<div key={i} />);
    // }

    // while (date < firstDayOfNextMonth) {
    //     let className = '';

    //     if (startDate || endDate) {
    //         className = `${getSelectionHighlight(date, startDate, endDate)}`;
    //     } else {
    //         className = getTodayHighlight(today, date);
    //     }

    //     days.push(<Day onClick={onClick} className={className} key={date.getTime()} date={new Date(date)} />);
    //     addDays(date, 1);
    // }

    // console.log(">> metadataArr: ", metadataArr)
    return (
        <Paper className="p-6" tabIndex={tabIndex}>
            <h1 className="text-theme-600 dark:text-slate-400 font-semibold align-middle text-md mb-2 uppercase">
                {label}
            </h1>
            <div className={`grid grid-cols-7 grid-rows-5 gap-y-1`}>
                <WeekHeader />
                {metadataArr.map((metadata) => (
                    <Day onClick={onClick} key={metadata.date.getTime()} metadata={metadata} startDate={startDate} endDate={endDate}/>
                ))}
            </div>
        </Paper>
    );
};

export default Month;
