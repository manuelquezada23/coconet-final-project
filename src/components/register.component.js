import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Logo from "./../images/coconet-logo.png"

import AuthService from "./../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 2 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        This field must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        successful: false,
        message: "passwords don't match"
      });
      return false;
    }

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.firstName+this.state.lastName,
        this.state.email,
        this.state.password,
        ["user"]
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <React.Fragment>
      <div className="signUpBody">
        <img className="logInLogo" alt="coconetLogo" src={Logo}></img>

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="logInTextWrapper">
                  <label htmlFor="firstName">First Name</label>
                  <Input
                    type="text"
                    name="firstname"
                    value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="logInTextWrapper">
                  <label htmlFor="lastName">Last Name</label>
                  <Input
                    type="text"
                    name="lastname"
                    value={this.state.lastName}
                    onChange={this.onChangeLastName}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="logInTextWrapper">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="logInTextWrapper">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="logInTextWrapper">
                  <label htmlFor="password">Confirm Password</label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChangeConfirmPassword}
                    validations={[required, vpassword]}
                  />
                </div>

                  <button id="signUpButton_1">Sign Up</button>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
      </div>
      </React.Fragment>
    );
  }
}