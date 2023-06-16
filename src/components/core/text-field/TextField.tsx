import React, { useState } from 'react';
import styled from '@emotion/styled';

type NumberInput = {
    type: 'number';
    value: number;
    min?: number;
    max?: number;
    onChangeValue?: (value: number) => void;
};

type TextInput = {
    type: 'text';
    value: string;
    disabled?: boolean;
    onChangeValue?: (value: string) => void;
};

type Input = {
    className?: string;
    type: 'number' | 'text';
    placeholder?: string;
    onChange?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onChangeValue?: (value: string | number) => void;
};

type Props = Input & (NumberInput | TextInput);

const StyledInput = styled.input`
    border-radius: 5px;
    &:invalid {
        border: 1px solid red;
    }
`;

function TextField({ type, onChangeValue, className, min, max, placeholder, disabled }: Props) {
    const [valid, setValidity] = useState(true);

    console.log({ valid });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const field = event.currentTarget;

        const { value, type } = field;

        setValidity(field.reportValidity());

        if (typeof onChangeValue === 'function') {
            if (type === 'number') {
                onChangeValue(Number(value));
            } else {
                onChangeValue(value);
            }
        }
    };

    return (
        <StyledInput
            className={className}
            type={type}
            onChange={handleChange}
            min={min}
            max={max}
            disabled={disabled}
            placeholder={placeholder}
        />
    );
}

export default TextField;
