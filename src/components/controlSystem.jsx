import React from "react";
import jointData from "./jointData";
import Joint from "./joint";
import CameraFeed from "./camerafeed";
import {resetSliders,randomizeSliders} from "./utilities"; 

function jointFunction(jointData){
    return(
        <Joint 
        key={jointData.id} 
        id={jointData.id}
        label={jointData.label}
        inputMin={jointData.inputMin}
        inputMax={jointData.inputMax}
        inputStep={jointData.inputStep}
        inputValue={jointData.inputValue}
        onInput={jointData.onInput}
        spanId={jointData.spanId}   
        divId={jointData.divId}
        span={jointData.span}
        rad={jointData.rad}
        />
    );
}

function ControlSystem(){
    return(
        <div className="container">
        <div className="control-panel">
            <form id="controlForm">

            {jointData.map(jointFunction)}

                <div className="button-group">
                    <button type="button" onClick={resetSliders}>Reset</button>
                    <button type="button" onClick={randomizeSliders}>Randomize</button>
                </div>
            </form>
        </div>
        <CameraFeed />
    </div>
    );
}
export default ControlSystem;