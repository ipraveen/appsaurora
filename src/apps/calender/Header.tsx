import React from 'react';
import HeaderInfo from './HeaderInfo';
import { formateDate, getDateRangeDetails } from './helper';

interface Props {
    year: number;
    startDate: string | null;
    endDate: string | null;
}

const Header: React.FC<Props> = ({ year, startDate, endDate }) => {
    const showStats = startDate && endDate;
    const { days, weekends, weekdays } = getDateRangeDetails(startDate, endDate);

    return (
        <div className="sticky top-0 z-10 bg-white rounded-t-xl">
            {!showStats && (
                <>
                    <h1 className="h-24 grid place-content-center text-4xl">{year}</h1>
                </>
            )}

            {showStats && (
                <>
                    <div className="flex items-center justify-center p-2 ">
                        <span className="text-sm text-gray-500">
                            {formateDate(startDate)} - {formateDate(endDate)}{' '}
                        </span>
                    </div>
                    <div className="flex items-center justify-around p-4">
                        <HeaderInfo value={days} label="Days: " />
                        <HeaderInfo value={weekends} label="Weekends: " />
                        <HeaderInfo value={weekdays} label="Weekdays" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;

/* <h1 className="text-3xl mb-4">{year}</h1> */
