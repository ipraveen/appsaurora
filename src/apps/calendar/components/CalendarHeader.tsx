import { Checkbox } from '@/components/core';
import React from 'react';

export default function CalendarHeader({ year, showNextYear, showPreviousYear, setShowNextYear, setShowPreviousYear }) {
    const [pYear, nYear] = [year - 1, year + 1];

    return (
        <div className="flex justify-between items-baseline z-30">
            <h1 className="text-4xl font-medium my-2 dark:text-slate-400">{year}</h1>
            <div className="flex justify-between items-baseline gap-4">
                <Checkbox
                    className="text-xl font-medium dark:text-slate-400"
                    id={`${pYear}`}
                    label={pYear}
                    checked={showPreviousYear}
                    onChange={(event) => {
                        setShowPreviousYear(event.target.checked);
                    }}
                />

                <Checkbox
                    className="text-xl font-medium dark:text-slate-400"
                    id={`${nYear}`}
                    label={nYear}
                    checked={showNextYear}
                    onChange={(event) => setShowNextYear(event.target.checked)}
                />
            </div>
        </div>
    );
}
