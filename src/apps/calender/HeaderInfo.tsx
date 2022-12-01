import React from 'react';
import { formateDate } from './helper';

interface Props {
    value: number;
    label: string;
}

const HeaderInfo: React.FC<Props> = ({ value, label }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="grid place-content-center rounded-full bg-slate-300  w-12 h-12 ">
                <div className="grid place-content-center rounded-full bg-white  w-10 h-10 text-slate-800">{value}</div>
            </div>
            <span className="text-xs uppercase text-slate-900">{label}</span>
        </div>
    );
};

export default HeaderInfo;
