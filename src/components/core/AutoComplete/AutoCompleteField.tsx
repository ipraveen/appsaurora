import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AutoCompleteOption } from './types';
import styled from '@emotion/styled';

interface Props {
    className?: string;
    options: AutoCompleteOption[];
    id?: string;
    label?: string;
    onChange: (value: AutoCompleteOption) => void;
    value?: AutoCompleteOption | null;
    tabIndex?: number;
}

const StyledAutoComplete = styled(Autocomplete)`
    
   
`

const AutoCompleteField: React.FC<Props> = ({ id, className, options, label, onChange, value, tabIndex = 0 }) => {
    return (
        <StyledAutoComplete
            className={className}
            tabIndex={tabIndex}
            disablePortal
            id={id}
            options={options}
            autoSelect
            value={value}
            // getOptionLabel={(option) => option.label || ''}
            // autoComplete
            // selectOnFocus
            blurOnSelect
            onChange={(event, option) => {
                event.stopPropagation();
                option && onChange(option);
            }}
            renderInput={(params) => {
                return <TextField {...params} label={label} />;
            }}
            // isOptionEqualToValue={(option: Option, value: any) => {

            //     return true;
            // }}
        />
    );
};

export default AutoCompleteField;
