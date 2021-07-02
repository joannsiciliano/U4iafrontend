import React, { Component } from "react";
import SMForm from "./SMForm";
import SocialMediaContainer from "./SocialMediaContainer";

export default class SocialMediaFeed extends Component {
  render() {
    return (
      <div className="SocialMediaFeed">
        <h1>--U4(i)A--</h1>
        <SMForm user={this.props.user} addPost={this.props.addPost} />
        <SocialMediaContainer
          user={this.props.user}
          SMPosts={this.props.SMPosts}
          addLike={this.props.addLike}
        />
      </div>
    );
  }
}
