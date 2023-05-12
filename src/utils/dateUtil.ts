import moment from 'moment';

export const getCurrentYear = () => new Date().getFullYear();

const isYearSame = (d1: Date, d2: Date) => d1.getFullYear() === d2.getFullYear();
const isMonthSame = (d1: Date, d2: Date) => d1.getMonth() === d2.getMonth();
const isDateSame = (d1: Date, d2: Date) => d1.getDate() === d2.getDate();

export const addDays = (date: Date, value: number) => date.setDate(date.getDate() + value);

export const subtractDays = (date: Date, value: number) => addDays(date, -1 * value);

export const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

export const getISODateString = (date: Date) => date.toISOString().split('T')[0];

type DateType = string | number | Date;
export const compare = (d1: DateType, d2: DateType) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    // Check if date are equal, ignore time.
    if (isYearSame(date1, date2) && isMonthSame(date1, date2) && isDateSame(date1, date2)) {
        return 0;
    }

    if (date1 > date2) {
        return 1;
    }
    return -1;
};

export const getLastDateOfMonth = (year: number, month: number) => {
    const date = new Date(year, month + 1, 1);
    subtractDays(date, 1);
    return date;
};

export const getFirstDateOfMonth = (year: number, month: number) => new Date(year, month, 1);

export const diff = (date1: Date, date2: Date) => {
    const m1 = moment(date1);
    const m2 = moment(date2);

    return m1.diff(m2, 'months', true);
};
