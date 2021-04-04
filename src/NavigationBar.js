import React from 'react';
import './App.css';
import Logo from "./images/coconet-logo.png"

function NavigationBar() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <div className="navigationBar">
                <div className="leftHeader">
                    <img id="navigationBarLogo" alt="coconetLogo" src={Logo}></img>
                </div>
                <div className="middleHeader">
                    <div className="searchBar">
                    
                    </div>
                </div>
                <div className="rightHeader">
                    <div className="userButtons">
                        <button className="logInButton" onClick={() => {sendToPage("/login")}}>Log In</button>
                        <button className="registerButton" onClick={() => {sendToPage("/signup")}}>Register</button>
                    </div>
                    <button className="serviceProviderButton" onClick={() => {sendToPage("/login-service-provider")}}>For Service Providers</button>
                </div>
            </div>
        </React.Fragment>
    )    
}
export default NavigationBar;