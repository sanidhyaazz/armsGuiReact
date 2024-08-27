import React from "react";
function themebutton(){
    return(
        <div className="theme-buttons">
            <button className="theme-button sun" onClick={setLightTheme}>&#9728;</button>
            <button className="theme-button moon" onClick={setDarkTheme}>&#9790;</button>
        </div>
    )
}
export default themebutton;

function setLightTheme() {
    document.body.classList.remove('dark-theme');
  }
  
  function setDarkTheme() {
    document.body.classList.add('dark-theme');
  }