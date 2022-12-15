import React from 'react';
import { Month } from 'components/panels';
import { months } from './config';

interface Props {
    year: number;
    onClick: (obj: { value: string; year: number; month: number; day: number }) => void;
    startDate: string | null;
    endDate: string | null;
}

const Year = ({ year, onClick, startDate, endDate }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {months.map(({ value, label }, index) => (
                <Month
                    label={label}
                    key={value}
                    year={year}
                    month={value}
                    onClick={onClick}
                    startDate={startDate}
                    endDate={endDate}
                    tabIndex={index + 1}
                />
            ))}
        </div>
    );
};

export default Year;
