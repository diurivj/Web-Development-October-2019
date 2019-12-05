import React, { Component } from "react";
import AuthService from "../../services/AuthService";

const authservice = new AuthService();

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  login = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { data } = await authservice.login({ username, password });
    localStorage.setItem("user", JSON.stringify(data));
    alert("logeadoooo krnals");
  };

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <label htmlFor="username">Username</label>
          <input
            onChange={this.inputChange}
            type="text"
            name="username"
            id="username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={this.inputChange}
            type="password"
            name="password"
            id="password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}
