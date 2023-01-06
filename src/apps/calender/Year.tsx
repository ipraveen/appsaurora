import React from 'react';
import { Month } from 'components/panels';
import { months } from './config';

interface Props {
    year: number;
    onClick: (obj: { value: string; year: number; month: number; day: number }) => void;
    startDate: any;
    endDate: any;
}

const Year = ({ year, onClick, startDate, endDate }: Props) => {
    console.log({ startDate, endDate });
    return (
        <div>
            <h1 className="text-4xl font-medium mt-6">{year}</h1>

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
        </div>
    );
};

export default Year;
