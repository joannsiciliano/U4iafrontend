# Welcome

Welcome to U4(i)A! A very pleasant social media app. ☺︎
fork and clone this repo and run npm start to fire up the front end!

# Features

-Register or login user if one already exists
-Upload image with message to be posted on the social media feed
-Like button added

# Code example

Handling image upload with Firebase hosting

```
const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const progress = Math.round(
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setURL(url);
          });
      }
    );
  };
```

# Demo

[Watch the U4iA demo on YouTube!](https://www.youtube.com/watch?v=lgmxN7gKfuo&t=2s " watch the U4iA demo on YouTube!")

# Status

U4(i)A is currently in it's infancy. In the future I would like to implement a comment section and a addFriends feature :)

# Contact

For any further questions, please email me at joannsiciliano@gmail.com, or find me on linkDIn at https://www.linkedin.com/in/joannsiciliano/ :)

thanks for looking!
