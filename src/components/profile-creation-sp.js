import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Logo from "./../images/coconet-logo.png"
import { isEmail } from "validator";
import AuthService from "./../services/auth.service";

export default class ProfileCreationSP extends Component {
  constructor(props) {
    super(props);
  }

  sendToPage(link) {
    window.location.href = link;
  }

  render() { 
      const loggedIn = true;   
      //if user is logged in
      if (loggedIn) {
        return (
            <React.Fragment>
                <div className="formBody">
                    <img className="logInLogo" alt="coconetLogo" src={Logo}></img>
                    <h1 style={{marginTop: "0px"}}>Service Providers, complete your profile now!</h1>
                    <form className="ProfileCreationBody">
                        {/* name was given in the sign up page, so we need to send this info here and place it in the name 
                        text field  */}
                        <input type="text" id="logInText" name="name" placeholder="Name"></input>
                        <input type="text" id="logInText" name="location" placeholder="Location"></input>
                        <input type="text" id="logInText" name="phone" placeholder="Phone"></input>
                        <input type="text" id="logInText" name="email" placeholder="Email"></input>
                        <input type="text" id="logInText" name="website" placeholder="Website"></input>
                        <textarea type="text" id="descriptionText" name="description" placeholder="Description"></textarea>
                        <select name="service" id="serviceDropdown">
                            <option value="design">Design</option>
                            <option value="construction">Construction</option>
                            <option value="qualification">Qualification</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="installation">Installation</option>
                        </select>
                        <label style={{marginTop: "10px"}}>Logo</label>
                        <input type="file" id="imagePicker" name="logo" accept="image/*"></input>
                        <label style={{marginTop: "10px"}}>Cover Photo</label>
                        <input type="file" id="imagePicker" name="coverPhoto" accept="image/*"></input>
                    </form>
                <div/>
                <button id="signUpButton" onClick={() => {
                    this.sendToPage("/")
                }}>Complete</button>
        </div>
            </React.Fragment>
        );
      } 
      // if user is here by mistake or another reason, redirect them
      else {
        this.sendToPage("/")
      }
  }
}