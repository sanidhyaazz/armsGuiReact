import React from "react";
import jointData from "./jointData";
import Joint from "./joint";

function jointFunction(jointData){
    return(
        <Joint 
        key={jointData.id} 
        id={jointData.id}
        label={jointData.label}
        inputMin={jointData.inputMin}
        inputMax={jointData.inputMax}
        inputStep={jointData.InputStep}
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
                    <button type="button" onClick="resetSliders()">Reset</button>
                    <button type="button" onClick="randomizeSliders()">Randomize</button>
                </div>
            </form>
        </div>

        <div className="camera-feed">
            <h1 style={{marginTop: "20px", marginBottom: "20px"}}>Camera Feed</h1>
            <img id="image" src="" width="90%" height="auto" />
        </div>
    </div>
    );
}
export default ControlSystem;