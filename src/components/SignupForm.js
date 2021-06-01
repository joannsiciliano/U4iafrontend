import React, { Component } from "react";
import Background from "../images/Background";

export default class SignupForm extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    return (
      <div className="FormDiv">
        <Background />
        <h2>Welcome to social media website</h2>
        <form onSubmit={this.handleSubmit} className="SignupForm">
          <h1>S i g n U p ! </h1>
          <label>username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>password</label>
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            placeholder="✿✿✿✿✿✿✿✿✿✿✿✿✿"
          />
          <input
            type="submit"
            className="RegisterSubmitButton"
            value="Welcome !"
          />
        </form>
      </div>
    );
  }
}
