import React from 'react';
import HeaderInfo from './HeaderInfo';
import { getDateRangeDetails } from './helper';

interface Props {
    year: number;
    startDate: string | null;
    endDate: string | null;
}

const CalenderSelectionInformation: React.FC<Props> = ({ startDate, endDate }) => {
    const { days, weekends, weekdays } = getDateRangeDetails(startDate, endDate);

    return (
        <div className="flex items-center justify-around">
            <HeaderInfo dataId="days-count" value={days} color="#393939" label="Days" />
            <HeaderInfo dataId="weekdays-count" value={weekdays} color="#0ea5e9" label="Weekdays" />
            <HeaderInfo dataId="weekend-count" value={weekends} color="#43A088" label="Weekends" />
        </div>
    );
};

export default CalenderSelectionInformation;
