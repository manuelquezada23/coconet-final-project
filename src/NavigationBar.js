import React from 'react';
import './App.css';
import LogoImage from "./images/coconet-logo-image.png"
import SearchIcon from "./images/searchIcon.png"
import Placeholder from "./images/profile-placeholder.png"

function NavigationBar() {
    const loggedIn = false;
    function sendToPage(link) {
        window.location.href = link;
    }
    if (loggedIn) {
        return (
            <React.Fragment>
                <div className="navigationBar">
                    <img id="navigationBarLogo" src={LogoImage} onClick={() => {sendToPage("/")}}></img>
                    <div id="navigationBarLogoText" onClick={() => {sendToPage("/")}}></div>
                    <div id="searchBar">
                            <select name="searchValue" id="searchBarDropdown">
                                <option value="serviceProviders">Service Providers</option>
                                <option value="projects">Projects</option>
                            </select>
                        <div id="line"></div>
                        <input autocomplete="off" id="searchInputText" type="text" name="email" />
                        <div id="line2"></div>
                        <img id="searchIcon" alt="searchIcon" src={SearchIcon}></img>
                    </div>
                    <div id="loggedInMenu">
                        <div className="loggedInDashboard" onClick={() => {sendToPage("/settings-profile")}}>
                            <img className="loggedInPicture" src={Placeholder}></img>
                            <p className="loggedInName">Name</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    } else {
        return (
            <React.Fragment>
                <div className="navigationBar">
                    <img id="navigationBarLogo" src={LogoImage} onClick={() => {sendToPage("/")}}></img>
                    <div id="navigationBarLogoText" onClick={() => {sendToPage("/")}}></div>
                    <div id="searchBar">
                            <select name="searchValue" id="searchBarDropdown">
                                <option value="serviceProviders">Service Providers</option>
                                <option value="projects">Projects</option>
                            </select>
                        <div id="line"></div>
                        <input autocomplete="off" id="searchInputText" type="text" name="email" />
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
}
export default NavigationBar;