import styled from '@emotion/styled';
import React, { MouseEventHandler } from 'react';
import tw from 'twin.macro';
import { isWeekend } from 'utils/dateUtil';

interface Props {
    className?: string;
    date: Date;
    onClick?: (obj: { value: string }) => void;
}

const StyledDate = styled.div`
    ${tw`grid place-content-center cursor-pointer p-2`}
    ${({ date }: { date: Date }) => (isWeekend(date) ? tw`text-slate-400` : tw`text-slate-900`)}
`;

/* const StyledDate = tw.div`grid place-content-center cursor-pointer p-3 ${(props) =>
    isWeekend(props.date) ? '' : 'text-theme-800'}`; */

//color: ${({ date }: { date: Date }) => (isWeekend(date) ? 'gray' : 'black')}

const Day: React.FC<Props> = ({ className, date, onClick }) => {
    const value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const handleClick = () => {
        onClick?.({
            value,
        });
    };

    const day = date.getDay();

    // Note: Do not remove calender-day class.
    return (
        <StyledDate date={date} data-id={value} className={`${className} calender-day`} onClick={handleClick}>
            {date.getDate()}
        </StyledDate>
    );
};

export default Day;
