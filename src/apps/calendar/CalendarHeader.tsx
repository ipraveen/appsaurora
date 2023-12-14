import React from 'react';
import HeaderInfo from './HeaderInfo';
import { getDateRangeDetails } from './helper';

interface Props {
    year: number;
    startDate: string;
    endDate: string;
}

const CalenderHeader: React.FC<Props> = ({ startDate, endDate }) => {
    const { days, weekends, weekdays } = getDateRangeDetails(startDate, endDate);

    return (
        <div className="flex items-center justify-around">
            <HeaderInfo value={days} color="#e11d48" label="Days" />
            <HeaderInfo value={weekdays} color="#0ea5e9" label="Weekdays" />
            <HeaderInfo value={weekends} color="#43A088" label="Weekends" />
        </div>
    );
};

export default CalenderHeader;
