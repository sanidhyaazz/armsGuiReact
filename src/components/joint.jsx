import React from "react";
import { updateSliderValue } from "./utilities";
// import { updateSliderStyles, updateSliderValue } from "./utilities";
function joint(jointData){
    return(
        <div className="joint-slider">
                    <label htmlFor={jointData.id}>{jointData.label}</label>
                    <input type="range" id={jointData.id} name={jointData.id} min={jointData.inputMin} max={jointData.inputMax} step="1" value="0"
                        onInput={updateSliderValue(jointData.id,jointData.spanId,jointData.divId)}/>
                    <span id={jointData.spanId}>{jointData.span}</span>
                    <div id={jointData.divId} className="degrees-radians">{jointData.rad}</div>
        </div>
    )
}

export default joint;