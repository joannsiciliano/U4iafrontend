import React from "react";

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
          <button onClick={handleClick}> ☻</button>{" "}
        </li>

        {props.post.likes}
      </ul>
    </div>
  );
}
