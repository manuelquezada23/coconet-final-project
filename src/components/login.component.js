import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Logo from "./../images/coconet-logo.png"
import { isEmail } from "validator";


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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  sendToPage(link) {
    window.location.href = link;
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <React.Fragment>
      <div className="LogInBody">
          <img className="logInLogo" alt="coconetLogo" src={Logo}></img>
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
            className="LogInForm"
          >
            <div className = "logInTextWrapper">
              <label htmlFor="username">Email</label>
              <Input
                type="text"
                name="username"
                placeholder="Email"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required, email]}
              />
            </div>
            <div className = "logInTextWrapper">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
            <div className="logInBtnWrapper">
              <button
                id="logInButton"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {this.state.message && (
              <div className="LogInForm">
                <div className="alert alert-danger" role="alert">
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
        <div className="logInBtnWrapper">
          <button id="signUpButton" onClick={() => {this.sendToPage("/signup")}}>Sign Up</button>
        </div>
        <div className="logInBtnWrapper">
          <button id="forgotPassword">Forgot Password?</button>
        </div>
      </div>
      </React.Fragment>
    );
  }
}