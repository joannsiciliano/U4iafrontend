import "./App.css";
import React, { Component } from "react";
import SignupForm from "./components/SignupForm";
import HomePage from "./components/HomePage";

export default class App extends Component {
  state = {
    user: {},
  };

  signUp = (user) => {
    // fetch("http://localhost:3000/users", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       username: user.username,
    //       password: user.password,
    //     },
    //   }),
    // });
    // .then((response) => response.json())
    // .then((user) => this.setState({ user }));
    this.setState({ user });
  };

  render() {
    return (
      <div className="App">
        {this.state.user.username ? (
          <HomePage user={this.state.user} />
        ) : (
          <SignupForm signUp={this.signUp} />
        )}
      </div>
    );
  }
}
