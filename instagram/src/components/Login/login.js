import React from "react";
import igWordmark from "../../assets/igWordmark.png";
import {
  LoginContainerDiv,
  InputDiv,
  LoginInput,
  LoginButton
} from "../../myStyledComps/myStyledComps";

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
      <LoginContainerDiv>
        <img
          src={igWordmark}
          alt="instagram wordmark"
          className="wordmark-login"
        />
        <InputDiv>
          <LoginInput
            name="username"
            placeholder="username"
            value={this.state.username}
            type="text"
            onChange={this.changeHandler}
          />
          <LoginInput
            name="password"
            placeholder="password"
            value={this.state.password}
            type="text"
            onChange={this.changeHandler}
          />
          <LoginButton onClick={this.login}>Login</LoginButton>
        </InputDiv>
      </LoginContainerDiv>
    );
  }
}

export default Login;
