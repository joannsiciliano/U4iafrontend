import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultImage from "../images/default.png";

export default class UserPage extends Component {
  render() {
    return (
      <div className="UserPage">
        <img src={defaultImage} alt="" className="DefaultImage" />
        <p>Welcome, {this.props.user.username} !</p>
        <p>Status: Logged In</p>
        <Link to="/login" onClick={this.props.logout}>
          LOGOUT
        </Link>
      </div>
    );
  }
}
