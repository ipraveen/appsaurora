import React from 'react';
import { Month } from 'components/panels';
import { months } from './config';

interface Props {
    year: number;
    onClick: (obj: { value: string; year: number; month: number; day: number }) => void;
    startDate: string | null;
    endDate: string | null;
}

const Year: React.FC<Props> = ({ year, onClick, startDate, endDate }) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-20">
                {months.map(({ value, label }) => (
                    <div>
                        <h1 className="text-red-900 text-xl mb-2">{label}</h1>
                        <Month
                            key={value}
                            year={year}
                            month={value}
                            onClick={onClick}
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Year;
