import React from "react";
import Logo from "./images/coconet-logo.png"

function SignUp() {

    function sendToPage(link) {
        window.location.href = link;
    }

    return (
        <React.Fragment>
            <div className="signUpBody">
                <img className="logInLogo" alt="coconetLogo" src={Logo}></img>
                <form className="logInForm">
                    <input id="logInText" type="text" placeholder="First Name" name="firstName"/>
                    <input id="logInText" type="text" placeholder="Last Name" name="lastName" />
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

export default SignUp;