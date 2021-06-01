import React, { Component } from "react";
import SocialMediaFeed from "./SocialMediaFeed";
import UserPage from "./UserPage";

export default class HomePage extends Component {
  state = {
    SMPost: [],
  };

  addSMP = (smp) => {
    this.setState({
      SMPost: [...this.state.SMPost, smp],
    });
  };

  render() {
    return (
      <div className="HomePage">
        <h2>hi there {this.props.user.username} !</h2>
        <UserPage user={this.props.user} />
        <SocialMediaFeed
          user={this.props.user}
          SMPost={this.state.SMPost}
          addPost={this.addSMP}
        />
      </div>
    );
  }
}
