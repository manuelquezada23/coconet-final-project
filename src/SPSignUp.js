import React from "react";
import Logo from "./images/coconet-logo.png"

function SPSignUp() {

    function sendToPage(link) {
        window.location.href = link;
    }

    return (
        <React.Fragment>
            <div className="signUpBody">
                <img className="logInLogo" alt="coconetLogo" src={Logo}></img>
                <h1 style={{marginTop: "0px"}}>Service Providers</h1>
                <form className="logInForm">
                    <input id="logInText" type="text" placeholder="Service Provider Name" name="spName"/>
                    <input id="logInText" type="text" placeholder="Email" name="email" />
                    <input id="logInText" type="text" placeholder="Password" name="password" />
                    <input id="logInText" type="text" placeholder="Confirm Password" name="confirmPassword" />
                    <input id="logInButton" type="submit" value="Sign Up" />
                </form>
                <button id="forgotPassword" onClick={() => {sendToPage("/login")}}>Already have an account? Log In</button>
            </div>
        </React.Fragment>
    )    
}

export default SPSignUp;