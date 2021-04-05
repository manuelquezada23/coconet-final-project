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
                <img id="navigationBarLogo" src={LogoImage}></img>
                <div id="navigationBarLogoText"></div>
                <div id="searchBar">
                        <select name="searchValue" id="searchBarDropdown">
                            <option value="serviceProviders">Service Providers</option>
                            <option value="projects">Projects</option>
                        </select>
                    <div id="line"></div>
                    <input id="searchInputText" type="text" name="email" />
                    <div id="line2"></div>
                    <img id="searchIcon" alt="searchIcon" src={SearchIcon}></img>
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