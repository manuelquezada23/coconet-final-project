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
                <h1> Settings </h1>
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
                        <form>
                            <table>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Company Name: </b></td>
                                    <td><input id="companyName" type="text" name="firstName" value="Value"/></td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Location: </b></td>
                                    <td><input id="companyLocation" type="text" name="lastName" value="Value"/></td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Service Type: </b></td>
                                    <td className="serviceTypeInputBox">
                                        <select className="serviceTypeDropdown" id="serviceTypeDropdown">
                                            <option value="currentlySelected" selected> savedType </option>
                                            <option value="design"> Design </option>
                                            <option value="construction"> Construction </option>
                                            <option value="qualification"> Qualification </option>
                                            <option value="maintenance"> Maintenance </option>
                                            <option value="installation"> Installation </option>
                                        </select></td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Description: </b></td>
                                    <td><textarea className="companyDescriptionInput" id="companyDescription" type="text" name="descri[tion" value="Value"/></td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Phone Number: </b></td>
                                    <td><input id="companyPhoneNumber" type="text" name="confirmPassword" value="Value"/></td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Email: </b></td>
                                    <td><input id="companyEmail" type="text" name="confirmPassword" value="Value"/></td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Website: </b></td>
                                    <td><input id="companyWebsite" type="text" name="confirmPassword" value="Value"/></td>
                                </tr>
                            </table>
                        </form>
                        <div className="saveChangesButton">
                            <button id="editrProfile">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )    
}
export default SettingsProfile; 