import React, { Component } from "react";
import validator from 'validator';
import './App.css';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        
        this.profile = [
            {firstName: ""},
            {lastName: ""},
            {username: ""},
            {phoneNumber: ""},
            {email: ""},
            {website: ""}
        ];
    }

    onChangeFirstName(e) {
        this.profile[0] = e.target.value;
    }

    onChangeLastName(e) {
        this.profile[0] = e.target.value;
    }

    onChangeUsername(e) {
        // if username is valid
            this.profile[1] = e.target.value;
        // else 
            // note that its not valid username
            // console.log('Format is not valid');
    }

    onChangePhoneNumber(e) {
        if (validator.isMobilePhone(e.target.value)) {
            this.profile[2] = e.target.value;
        } else {
            // note that its not valid phone number
            console.log('Format is not valid');
        }
    }

    onChangeEmail(e) {
        // if email is valid
            this.profile[3] = e.target.value;
        // else 
            // note that its not valid email
            // console.log('Format is not valid');
    }

    onChangeWebsite(e) {
        // if url is valid
            this.profile[4] = e.target.value;
        // else 
            // note that its not valid url
            // console.log('Format is not valid');
    }

    sendToPage(link) {
        window.location.href = link;
    }


    submitChanges() {
        //logic goes here
    }

    render() {
        // const { currentUser } = this.state;
        // if (currentUser) {
        if (true) {
            return (
                <React.Fragment>
                    <div id="userSettingsContent" className='settingsContent'>
                    <form>
                        <table className="aboutForm" id="aboutSettings">
                            <tbody>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> First Name: </b></td>
                                    <td><input
                                            id="userFirstName"
                                            type="text"
                                            name="firstName"
                                            onChange={(e) => {this.onChangeFirstName(e)}}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Last Name: </b></td>
                                    <td><input
                                            id="userLastName"
                                            type="text"
                                            name="lastName"
                                            onChange={(e) => {this.onChangeLastName(e)}}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Username: </b></td>
                                    <td><input
                                            id="username"
                                            type="text"
                                            name="username"
                                            onChange={(e) => {this.onChangeUsername(e)}}
                                        />
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Phone Number: </b></td>
                                    <td>
                                        <input
                                            id="userPhoneNumber"
                                            type="text"
                                            name="phoneNumber"
                                            onChange={(e) => {this.onChangePhoneNumber(e)}}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Email: </b></td>
                                    <td>
                                        <input
                                            id="userEmail"
                                            type="text"
                                            name="email"
                                            onChange={(e) => {this.onChangeEmail(e)}}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Website: </b></td>
                                    <td>
                                        <input
                                            id="userWebsite"
                                            type="text"
                                            name="website"
                                            onChange={(e) => {this.onChangeWebsite(e)}}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" value="Save" onclick="submitChanges()">Save</input>
                    </form>
                </div>
                </React.Fragment>
                );
        }
        else {
            this.sendToPage("/")
        }
    }
}