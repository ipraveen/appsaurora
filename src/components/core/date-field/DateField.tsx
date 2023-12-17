import { AutoCompleteOption } from 'components/core/AutoComplete';
import React, { useEffect, useState } from 'react';
import MonthField from './Month';
import YearField from './YearField';
import DateSelect from './DateSelect';
import NumberInput from '../inputs/NumberInput';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import clsx from 'clsx';

interface Props {
    className?: string;
    onChange: (value: Date | null) => void;
    value: Date | null;
    onValidityChange?: (value: boolean) => void;
    error?: string;
}

const DateField: React.FC<Props> = ({ className, onChange, value, onValidityChange, error }) => {
    const [year, setYear] = useState<number | null>(null);
    const [month, setMonth] = useState<number | null>(null);
    const [date, setDate] = useState<number | null>(null);
    const [validYear, setValidYear] = useState(true);
    const [validMonth, setValidMonth] = useState(true);
    const [validDate, setValidDate] = useState(true);
    const [noOfDaysInMonth, setNoOfDaysInMonth] = useState(31);
    const [valid, setValid] = useState(true);

    console.log({ value, year, month, date, noOfDaysInMonth, valid, validYear, validMonth, validDate });

    useEffect(() => {
        if (year && month) {
            setNoOfDaysInMonth(getDaysInMonth(new Date(year, month - 1)));
        }
        if (year && month && date) {
            onChange(new Date(year, month - 1, date));
        } else {
            onChange(null);
        }
    }, [year, month, date]);

    useEffect(() => {
        const isValid = validYear && validMonth && validDate;
        setValid(isValid);
        onValidityChange?.(isValid);
    }, [validYear, validMonth, validDate]);

    useEffect(() => {
        if (value == null) {
            setYear(null);
            setMonth(null);
            setDate(null);
        } 
    }, [value]);

    return (
        <div>

         
        <div
            className={clsx('flex gap-4 justify-start bg-white  dark:bg-slate-400 rounded-lg', className, {
                'border-red-600': !valid,
            })}
        >
            <NumberInput
                className="w-20"
                placeholder='Year'
                value={year}
                onChange={(value) => setYear(value)}
                min={0}
                max={new Date().getFullYear()}
                required={true}
                valid={validYear}
                onValidityChange={(valid) => setValidYear(valid)}
            />
            <NumberInput
                className="w-20"
                placeholder='Month'
                value={month}
                onChange={(value) => setMonth(value)}
                min={1}
                max={12}
                required={true}
                valid={validMonth}
                onValidityChange={(valid) => setValidMonth(valid)}
            />
            <NumberInput
                className="w-20"
                placeholder='Date'
                value={date}
                onChange={(value) => setDate(value)}
                min={0}
                max={noOfDaysInMonth}
                required={true}
                valid={validDate}
                onValidityChange={(valid) => setValidDate(valid)}
            />
        </div>

        {error && <p className='text-red-600 my-2'>{error}</p>}
        </div>
    );
};

export default DateField;
