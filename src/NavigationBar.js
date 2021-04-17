import React, { Component } from "react";
import './App.css';
import LogoImage from "./images/coconet-logo-image.png"
import SearchIcon from "./images/searchIcon.png"
import Placeholder from "./images/profile-placeholder.png"
import AuthService from "./services/auth.service";

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          currentUser: AuthService.getCurrentUser()
        };
      }

    sendToPage(link) {
        window.location.href = link;
    }

    logOut() {
        AuthService.logout();
        this.sendToPage('/');
    }

    render() {
        const { currentUser } = this.state;
        if (currentUser) {
            return (
                <React.Fragment>
                    <div className="navigationBar">
                        <img id="navigationBarLogo" src={LogoImage} onClick={() => {this.sendToPage("/")}}></img>
                        <div id="navigationBarLogoText" onClick={() => {this.sendToPage("/")}}></div>
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
                            <div className="loggedInDashboard" onClick={() => {this.sendToPage("/settings-profile")}}>
                                <img className="loggedInPicture" src={Placeholder}></img>
                                <p className="loggedInName">{currentUser.username}</p>
                            </div>
                            <button id="logout" onClick={() => {this.logOut()}}>logout</button>
                        </div>
                    </div>
                </React.Fragment>
            ) 
        } else {
            return (
                <React.Fragment>
                    <div className="navigationBar">
                        <img id="navigationBarLogo" src={LogoImage} onClick={() => {this.sendToPage("/")}}></img>
                        <div id="navigationBarLogoText" onClick={() => {this.sendToPage("/")}}></div>
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
                                <button className="logInButton" onClick={() => {this.sendToPage("/login")}}>Log In</button>
                                <button className="registerButton" onClick={() => {this.sendToPage("/signup")}}>Register</button>
                            </div>
                            <button className="serviceProviderButton" onClick={() => {this.sendToPage("/login-service-provider")}}>For Service Providers</button>
                        </div>
                    </div>
                </React.Fragment>
            ) 
        }
    }
}