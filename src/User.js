import React, { Component } from "react";
import './App.css';

export default class User extends Component {
    constructor(props) {
        super(props);
    
        // this.state = {
        //   currentUser: AuthService.getCurrentUser()
        // };
      }

    sendToPage(link) {
        window.location.href = link;
    }
    render() {
        // const { currentUser } = this.state;
        // if (currentUser) {
            if (true) {
            return (
                <React.Fragment>
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
                </React.Fragment>
                );
        }
        else {
            this.sendToPage("/")
        }
    }
}