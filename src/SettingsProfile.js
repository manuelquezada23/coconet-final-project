import React, { Component } from "react";
import './App.css';
import NavigationBar from "./NavigationBar.js"
import AuthService from "./services/auth.service";

export default class SettingsProfile extends Component {
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
        return (
            <React.Fragment>
                <NavigationBar />
                <div className="SettingsMain">
                    <h1>Settings</h1>
                    <div className="SettingsBody">
                        <div className="SettingsSideBar">
                            <div className="SettingsSideBarContent" style={{backgroundColor: "#F2C70F"}} onClick={() => {this.sendToPage("/settings-profile")}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>Profile</p>
                            </div>
                            <div className="SettingsSideBarContent" onClick={() => {this.sendToPage("/settings-general")}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>General</p>
                            </div>
                            <div className="SettingsSideBarContent" onClick={() => {this.sendToPage("/settings-privacy")}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>Privacy</p>
                            </div>
                        </div>
                        <div className='SettingsContent'>
                            <div>First Name
                                <div>firstName</div>
                            </div>
                            <div>Last Name
                                <div>lastName</div>
                            </div>
                            <div>Email
                                <div>email</div>
                            </div>
                        </div>
                    </div>
                    <div className='SettingsContent'>
                        Profile info goes here.
                        {/* <User /> */}
                        <button id="logout" onClick={() => {AuthService.logout()}}>Log Out</button>
                        <button id="editrProfile" onClick={() => {this.sendToPage("/settings-profile/user")}}>Edit Profile</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}