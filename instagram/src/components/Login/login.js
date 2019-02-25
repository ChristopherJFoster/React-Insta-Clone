import React from "react";
import igWordmark from "../../assets/igWordmark.png";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };

  render() {
    return (
      <div className="container-login">
        <img
          src={igWordmark}
          alt="instagram wordmark"
          className="wordmark-login"
        />
        <div className="input-container">
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
            type="text"
            onChange={this.changeHandler}
            className="login-input"
          />
          <input
            name="password"
            placeholder="password"
            value={this.state.password}
            type="text"
            onChange={this.changeHandler}
            className="login-input"
          />
          <button onClick={this.login} className="login-button">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
