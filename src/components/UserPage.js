import React, { Component } from "react";

export default class UserPage extends Component {
  render() {
    return (
      <div className="UserPage">
        <img src="https://i.imgur.com/2p63e2e.png" alt="" />
        <p>Username: {this.props.user.username}</p>
        <p>bio</p>
        <button className="LogoutButton">Logout</button>
      </div>
    );
  }
}
