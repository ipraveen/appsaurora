import React from 'react';

interface Props {
    Icon?: any;
    label?: string;
    type?: 'block' | 'inline-block' | 'inline';
}
export default function AppLogo({ Icon, label, type }: Props) {
    if (!Icon) return;

    if (type === 'block') {
        return (
            <div className="flex flex-col justify-center items-center gap-3 border border-white hover:border-theme-400 px-6 py-4 rounded-xl">
                <div className="ring-offset-1 ring-2 ring-theme-200 rounded-full w-16 h-16 grid place-content-center bg-theme-200">
                    <Icon className="text-theme-500 w-12 h-12" sx={{ fontSize: 40 }} />
                </div>

                <label className="text-theme-700 font-medium">{label}</label>
            </div>
        );
    }

    if (type === 'inline-block') {
        return (
            <div className="flex justify-start items-center gap-2">
                <Icon className="text-white" sx={{ fontSize: 36 }} />
                <h1 className="text-3xl">
                    <small className=" text-white tracking-wide font-light">{label}</small>
                </h1>
            </div>
        );
    }

    return null;
}
