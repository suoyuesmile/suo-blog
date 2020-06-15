import React from 'react';
import './steps.scss'

const showMax = 3
const { useState } = React;

const StepHooks = (props) => {
    const {options, expand} = props;
    const [optionsDisplay,  setOptionsDisplay] = useState(options);
    const [expandStatus,  setExpandStatus] = useState(expand);
    const hidenOptions = expandStatus && options.slice(0, showMax);

    const change = () => {
        setExpandStatus(!expandStatus)
        setOptionsDisplay(hidenOptions)
    }


    return (
        <div className="steps">
            {
                optionsDisplay.map((item, index, arr) => (
                    <div className="steps-item" key={index}>
                        <div className={index === 0 ? 'steps-item-icon--active' : 'steps-item-icon'}></div>
                        { arr.length > index + 1 && <div className="steps-item-line"></div>}
                        <div className="steps-item-content">
                            <div className="steps-item-content-title">{item.title}</div>
                            <div className="steps-item-content-description">{item.description}</div>
                            <div className="steps-item-content-datetime">{item.datetime}</div>
                        </div>
                    </div>))
            }
            {
                expandStatus &&
                    <div className="steps-expand" onClick={change}>收起</div>
            }
        </div>
    )
}

export default StepHooks;