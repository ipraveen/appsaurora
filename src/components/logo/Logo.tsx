import React from 'react';
import logo from 'assets/images/logo.svg';
import { Link } from 'gatsby';

export default function Logo() {
    return (
        <Link to="/">
            <div className="flex items-center">
                <img className="w-12 h-12 text-slate-800" src={logo} alt="" />
                <h1 className="text-4xl font-medium">
                    <div style={{ letterSpacing: '3px' }}>
                        <span className="text-slate-700 dark:text-slate-300 text-tracking-wide font-light">apps</span>
                        <strong style={{ color: '#53BDBA' }} className=" tracking-wide font-medium">
                            aurora
                        </strong>
                    </div>
                </h1>
            </div>
        </Link>
    );
}
