import React from "react";
function Header(){
    return(
        <div>
        <h1>6 DOF Arm Control</h1>
        <div className="theme-buttons">
            <button className="theme-button sun" onClick="setLightTheme()">&#9728;</button>
            <button className="theme-button moon" onClick="setDarkTheme()">&#9790;</button>
        </div>
    </div>
    )
}
export default Header;