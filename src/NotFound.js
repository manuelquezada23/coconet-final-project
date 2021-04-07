import React from "react";
import Logo from "./images/coconet-logo.png"

function NotFound() {

    function sendToPage(link) {
        window.location.href = link;
    }

    return (
        <React.Fragment>
            <div className="logInBody">
                <img className="logInLogo" alt="coconetLogo" src={Logo}></img>
                <h1 style={{marginTop: "0px", marginBottom:"0px"}}>Error 404</h1>
                <h3 style={{marginTop: "5px"}}>Page Not Found</h3>
                <button id="signUpButton" onClick={() => {sendToPage("/")}}>Home Page</button>
            </div>
        </React.Fragment>
    )    
}

export default NotFound;