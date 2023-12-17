import { isWeekend, addDays } from '@appsaurora/utils';

export const getDateRangeDetails = (startDate: string | null, endDate: string | null) => {
    if (startDate == null || endDate == null) return { days: 0, weekends: 0, weekdays: 0 };
    
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

    return { days, weekends, weekdays };
};
