import React from "react";
import styled from "styled-components";
import igWordmark from "../../assets/igWordmark.png";
import { ContainerDiv } from "../PostContainer/PostsPage";

const LoginContainerDiv = styled(ContainerDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  .wordmark-login {
    margin: 100px 0;
    width: 80%;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LoginInput = styled.input`
  margin: 5px;
  padding: 5px 0 6px 10px;
  border-radius: 5px;
  border: 1px solid #ffd380;
  background: lemonchiffon;
  font-size: 2.5em;
`;

const LoginButton = styled.button`
  margin: 5px;
  border-radius: 5px;
  border: none;
  width: 50%;
  height: 37px;
  font-size: 2em;
  background: #ffd380;
`;

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
