import React from 'react';
import './style.css';

interface Props {}

const SwitchTab: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="toggle">
                <input type="radio" name="items" value="radial" id="radial" checked={true} />
                <label htmlFor="radial">Radial</label>
                <input type="radio" name="items" value="test" id="test" />
                <label htmlFor="test">Test</label>
                <input type="radio" name="items" value="flip" id="flip" />
                <label htmlFor="flip">Flip</label>
            </div>
        </div>
    );
};

export default SwitchTab;
