import React from 'react'
import "./index.css";



function PredictQuestion(props) {
    return (
        <div className="predictQuestion">
            <label >{props.question}</label>
            <select placeholder='Select a value' onChange={function(event){props.setValue(event.target.value)}}>
                <option disabled selected value> -- Select an option -- </option>
                {props.options && props.options.map(item =>
                    <option value={item.value}>{item.label}</option>
                )}
            </select>
        </div >
    )
}

export default PredictQuestion