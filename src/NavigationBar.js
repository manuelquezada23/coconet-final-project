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
            if (currentUser.roles[0] === "ROLE_USER") {
                return (
                    <React.Fragment>
                    <div className="navigationBar">
                    <img id="navigationBarLogo" src={LogoImage} alt="navigation bar logo" onClick={() => {this.sendToPage("/")}}></img>
                        <div id="navigationBarLogoText" onClick={() => {this.sendToPage("/")}}></div>
                        <h3 id="navBarBrowsingText" onClick={() => {this.sendToPage("/sp")}}>Browse now!</h3>
                        <img id="searchIconNavBar" src={SearchIcon}  alt="search icon" onClick={() => {this.sendToPage("/sp")}}></img>
                        <div class="dropdown">
                            <div className="loggedInDashboard">
                                <img className="loggedInPicture" src={Placeholder}></img>
                                <p className="loggedInName">{currentUser.username}</p>
                            </div>
                            <div class="dropdown-content">
                                <a onClick={() => {this.sendToPage(`/sp/${currentUser.id}/settings-profile`)}}>Settings</a>
                                <a style={{cursor: "pointer"}}onClick={() => {this.logOut()}}>Log Out</a>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                ) 
            } else {
                return (
                    <React.Fragment>
                    <div className="navigationBar">
                    <img id="navigationBarLogo" src={LogoImage} alt="navigation bar logo" onClick={() => {this.sendToPage("/")}}></img>
                        <div id="navigationBarLogoText" onClick={() => {this.sendToPage("/")}}></div>
                        <h3 id="navBarBrowsingText" onClick={() => {this.sendToPage("/sp")}}>Browse now!</h3>
                        <img id="searchIconNavBar" src={SearchIcon}  alt="search icon" onClick={() => {this.sendToPage("/sp")}}></img>
                        <div class="dropdown">
                            <div className="loggedInDashboard">
                                <img className="loggedInPicture" src={Placeholder}></img>
                                <p className="loggedInName">{currentUser.username}</p>
                            </div>
                            <div class="dropdown-content">
                                <a onClick={() => {this.sendToPage(`/sp/${currentUser.id}/settings-profile`)}}>Settings</a>
                                <a style={{cursor: "pointer"}}onClick={() => {this.logOut()}}>Log Out</a>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                )
            } 
        } else {
            return (
                <React.Fragment>
                    <div className="navigationBar">
                        <img id="navigationBarLogo" src={LogoImage} alt="navigation bar logo" onClick={() => {this.sendToPage("/")}}></img>
                        <div id="navigationBarLogoText" onClick={() => {this.sendToPage("/")}}></div>
                        <h3 id="navBarBrowsingText" onClick={() => {this.sendToPage("/sp")}}>Browse now!</h3>
                        <img id="searchIconNavBar" src={SearchIcon} alt="search icon" onClick={() => {this.sendToPage("/sp")}}></img>
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