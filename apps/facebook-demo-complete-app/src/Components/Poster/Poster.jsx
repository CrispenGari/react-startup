import React, { useState } from "react";
import "./Poster.css";
import { Avatar, Button, LinearProgress } from "@material-ui/core";
import { Person, MoreHoriz, VideoCall, Photo } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";
import { storage, database } from "../../firebase";
import firebase from "firebase";
function Poster() {
  const [{ user }] = useStateValue();
  const names = user?.displayName.split(" ");
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [postUrl, setPostUrl] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  const post = (event) => {
    event.preventDefault();
    if (image || caption) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              // Post an image
              console.log(postUrl);
              database.collection("posts").add({
                username: user?.displayName,
                username_url: user?.photoURL,
                image_url: url,
                caption: caption ? caption : "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              });
              setPostUrl(url);
            });
        }
      );
    }
    setCaption("");
    setImage(null);
    setProgress(0);
    setPostUrl("");
  };

  return (
    <form className="poster">
      <LinearProgress variant="determinate" value={progress} />
      <h4>Create Post</h4>
      <div className="poster__input">
        <Avatar src={user?.photoURL} alt={user?.displayName} />
        <input
          type="text"
          placeholder={`What's on your mind, ${names[0]}?`}
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>
      <div className="poster__bottons">
        <Button
          variant="contained"
          color="action"
          className="poster__botton"
          startIcon={<VideoCall className="poster__bottonvidcall" />}
        >
          Create Room
        </Button>
        <input
          accept="image/*"
          className="poster__fileInput"
          id="icon-button-file"
          type="file"
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="action"
          className="poster__botton"
          startIcon={<Photo className="poster__bottonphoto" />}
        >
          <label htmlFor="icon-button-file">Photo/Video</label>
        </Button>

        <Button
          variant="contained"
          color="action"
          className="poster__botton"
          startIcon={<Person className="poster__bottonperson" />}
        >
          Tag Friends
        </Button>
        <Button
          variant="contained"
          color="action"
          className="poster__botton"
          startIcon={<MoreHoriz className="poster__bottonmore" />}
        ></Button>
      </div>
      <button type="submit" style={{ display: "none" }} onClick={post}></button>
    </form>
  );
}

export default Poster;
