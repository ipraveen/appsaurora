import AutoCompleteField, { AutoCompleteOption } from '@/components/core/AutoComplete';
import React, { useState } from 'react';

interface Props {
    className?: string;
    value: AutoCompleteOption | null;
    onChange: (value: AutoCompleteOption) => void;
    tabIndex?: number;
}

const YearField: React.FC<Props> = ({ className, onChange, value, tabIndex }) => {
    const [years] = useState(() => {
        const years: AutoCompleteOption[] = [];
        let counter = 0;
        const year = new Date().getFullYear();
        while (counter < 100) {
            const currentYear = `${year - counter}`;
            years.push({
                label: currentYear,
                value: currentYear,
            });
            counter++;
        }
        return years;
    });

    const handleChange = (value: AutoCompleteOption) => {
        onChange(value);
    };

    return (
        <div className={className}>
            <input className='border border-slate-300 rounded-md py-2 px-4' placeholder='Year' type='number' min={1900} max={new Date().getFullYear()}/>
            <AutoCompleteField
                tabIndex={tabIndex}
                className="w-32"
                label="Year"
                options={years}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default YearField;
