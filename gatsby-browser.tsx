import * as React from 'react';
// import type { GatsbyBrowser } from 'gatsby';
import './src/styles/global.css';

export const wrapPageElement = ({ element }) => {
    return (
        <div>
            <span className="text-5xl font-bold underline">Hello world TSX</span>
            {element}
        </div>
    );
};
