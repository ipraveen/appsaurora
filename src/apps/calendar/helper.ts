import { isWeekend, addDays } from '@appsaurora/utils';

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
