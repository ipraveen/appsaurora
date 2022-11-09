import React from 'react';
import { formateDate } from './helper';

interface Props {
    value: number;
    label: string;
}

const HeaderInfo: React.FC<Props> = ({ value, label }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="grid place-content-center rounded-full bg-indigo-200  w-12 h-12 ">
                <div className="grid place-content-center rounded-full bg-white  w-10 h-10 ">{value}</div>
            </div>
            <span className="text-sm text-gray-700">{label}</span>
        </div>
    );
};

export default HeaderInfo;
