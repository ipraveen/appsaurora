import React from 'react';
import { Paper } from 'components/core';
import { SettingsAccessibility, EmojiPeople } from '@mui/icons-material';

interface Props {
    ageYear: number | undefined;
    ageMonth: number | undefined;
    ageCalculated: boolean;
}

const AgeDisplay: React.FC<Props> = ({ ageCalculated, ageYear = 0, ageMonth  = 0}) => {

    const getMessage = () => {

        if (ageYear > 0 && ageMonth > 0) {
            return `You're ${ageYear} Years and ${ageMonth} Months old!`;
        } else if (ageYear > 0 && ageMonth === 0) {
            return `You're ${ageYear} Years old!`;
        } else if (ageYear === 0 && ageMonth > 0) {
            return `You're ${ageMonth} Months old!`;
        }
    };

    if (!ageCalculated) {
        return (
            <Paper className="flex justify-center flex-col items-center border">
                <h1 className="text-theme-600 mb-6">Select your date of birth and we will tell you you're age</h1>
                <SettingsAccessibility className="text-theme-500" sx={{ fontSize: 150 }} />
            </Paper>
        );
    }

    return (
        <Paper className="p-8 flex flex-col items-center ">
            <EmojiPeople className="text-cyan-500 animate-bounce duration-1000 ease-in-out" sx={{ fontSize: 120 }} />
            <h1 className="text-cyan-700 text-6xl font-bold">
                {ageYear}.{ageMonth}
            </h1>
            <h1 className="text-cyan-600 text-md">{getMessage()}</h1>
        </Paper>
    );
};

export default AgeDisplay;
