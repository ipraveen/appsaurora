import { Button, DateField, Paper } from 'components/core';
import React, { useState } from 'react';
import { dateDiff } from 'utils/dateUtil';
import AgeDisplay from './AgeDisplay';
import { usePreferenceStorage } from 'storage/hooks/usePreferenceStorage';

interface Props {}

const AgeCalculator: React.FC<Props> = (props) => {
    const [age, setAge] = useState<Date | null>(null);
    const [ageYear, setAgeYear] = useState<number>();
    const [ageMonth, setAgeMonth] = useState<number>();
    const [clickedOnce, setClickedOnce] = useState(false);
    const [ageHistory, setHistory] = usePreferenceStorage<Date[]>('AGE_CALCULATOR_HISTORY');

    const handleAgeCalculation = () => {
        if (age) {
            const months = dateDiff(new Date(), age, "month");
            setClickedOnce(true);
            setAgeYear(Number(Math.floor(months / 12)));
            setAgeMonth(Number(Math.floor(months % 12)));
            if (Array.isArray(ageHistory)) {
                setHistory([age, ...ageHistory]);
            } else {
                setHistory([age]);
            }
        }
    };

    const handleClear = () => {
        setClickedOnce(false);
        setAgeYear(undefined);
        setAgeMonth(undefined);
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
                    <AgeDisplay ageCalculated={clickedOnce} ageMonth={ageMonth} ageYear={ageYear} />
                </section>
            </section>

            {/* <h1>History</h1> */}

            {/* {ageHistory?.map((history) => (
                <div>{history.toString()}</div>
            ))} */}
        </Paper>
    );
};

export default AgeCalculator;
