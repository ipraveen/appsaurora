import React from 'react';
import Month from 'components/month/Month';
import { months } from './config';

interface Props {
    year: number;
    onClick: (obj: { value: string; }) => void;
    startDate: any;
    endDate: any;
    className?: string;
    hideLabel?: boolean;
}

const Year = ({ year, onClick, startDate, endDate, className, hideLabel = false }: Props) => {
    return (
        <div className={className}>
            {!hideLabel && <h1 className="text-4xl font-medium my-2 dark:text-slate-400">{year}</h1>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
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
