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
    render() {
        const { currentUser } = this.state;
        if (currentUser) {
            return (
                <React.Fragment>
                    <div className="navigationBar">
                        <img id="navigationBarLogo" src={LogoImage} alt="navigation bar logo" onClick={() => {this.sendToPage("/")}}></img>
                        <div id="navigationBarLogoText" onClick={() => {this.sendToPage("/")}}></div>
                        <h3 id="navBarBrowsingText" onClick={() => {this.sendToPage("/search")}}>Browse now!</h3>
                        <img id="searchIconNavBar" src={SearchIcon}  alt="search icon" onClick={() => {this.sendToPage("/search")}}></img>
                        <div id="loggedInMenu">
                            <div className="loggedInDashboard" onClick={() => {this.sendToPage("/settings-profile")}}>
                                <img className="loggedInPicture" src={Placeholder} alt="logged in"></img>
                                <p className="loggedInName">{currentUser.username}</p>
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
                        <h3 id="navBarBrowsingText" onClick={() => {this.sendToPage("/search")}}>Browse now!</h3>
                        <img id="searchIconNavBar" src={SearchIcon} alt="search icon" onClick={() => {this.sendToPage("/search")}}></img>
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