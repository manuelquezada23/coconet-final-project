import React from "react";
import Logo from "./images/coconet-logo.png"

function LogIn() {

    function sendToPage(link) {
        window.location.href = link;
    }

    return (
        <React.Fragment>
            <div className="logInBody">
                <img className="logInLogo" alt="coconetLogo" src={Logo}></img>
                <form className="logInForm">
                    <input id="logInText" type="text" placeholder="Email" name="email" />
                    <input id="logInText" type="text" placeholder="Password" name="password" />
                    <input id="logInButton" type="submit" value="Log In" />
                </form>
                <button id="signUpButton" onClick={() => {sendToPage("/signup")}}>Sign Up</button>
                <button id="forgotPassword">Forgot Password?</button>
            </div>
        </React.Fragment>
    )    
}

export default LogIn;