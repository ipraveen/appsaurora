import { DateField, Label, Paper } from '@/components/core';
import React, { useState } from 'react';
import { dateDiff } from '@appsaurora/utils';
import AgeDisplay from './AgeDisplay';
import { usePreferenceStorage } from 'storage/hooks/usePreferenceStorage';
import { Button, ButtonIcon } from '@/components/core';
import { Container } from '@/layout';

interface Props {}

const AgeCalculator: React.FC<Props> = (props) => {
    const [age, setAge] = useState<Date | null>(null);
    const [ageYear, setAgeYear] = useState<number>();
    const [ageMonth, setAgeMonth] = useState<number>();
    const [clickedOnce, setClickedOnce] = useState(false);
    const [ageHistory, setHistory] = usePreferenceStorage<Date[]>('AGE_CALCULATOR_HISTORY');
    const [isDateValid, setDateValidity] = useState(true);

    const handleAgeCalculation = () => {
        console.log(' handleAgeCalculation age => ', age);
        if (age) {
            const months = dateDiff(new Date(), age, 'month');
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

    console.log('age => ', age);

    return (
        <Container className="md:max-w-6xl">
            <Paper className="p-12 mt-6">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <section className="flex flex-col gap-3">
                        <Label>What's your Date of birth? </Label>
                        <DateField
                            value={age}
                            className=""
                            onChange={setAge}
                            onValidityChange={(val) => setDateValidity(val)}
                            error={isDateValid ? '' : 'Please enter a valid date'}
                        />
                        <section className="flex gap-6 my-2">
                            <ButtonIcon onClick={handleAgeCalculation} disabled={!isDateValid}>
                                Calculate
                            </ButtonIcon>
                            <Button variant="outlined" onClick={handleClear}>
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
                <div>{history.toLocaleDateString()}</div>
            ))} */}
            </Paper>
        </Container>
    );
};

export default AgeCalculator;
