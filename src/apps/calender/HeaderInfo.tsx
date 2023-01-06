import React from 'react';
import { formateDate } from './helper';

interface Props {
    value: number;
    label: string;
}

const HeaderInfo: React.FC<Props> = ({ value, label }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="grid place-content-center rounded-full text-white  w-10 h-10 bg-slate-400">{value}</div>
            <span className="text-xs uppercase text-theme-800">{label}</span>
        </div>
    );
};

export default HeaderInfo;
