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
    this.clearErrors = this.clearErrors.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
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

  handleGuestLogin(e) {
    e.preventDefault();
    // @@BUG
    // this.setState({ email: "", password: "" });
    // debugger;
    let email = "guest@guest.com".split("");
    let password = "secretWord".split("");
    return this.logInGuest(email, password);
  }

  logInGuest(email, password) {
    if(email.length > 0) {
      this.setState({ email: [this.state.email] + email.shift() },
        () => setTimeout(() => this.logInGuest(email, password), 50)
      );
    }
    else if(password.length > 0) {
      this.setState({ password: [this.state.password] + password.shift() },
        () => setTimeout(() => this.logInGuest(email, password), 50)
      );
    }
    else return this.props.authentication(this.state);
  }

  clearErrors() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    let loginTitle = "Welcome back!";
    let loginSubtitle = "We're so excited to see you again!";
    let usernameField = "";
    let forgotPassword = (
      <button className="passwordResetLinkButton">
        <Link
          to="/"
          >Forgot your password?
        </Link>
      </button>
    );
    let buttonText = "Login";
    let needAnAccount = (
      <span className="needAccountText">Need an accout?
        <button className="registerLinkButton">
          <Link
            to="/signup">
            Register
          </Link>
        </button>
      </span>
    );
    let alreadyHaveAccount = "";
    let userAgreement = "";
    let guestLoginButton = (
        <button
            onClick={this.handleGuestLogin}
            className="authLoginButton button authGuestLoginButton"
            > Guest Login
        </button>
    )

    let errorsMessageHash = {};

    let loginEmailTextClass = "loginText";
    let loginUsernameTextClass = "loginText";
    let loginPasswordTextClass = "loginText";

    let authInputEmailClass = "defaultInput";
    let authInputUsernameClass = "defaultInput";
    let authInputPasswordClass = "defaultInput";
    // If there are errors.
    const errorsArray = this.props.errors.session.responseJSON;
    if (errorsArray) {
      for (let i = 0; i < errorsArray.length; ++i) {
        if (errorsArray[i].includes("Email")) {
          authInputEmailClass += " defaultInputErrors";
          loginEmailTextClass += " authErrors";
          errorsMessageHash["EMAIL"] = ` - ${errorsArray[i]}`
        }
        if (errorsArray[i].includes("Username")) {
          authInputUsernameClass += " defaultInputErrors";
          loginUsernameTextClass += " authErrors";
          errorsMessageHash["USERNAME"] = ` - ${errorsArray[i]}`
        }
        if (errorsArray[i].includes("Password")) {
          authInputPasswordClass += " defaultInputErrors";
          loginPasswordTextClass += " authErrors";
          errorsMessageHash["PASSWORD"] = ` - ${errorsArray[i]}`
        }
      }

    }

    if (this.props.formType === "SIGNUP") {
      loginTitle = "Create an account";
      loginSubtitle = "";
      usernameField = (
        <label className={loginUsernameTextClass}>USERNAME{[errorsMessageHash["USERNAME"]]}
          <input
            type="text"
            className={authInputUsernameClass}
            value={this.state.username}
            onChange={this.handleInput("username")}
          />
        </label>
      )
      forgotPassword = "";
      buttonText = "Continue";
      needAnAccount = "";
      alreadyHaveAccount = <button className="alreadyAccountLinkButton">
          <Link
            to="/login">Already have an account?
          </Link>
        </button>;
      userAgreement = <div className="userAgreementText">By registering, you agree to Racket your socks off! =)</div>
      guestLoginButton = "";
    }

    return (
      <div className="wrapper">
        {/* <img
          className="logo"
          src="/assets/logo.jpg"
          alt="Racket Logo Image"
        /> */}
      
        <div className="authFlexing">
          <div className="authBox">
            <label className="loginTitle">{loginTitle}</label>
            <label className="loginSubtitle">{loginSubtitle}</label>
            <form
              className="authForm"
              onSubmit={this.handleSubmit}
            >

              <label className={loginEmailTextClass}>EMAIL{[errorsMessageHash["EMAIL"]]}
              <input
                  type="text"
                  className={authInputEmailClass}
                  value={this.state.email}
                  onChange={this.handleInput("email")}
                />
              </label>
              {usernameField}
              <label className={loginPasswordTextClass}>PASSWORD{[errorsMessageHash["PASSWORD"]]}
              <input
                  type="password"
                  className={authInputPasswordClass}
                  value={this.state.password}
                  onChange={this.handleInput("password")}
                />
              </label>
              {forgotPassword}
              <button className="authLoginButton button">{buttonText}</button>
              {needAnAccount}
              {alreadyHaveAccount}
              {userAgreement}
              {guestLoginButton}
            </form>
          </div>
        </div>
        
      </div>
    );
  }
};

export default SessionForm;