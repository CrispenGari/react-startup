import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { LinearProgress } from "@material-ui/core";

import firebase from "firebase";
import { storage, db } from "../../firebase";
// https://www.instagram.com/crispen_gari_/
function ImageUpload({ username }) {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = (e) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (e) => {
        alert(e.message);
        console.log(e);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            // post the image

            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imgurl: url,
              username: username,
              location: "No functionality- Gari",
            });
            setImage(null);
            setCaption("");
            setProgress(0);
          });
      }
    );
  };
  return (
    <div>
      <LinearProgress variant="determinate" value={progress} />
      <input
        type="text"
        placeholder="Enter Caption"
        onChange={(e) => setCaption(e.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
export default ImageUpload;
