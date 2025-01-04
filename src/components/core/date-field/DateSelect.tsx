import TextField from '@/components/core/inputs/InputField';
import AutoComplete, { AutoCompleteOption } from '@/components/core/AutoComplete';
import React from 'react';
import { lastDayOfMonth, getFirstDateOfMonth, addDays } from '@appsaurora/utils';

interface Props {
    year: AutoCompleteOption | null;
    month: AutoCompleteOption | null;
    date: AutoCompleteOption | null;
    className?: string;
    onChange: (value: AutoCompleteOption) => void;
    tabIndex?: number;
}

const DateSelect: React.FC<Props> = ({ className, year, month, date, onChange, tabIndex }) => {
    if (year == null || month == null) {
        return <TextField className="w-16" disabled label="Date" />;
    }
    const firstDate = getFirstDateOfMonth(Number(year.value), Number(month.value));
    const lastDate = lastDayOfMonth(new Date(Number(year.value), Number(month.value) + 1, 1));
    const generateOptions = () => {
        const options: AutoCompleteOption[] = [];
        const date = new Date(firstDate);
        while (date <= lastDate) {
            const currentDate = date.getDate();
            options.push({
                label: `${currentDate}`,
                value: `${currentDate}`,
            });
            addDays(date, 1);
        }

        return options;
    };

    const handleChange = (value: AutoCompleteOption) => {
        onChange(value);
    };

    return (
        <div className={className}>
            <AutoComplete
                tabIndex={tabIndex}
                value={date}
                className="w-32"
                label="Date"
                options={generateOptions()}
                onChange={handleChange}
            />
        </div>
    );
};

export default DateSelect;
