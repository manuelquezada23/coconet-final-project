import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Logo from "./../images/coconet-logo.png"
import { isEmail } from "validator";
import AuthService from "./../services/auth.service";

export default class ProfileCreationUser extends Component {
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
                    <h1 style={{marginTop: "0px"}}>Complete your profile now!</h1>
                    <form className="ProfileCreationBody">
                        {/* name was given in the sign up page, so we need to send this info here and place it in the name 
                        text field  */}
                        <input type="text" id="logInText" name="name" placeholder="Name"></input>
                        <input type="text" id="logInText" name="profession" placeholder="Profession"></input>
                        <input type="text" id="logInText" name="location" placeholder="Location"></input>
                        <label style={{marginTop: "10px"}}>Profile Picture</label>
                        <input type="file" id="imagePicker" name="image" accept="image/*"></input>
                        <label for="img"></label>
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