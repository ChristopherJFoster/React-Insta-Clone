import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
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
    console.log("Login render");
    return (
      <>
        <input
          name="username"
          placeholder="username"
          value={this.state.username}
          type="text"
          onChange={this.changeHandler}
        />
        <input
          name="password"
          placeholder="password"
          value={this.state.password}
          type="text"
          onChange={this.changeHandler}
        />
        <button onClick={this.login}>Login</button>
      </>
    );
  }
}

export default Login;
