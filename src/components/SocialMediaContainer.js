import React from "react";
import SocialMediaPost from "./SocialMediaPost";

export default function SocialMediaContainer(props) {
  const displayPosts = () => {
    return props.SMPosts.map((smp) => {
      console.log(smp);
      return (
        <SocialMediaPost user={props.user} post={smp} addLike={props.addLike} />
      );
    });
  };

  return <div className="SocialMediaContainer">{displayPosts()}</div>;
}
