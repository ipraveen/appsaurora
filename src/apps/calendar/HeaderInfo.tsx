import React from 'react';


interface Props {
    value: number;
    label: string;
    theme?: string;
}

const HeaderInfo: React.FC<Props> = ({ value, label, theme = 'slate' }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className={`grid place-content-center rounded-full text-white  w-10 h-10 bg-slate-400`}>
                {value}
            </div>
            <span className="text-xs uppercase text-theme-800">{label}</span>
        </div>
    );
};

export default HeaderInfo;
