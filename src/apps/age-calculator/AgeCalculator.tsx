import { Button, DateField, Paper } from 'components/parts';
import React, { useState } from 'react';
import { diff } from 'utils/dateUtil';
import AgeDisplay from './AgeDisplay';

interface Props {}

const AgeCalculator: React.FC<Props> = (props) => {
    const [age, setAge] = useState<Date | null>(null);
    const [ageYear, setAgeYear] = useState<number | null>(null);
    const [ageMonth, setAgeMonth] = useState<number | null>(null);

    const handleAgeCalculation = () => {
        if (age) {
            const months = diff(new Date(), age);

            setAgeYear(Number(Math.floor(months / 12)));
            setAgeMonth(Number(Math.floor(months % 12)));
        }
    };

    const handleClear = () => {
        setAgeYear(null);
        setAgeMonth(null);
        setAge(null);
    };

    return (
        <Paper className="p-12 mt-6">
            <section className="grid grid-cols-1 lg:grid-cols-2">
                <section>
                    <h1 className="my-2 text-theme-500">What's your Date of birth?</h1>
                    <DateField value={age} className="my-2" onChange={setAge} />
                    <section className="flex gap-2 my-4">
                        <Button className="my-2" onClick={handleAgeCalculation} disabled={!Boolean(age)}>
                            Calculate
                        </Button>
                        <Button variant="outlined" className="my-2" onClick={handleClear}>
                            Clear
                        </Button>
                    </section>
                </section>
                <section>
                    <AgeDisplay ageMonth={ageMonth} ageYear={ageYear} />
                </section>
            </section>
        </Paper>
    );
};

export default AgeCalculator;
