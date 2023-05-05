import React from 'react';

interface Props {
    Icon?: any;
    label?: string;
    type?: 'block' | 'inline-block' | 'inline';
    color: string;
}
export default function AppLogo({ Icon, label, type, color }: Props) {
    if (!Icon) return;

    if (type === 'block') {
        const backgroundColor = `${color}22`;
        const outlineColor = `${color}33`;
        return (
            <div className="flex flex-col justify-center items-center gap-3 border border-white hover:border-theme-400 px-6 py-4 rounded-xl">
                <div
                    style={{
                        backgroundColor,
                        outline: `2px solid ${outlineColor}`,
                        outlineOffset: '2px',
                    }}
                    className="rounded-full w-20 h-20 grid place-content-center "
                >
                    <Icon
                        style={{
                            color,
                        }}
                        color={color}
                        className=" w-12 h-12"
                        sx={{ fontSize: 40 }}
                    />
                </div>

                <label className="text-theme-700 font-medium">{label}</label>
            </div>
        );
    }

    if (type === 'inline-block') {
        return (
            <div className="flex justify-start items-center gap-2">
                <Icon className="text-theme-700" sx={{ fontSize: 36 }} />
                <h1 className="text-3xl">
                    <small className=" text-theme-600 tracking-wide font-light">{label}</small>
                </h1>
            </div>
        );
    }

    return null;
}
