import React from 'react';
import logo from 'assets/images/logo.svg';

export default function Logo() {
    return (
        <div className='flex items-center'>
            <img className="w-12 h-12" src={logo} alt="" />
            <h1 className="text-2xl font-medium">
                <div className='font-theme'>
                    apps<b>aurora</b>
                </div>
            </h1>
        </div>
    );
}
