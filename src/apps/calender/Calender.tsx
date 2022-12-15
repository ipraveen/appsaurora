import CalenderHeader from './CalenderHeader';
import React, { MouseEvent, useState } from 'react';
import Year from './Year';
import { compare } from './helper';

const Calender = () => {
    const [year] = useState(2022);
    const [startDate, setStartDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(null);

    const onClick = ({ value }: { value: string }) => {
        console.log('selected date: ', value);
        if (startDate == null) {
            setStartDate(value);
        }

        if (startDate && endDate == null) {
            const sDate = new Date(startDate);
            const eDate = new Date(value);

            if (compare(sDate, eDate) === 0) {
                return;
            }

            if (compare(sDate, eDate) === 1) {
                setEndDate(startDate);
                setStartDate(value);
                return;
            }

            setEndDate(value);
        }

        if (startDate && endDate) {
            setStartDate(value);
            setEndDate(null);
        }
    };

    const onClearClick = (event: MouseEvent<HTMLDivElement>) => {
        const elemnet = event.target as Element;

        if (elemnet.classList.contains('calender-day')) return;
        setStartDate(null);
        setEndDate(null);
    };

    return (
        <div onClick={onClearClick}>
            <CalenderHeader year={year} startDate={startDate} endDate={endDate} />
            <div className="p-6">
                <Year year={year} onClick={onClick} startDate={startDate} endDate={endDate} />
            </div>
        </div>
    );
};

export default Calender;
