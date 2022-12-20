import React, { FormEvent, useEffect, useState } from 'react';

interface Props {
    onSubmit: (value: { hour: number; min: number; sec: number }) => void;
}

const TimerInput = (props: Props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type={'text'}
                    className="border p-4 w-6/12 my-6 outline-none mx-auto "
                    placeholder="Provide the time..."
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </div>
    );
};

export default TimerInput;
