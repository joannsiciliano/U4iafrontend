import React from "react";
import SocialMediaPost from "./SocialMediaPost";

export default function SocialMediaContainer(props) {
  const displayPosts = () => {
    return props.SMPost.map((smp) => {
      console.log(smp);
      return <SocialMediaPost user={props.user} />;
    });
  };

  return <div className="SocialMediaContainer">{displayPosts()}</div>;
}
