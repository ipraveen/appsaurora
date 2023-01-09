import AutoCompleteField, { AutoCompleteOption } from 'components/parts/AutoComplete';
import React, { useState } from 'react';

interface Props {
    className?: string;
    value: AutoCompleteOption | null;
    onChange: (value: AutoCompleteOption) => void;
    tabIndex?: number;
}

const months = [
    { label: 'January', labelShort: 'Jan', value: 0, labelNumber: '01' },
    { label: 'February', labelShort: 'Feb', value: 1, labelNumber: '02' },
    { label: 'March', labelShort: 'Mar', value: 2, labelNumber: '03' },
    { label: 'April', labelShort: 'Apr', value: 3, labelNumber: '04' },
    { label: 'May', labelShort: 'May', value: 4, labelNumber: '05' },
    { label: 'June', labelShort: 'June', value: 5, labelNumber: '06' },
    { label: 'July', labelShort: 'July', value: 6, labelNumber: '07' },
    { label: 'August', labelShort: 'Aug', value: 7, labelNumber: '08' },
    { label: 'September', labelShort: 'Sept', value: 8, labelNumber: '09' },
    { label: 'October', labelShort: 'Oct', value: 9, labelNumber: '10' },
    { label: 'November', labelShort: 'Nov', value: 10, labelNumber: '11' },
    { label: 'December', labelShort: 'Dec', value: 11, labelNumber: '12' },
];
const MonthField: React.FC<Props> = ({ className, onChange, value, tabIndex }) => {
    const handleChange = (value: AutoCompleteOption) => {
        onChange(value);
    };
    return (
        <div className={className}>
            <AutoCompleteField
                className="w-36"
                label="Month"
                value={value}
                tabIndex={tabIndex}
                options={months.map(({ labelNumber, labelShort, value }) => ({
                    label: `${labelNumber} - ${labelShort}`,
                    value: `${value}`,
                }))}
                onChange={handleChange}
            />
        </div>
    );
};

export default MonthField;
