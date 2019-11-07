import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authentication(this.state);
  }

  render() {
    let loginTitle = "Welcome back!";
    let loginSubtitle = "We're so excited to see you again!";
    let usernameField = "";
    let forgotPassword = <button className="passwordResetLinkButton">
        <Link to="/">Forgot your password?</Link>
      </button>;
    let buttonText = "Login";
    let needAnAccount = (
      <span className="needAccountText">Need an accout?
        <button className="registerLinkButton">
          <Link to="/signup">Register</Link>
        </button>
      </span>
    )
    let alreadyHaveAccount = "";
    let userAgreement = "";

    if (this.props.formType === "SIGNUP") {
      loginTitle = "Create an account";
      loginSubtitle = "";
      usernameField = (
        <label className="loginText">USERNAME
          <input
            type="text"
            className="authInput"
            value={this.state.username}
            onChange={this.handleInput("username")}
          />
        </label>
      )
      forgotPassword = "";
      buttonText = "Continue";
      needAnAccount = "";
      alreadyHaveAccount = <button className="alreadyAccountLinkButton">
          <Link to="/login">Already have an account?</Link>
        </button>;
      userAgreement = <div className="userAgreementText">By registering, you agree to Racket your socks off! =)</div>
    }

    return (
      <div className="wrapper">
        <img
          className="logo"
          src="/assets/logo.jpg"
          alt="Racket Logo Image"
        />
      
        <div className="authFlexing">
          <div className="authBox">
            <label className="loginTitle">{loginTitle}</label>
            <label className="loginSubtitle">{loginSubtitle}</label>
            <form
              className="authForm"
              onSubmit={this.handleSubmit}
            >

              <label className="loginText">EMAIL
              <input
                  type="text"
                  className="authInput"
                  value={this.state.email}
                  onChange={this.handleInput("email")}
                />
              </label>
              {usernameField}
              <label className="loginText">PASSWORD
              <input
                  type="password"
                  className="authInput"
                  value={this.state.password}
                  onChange={this.handleInput("password")}
                />
              </label>
              {forgotPassword}
              <button className="loginButton">{buttonText}</button>
              {needAnAccount}
              {alreadyHaveAccount}
              {userAgreement}
            </form>
          </div>
        </div>
        
      </div>
    );
  }
};

export default SessionForm;