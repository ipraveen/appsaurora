import React from 'react';
import './style.css';

interface Props {}

const RadioSelect: React.FC<Props> = (props) => {

    
    return (
        <div>
            <div className="rb-box">
                <div id="rb-1" className="rb">
                    <div className="rb-tab rb-tab-active" data-value="1">
                        <div className="rb-spot">
                            <span className="rb-txt">1</span>
                        </div>
                    </div>
                    <div className="rb-tab" data-value="2">
                        <div className="rb-spot">
                            <span className="rb-txt">2</span>
                        </div>
                    </div>
                    <div className="rb-tab" data-value="3">
                        <div className="rb-spot">
                            <span className="rb-txt">3</span>
                        </div>
                    </div>
                    <div className="rb-tab" data-value="4">
                        <div className="rb-spot">
                            <span className="rb-txt">4</span>
                        </div>
                    </div>
                    <div className="rb-tab" data-value="5">
                        <div className="rb-spot">
                            <span className="rb-txt">5</span>
                        </div>
                    </div>
                </div>

                <div className="button-box">
                    <button className="button trigger">Submit!</button>
                </div>
            </div>
        </div>
    );
};

export default RadioSelect;
