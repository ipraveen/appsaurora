import React from 'react';
import HeaderInfo from './HeaderInfo';
import { formateDate, getDateRangeDetails } from './helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
    year: number;
    startDate: string | null;
    endDate: string | null;
}

const Header: React.FC<Props> = ({ year, startDate, endDate }) => {
    const showStats = startDate && endDate;
    const { days, weekends, weekdays } = getDateRangeDetails(startDate, endDate);

    return (
        <div className="sticky top-0 z-10 bg-slate-200 rounded-4xl transition duration-1000 ease-out">
            {!showStats && (
                <>
                    <h1 className="grid place-content-center text-4xl text-gray-700 p-4">{year}</h1>
                    <div className="flex justify-around px-6 py-4">
                        <div className='flex gap-2 items-center text-sm text-slate-600' >
                            <FontAwesomeIcon className="" icon={faInfoCircle} />
                            <span>Click to select date range.</span>
                        </div>

                        <div className='flex gap-2 items-center text-sm text-slate-600' >
                            <FontAwesomeIcon className="" icon={faInfoCircle} />
                            <span>Click outside to clear selection</span>
                        </div>
                    </div>
                </>
            )}

            {showStats && (
                <>
                    <div className="flex items-center justify-center p-2 ">
                        <span className="text-sm text-slate-900">
                            {formateDate(startDate)} - {formateDate(endDate)}{' '}
                        </span>
                    </div>
                    <div className="flex items-center justify-around p-4">
                        <HeaderInfo value={days} label="Days" />
                        <HeaderInfo value={weekends} label="Weekends" />
                        <HeaderInfo value={weekdays} label="Weekdays" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;

/* <h1 className="text-3xl mb-4">{year}</h1> */
