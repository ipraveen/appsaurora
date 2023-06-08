import { AutoCompleteOption } from 'components/core/AutoComplete';
import React, { useEffect, useState } from 'react';
import MonthField from './Month';
import YearField from './YearField';
import DateSelect from './DateSelect';

interface Props {
    className?: string;
    onChange: (value: Date) => void;
    value: Date | null;
}

const DateField: React.FC<Props> = ({ className, onChange, value }) => {
    const [year, setYear] = useState<AutoCompleteOption | null>(null);
    const [month, setMonth] = useState<AutoCompleteOption | null>(null);
    const [date, setDate] = useState<AutoCompleteOption | null>(null);

    useEffect(() => {
        if (year && month && date) {
            onChange(new Date(Number(year.value), Number(month.value), Number(date.value)));
        }
    }, [year, month, date]);

    useEffect(() => {
        if (value == null) {
            setYear(null);
            setMonth(null);
            setDate(null);
        }
    }, [value]);

    return (
        <div className={`flex gap-4 bg-white  dark:bg-slate-400 rounded-lg p-4 ${className}`}>
            <YearField tabIndex={1} value={year} onChange={setYear} />
            <MonthField tabIndex={2} value={month} onChange={setMonth} />
            <DateSelect tabIndex={3} year={year} month={month} date={date} onChange={setDate} />
        </div>
    );
};

export default DateField;
