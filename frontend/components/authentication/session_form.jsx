import React from "react";

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
    const usernameField = this.props.formType === "SIGNUP" ?
      (
        <label className="loginText">USERNAME
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput("username")}
          />
        </label>
      )
      : (<div></div>)
    return (
      <form 
        className="authBox"
        onSubmit={this.handleSubmit}>
        <label className="loginText">EMAIL
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleInput("email")}
            />
        </label>
        {usernameField}
        <label className="loginText">PASSWORD
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleInput("password")}
          />
        </label>

        <button className="loginButton">{this.props.formType}</button>
      </form>
    );
  }
};

export default SessionForm;