import React from 'react';
import logo from 'assets/images/logo.svg';
import { Link } from 'gatsby';

export default function Logo() {
    return (
        <Link to="/">
            <div className="flex items-center">
                <img className="w-12 h-12 text-sky-800" src={logo} alt="" />
                <h1 className="text-4xl font-medium">
                    <div className="font-theme text-sky-800">
                        apps<b>aurora</b>
                    </div>
                </h1>
            </div>
        </Link>
    );
}
