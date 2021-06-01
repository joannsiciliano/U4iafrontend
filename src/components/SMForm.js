import React, { useState } from "react";

const SMPostURL = "http://localhost:3000/SocialMediaPosts";

export default function SMForm(props) {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(SMPostURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        image: image,
      }),
    })
      .then((response) => response.json())
      .then((SMP) => props.addPost(SMP));

    setMessage("");
    setImage("");
  };

  return (
    <div className="SMFormDiv">
      <form method="POST" onSubmit={handleSubmit} className="SMForm">
        <label for="message">
          "What's on your mind, {props.user.username}?
        </label>
        <textarea
          rows="6"
          cols="50"
          className="MessageInput"
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <input type="submit" value="Send it" />
      </form>
    </div>
  );
}
