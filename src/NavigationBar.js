import React from 'react';
import './App.css';
import LogoImage from "./images/coconet-logo-image.png"
import SearchIcon from "./images/searchIcon.png"

function NavigationBar() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <div className="navigationBar">
                <img id="navigationBarLogo" alt="Logo" src={LogoImage} onClick={() => {sendToPage("/")}}></img>
                <div id="navigationBarLogoText" onClick={() => {sendToPage("/")}}></div>
                <div id="searchBar">
                    <img id="searchIcon" alt="searchIcon" src={SearchIcon} onClick={() => {sendToPage("/search")}}></img>
                </div>
                <div id="navBarButtons">
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