import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInDays from 'date-fns/differenceInDays';
import compareAsc from 'date-fns/compareAsc';
import * as dateFns from 'date-fns';

// Direct Export
import lastDayOfMonth from 'date-fns/lastDayOfMonth';

export { lastDayOfMonth };

export const getCurrentYear = () => new Date().getFullYear();
export const parseISODate = (date: string) => dateFns.parseISO(date);

export const isYearSame = (d1: Date, d2: Date) => d1.getFullYear() === d2.getFullYear();
export const isMonthSame = (d1: Date, d2: Date) => d1.getMonth() === d2.getMonth();

export const isSameDay = (d1: Date, d2: Date) => dateFns.isSameDay(d1, d2);
export const dateCompareAsc = (d1: Date, d2: Date) => dateFns.compareAsc(d1, d2);
export const isDateInBetween = (base: Date, d1: Date, d2: Date) =>
    dateFns.compareAsc(d1, base) === -1 && dateFns.compareAsc(base, d2) === -1; // d1 > base > d2
export const addDays = (date: Date, value: number) => dateFns.addDays(date, value);

export const subtractDays = (date: Date, value: number) => addDays(date, -1 * value);

export const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

export const getISODateString = (date: Date) => date.toISOString().split('T')[0];

type DateType = string | number | Date;
export const compare = (d1: DateType, d2: DateType) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    return compareAsc(date1, date2);
};

export const getFirstDateOfMonth = (year: number, month: number) => new Date(year, month, 1);

type diffTypes = 'month' | 'days' | 'year';
export const dateDiff = (date1: Date, date2: Date, type: diffTypes = 'days') => {
    if (type === 'month') {
        return differenceInMonths(date1, date2);
    }

    return differenceInDays(date1, date2);
};

export const formateDate = (date: Date | string | null) => {
    if (date === null) return '';

    if (typeof date === 'string') {
        date = new Date(date);
    }

    return new Intl.DateTimeFormat().format(date);
};
