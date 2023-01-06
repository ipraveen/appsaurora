import React from 'react';
import HeaderInfo from './HeaderInfo';
import { formateDate, getDateRangeDetails } from './helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
    year: number;
    startDate: string;
    endDate: string;
}

const CalenderHeader: React.FC<Props> = ({ startDate, endDate }) => {
    const { days, weekends, weekdays } = getDateRangeDetails(startDate, endDate);

    return (
        <div className="">
            <div className="flex items-center justify-around">
                <HeaderInfo value={days} label="Days" />
                <HeaderInfo value={weekends} label="Weekends" />
                <HeaderInfo value={weekdays} label="Weekdays" />
            </div>
        </div>
    );
};

export default CalenderHeader;
