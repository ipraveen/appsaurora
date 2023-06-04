import styled from '@emotion/styled';
import React from 'react';
import { isWeekend } from 'utils/dateUtil';

interface Props {
    className?: string;
    date: Date;
    onClick?: (obj: { value: string }) => void;
}

const Day: React.FC<Props> = ({ className, date, onClick }) => {
    const value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const handleClick = () => {
        onClick?.({
            value,
        });
    };


    // Note: Do not remove calender-day class.
    return (
        <div
            className={`calender-day ${className} grid place-content-center cursor-pointer p-2 ${
                isWeekend(date) ? 'text-slate-400' : `text-slate-900`
            }`}
            data-id={value}
            onClick={handleClick}
        >
            {date.getDate()}
        </div>
    );
};

export default Day;
