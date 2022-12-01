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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {months.map(({ value, label }, index) => (
                    <div className="border rounded-4xl border-slate-200 p-6 outline-slate-400 bg-white" tabIndex={index + 1}>
                        <h1 className="text-slate-900 font-semibold align-middle text-md mb-2 uppercase">{label}</h1>
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
