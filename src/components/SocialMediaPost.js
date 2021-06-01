import React from "react";

export default function SocialMediaPost(props) {
  return (
    <div className="SocialMediaPost">
      <ul>
        <li>{props.user.username}</li>
        <li> {props.SMPost.message}</li>
        <li>{props.SMPost.image}</li>
      </ul>
    </div>
  );
}
