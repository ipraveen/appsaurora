import { isWeekend } from 'utils/dateUtil';

export const addDays = (date: Date, value: number) => date.setDate(date.getDate() + value);

export const subtractDays = (date: Date, value: number) => addDays(date, -1 * value);

export const formateDate = (date: Date | string | null) => {
    if (date === null) return '';

    if (typeof date === 'string') {
        date = new Date(date);
    }

    return new Intl.DateTimeFormat().format(date);
};

export const getDateRangeDetails = (startDate: string, endDate: string) => {
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    let days = 0;
    let weekends = 0;

    while (sDate <= eDate) {
        days += 1;
        if (isWeekend(sDate)) {
            weekends += 1;
        }
        addDays(sDate, 1);
    }

    const weekdays = days - weekends;

    console.log({
        startDate,
        endDate,
        days,
        weekends,
        weekdays,
    });

    return { days, weekends, weekdays };
};
