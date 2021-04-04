import React from 'react';
import './App.css';
import Logo from "./images/coconet-logo.png"

function NavigationBar() {
    return (
        <React.Fragment>
            <div className="navigationBar">
                <img className="navigationBarLogo" alt="coconetLogo" src={Logo}></img>
                <div className="searchBar">
                    
                </div>
                <div className="userButtons">
                    <button className="logInButton">Log In</button>
                    <button className="registerButton">Register</button>
                </div>
                <button className="serviceProviderButton">For Service Providers</button>
            </div>
        </React.Fragment>
    )    
}
export default NavigationBar;