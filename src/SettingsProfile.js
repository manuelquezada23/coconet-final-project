import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar.js"

function SettingsProfile() {
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
                        Profile info goes here.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )    
}
export default SettingsProfile; 