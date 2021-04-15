import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar.js"

function User() {
    function sendToPage(link) {
        window.location.href = link;
    }

    return (
        <React.Fragment>
            <NavigationBar />
            <div className="SettingsMain">
                <h1>Settings</h1>
                <div className="SettingsBody">
                    <div className="SettingsSideBar">
                        <div className="SettingsSideBarContent" style={{backgroundColor: "#F2C70F"}} onClick={() => {sendToPage("/settings-profile")}}>
                            <p style={{marginTop: "10px", marginLeft: "15px"}}>Profile</p>
                        </div>
                        <div className="SettingsSideBarContent" onClick={() => {sendToPage("/settings-general")}}>
                            <p style={{marginTop: "10px", marginLeft: "15px"}}>General</p>
                        </div>
                        <div className="SettingsSideBarContent" onClick={() => {sendToPage("/settings-privacy")}}>
                            <p style={{marginTop: "10px", marginLeft: "15px"}}>Privacy</p>
                        </div>
                    </div>
                    <div className='SettingsContent'>
                        <form className="ChangeProfileInfoForm">
                            <div>First Name
                                <div>
                                    <input id="ProfileInfoText" type="text" placeholder="<firstName>" name="firstName"/>
                                </div>
                            </div>
                            <div>Last Name
                                <div>
                                    <input id="ProfileInfoText" type="text" placeholder="<lastName>" name="lastName" />
                                </div>
                            </div>
                            <div>Email
                                <div>
                                    <input id="ProfileInfoText" type="text" placeholder="<email>" name="email" />
                                </div>
                            </div>
                            <div>Current Password
                                <div>
                                    <input id="ProfileInfoText" type="text" placeholder="Enter Current Password" name="password" />
                                </div>
                            </div>
                            <div>New Password
                                <div>
                                    <input id="ProfileInfoText" type="text" placeholder="Enter New Password" name="confirmPassword" />
                                </div>
                            </div>
                            <div>Confirm New Password
                                <div>
                                    <input id="ProfileInfoText" type="text" placeholder="Enter Confirm New Password" name="confirmPassword" />
                                </div>
                            </div>
                        </form>
                        <div className="saveChangesButton">
                            <button id="saveChanges" onClick={() => {sendToPage("/settings-profile")}}>Save Changes</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <div>
                <form className="ChangeProfileInfoForm">
                    <input id="ProfileInfoText" type="text" placeholder="First Name" name="firstName"/>
                    <input id="ProfileInfoText" type="text" placeholder="Last Name" name="lastName" />
                    <input id="ProfileInfoText" type="text" placeholder="Email" name="email" />
                    <input id="ProfileInfoText" type="text" placeholder="Password" name="password" />
                    <input id="ProfileInfoText" type="text" placeholder="Confirm Password" name="confirmPassword" />
                    <input id="ProfileInfoButton" type="submit" value="Save Changes" />
                </form>
                <button id="saveChanges" onClick={() => {sendToPage("/settings-profile")}}>Save Changes</button>
            </div> */}
        </React.Fragment>
    )
}

export default User;