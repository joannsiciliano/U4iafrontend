import React, { Component } from "react";
import SMForm from "./SMForm";
import SocialMediaContainer from "./SocialMediaContainer";

export default class SocialMediaFeed extends Component {
  render() {
    return (
      <div className="SocialMediaFeed">
        <h2>socialmediafeed</h2>
        <SMForm user={this.props.user} addPost={this.props.addPost} />
        <SocialMediaContainer
          user={this.props.user}
          SMPost={this.props.SMPost}
        />
      </div>
    );
  }
}
