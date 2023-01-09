import React from 'react';
import { Paper } from 'components/parts';
import { SettingsAccessibility, EmojiPeople } from '@mui/icons-material';
import tw from 'twin.macro';

interface Props {
    ageYear: number | null;
    ageMonth: number | null;
}

const StyledContainer = tw(Paper)`flex justify-center flex-col items-center border `;

const AgeDisplay: React.FC<Props> = ({ ageYear, ageMonth }) => {
    const ageCalculated = ageYear && ageMonth;

    const getMessage = () => {
        if (!ageYear || !ageMonth) return;

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
            <StyledContainer className="p-6">
                <h1 className="text-cyan-800 mb-6">Select your date of birth and we will tell you you're age</h1>
                <SettingsAccessibility className="text-cyan-500" sx={{ fontSize: 150 }} />
            </StyledContainer>
        );
    }

    return (
        <StyledContainer className="p-8">
            <EmojiPeople className="text-cyan-500 animate-bounce duration-1000 ease-in-out" sx={{ fontSize: 120 }} />
            <h1 className="text-cyan-700 text-6xl font-bold">
                {ageYear}.{ageMonth}
            </h1>
            <h1 className="text-cyan-600 text-md">{getMessage()}</h1>
        </StyledContainer>
    );
};

export default AgeDisplay;
