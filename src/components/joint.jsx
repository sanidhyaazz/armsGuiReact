import React from "react";
import { updateSliderValue } from "./utilities";

function Joint(jointData) {
    const handleInput = () => {
        updateSliderValue(jointData.id, jointData.spanId, jointData.divId);
    };

    return (
        <div className="joint-slider">
            <label htmlFor={jointData.id}>{jointData.label}</label>
            <input
                type="range"
                id={jointData.id}
                name={jointData.id}
                min={jointData.inputMin}
                max={jointData.inputMax}
                step="1"
                defaultValue={jointData.inputValue}
                onInput={handleInput}
            />
            <span id={jointData.spanId}>{jointData.span}</span>
            <div id={jointData.divId} className="degrees-radians">{jointData.rad}</div>
        </div>
    );
}

export default Joint;
