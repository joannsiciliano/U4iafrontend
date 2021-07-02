import React from "react";
import like from "../images/like.png";

export default function SocialMediaPost(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.addLike(props.post);
  };
  return (
    <div className="SocialMediaPost">
      <ul>
        <li> {props.post.message}</li>
        <img src={props.post.featured_image} className="FeaturedImage" />
        <li>
          <img src={like} onClick={handleClick} className="LikeButton" />
          <h3>{props.post.likes}</h3>
        </li>
      </ul>
    </div>
  );
}
