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
      <div className="alert alert-danger" role="alert" style={{marginTop: "5px"}}>
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert" style={{marginTop: "5px"}}>
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
          this.props.history.push("/settings-profile");
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
    if (this.props.location.pathname === '/login-service-provider') {
      return (
        <React.Fragment>
        <div className="logInBody">
            <img className="logInLogo" alt="coconetLogo" src={Logo}></img>
            <h1 style={{marginTop: "0px"}}>Service Providers</h1>
            <Form onSubmit={this.handleLogin} ref={c => { this.form = c;}} className="LogInForm">
              <div className="logInTextWrapper">
                <Input id="logInText" type="text" placeholder="Email" name="username" value={this.state.username} onChange={this.onChangeUsername} validations={[required, email]}/>
              </div>
              <div className = "logInTextWrapper">
                <Input id="logInText" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChangePassword} validations={[required]}/>
              </div>
              <button
                  id="logInButton"
                  disabled={this.state.loading}
              >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
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
            <button id="signUpButton" onClick={() => {
              if (this.props.location.pathname === '/login-service-provider') {
                this.sendToPage("/signup-service-provider")
              }
              else {
                this.sendToPage("/signup")
              }
            }}>Sign Up</button>
            <button id="forgotPassword">Forgot Password?</button>
        </div>
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
        <div className="logInBody">
            <img className="logInLogo" alt="coconetLogo" src={Logo}></img>
            <Form onSubmit={this.handleLogin} ref={c => { this.form = c;}} className="LogInForm">
              <div className="logInTextWrapper">
                <Input id="logInText" type="text" placeholder="Email" name="username" value={this.state.username} onChange={this.onChangeUsername} validations={[required, email]}/>
              </div>
              <div className = "logInTextWrapper">
                <Input id="logInText" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChangePassword} validations={[required]}/>
              </div>
              <button
                  id="logInButton"
                  disabled={this.state.loading}
              >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
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
            <button id="signUpButton" onClick={() => {
              if (this.props.location.pathname === '/login-service-provider') {
                this.sendToPage("/signup-service-provider")
              }
              else {
                this.sendToPage("/signup")
              }
            }}>Sign Up</button>
            <button id="forgotPassword">Forgot Password?</button>
        </div>
        </React.Fragment>
      );
    }
  }
}