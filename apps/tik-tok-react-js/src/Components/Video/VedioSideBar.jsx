import React, { useState } from "react";
import "./VedioSideBar.css";
import { Avatar, IconButton } from "@material-ui/core";
import { database, storage } from "../../firebase";
import {
  FavoriteBorder,
  Favorite,
  Comment,
  Share,
  AddAPhoto,
} from "@material-ui/icons";
import firebase from "firebase";
function VedioSideBar({ postId, likes, comments, shares, imgurl }) {
  const [like, setLikes] = useState(likes);
  const [liked, setLiked] = useState(false);
  const [files, setFiles] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes);
      // database.collection("posts").doc("AoAh30jkDVx6sNsvZQ9D").update({
      //   likes: likes,
      // });
    } else {
      setLiked(true);
      setLikes(likes + 1);
      // database.collection("posts").doc("AoAh30jkDVx6sNsvZQ9D").update({
      //   likes: like,
      // });
    }
  };
  const upload = (event) => {
    event.preventDefault();
    setFiles(event.target.files[0]);
    if (files) {
      storage
        .ref(`videos/${files.name}`)
        .put(files)
        .then(() => {
          storage
            .ref("videos")
            .child(files.name)
            .getDownloadURL()
            .then((url) => {
              database.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                vidUrl: url,
                username: "Unknown",
                likes: 1078,
                music: "Default tik tok music by - No functionality -Gari",
                caption: "This is where the caption must be",
                tags: ["crispen_gari", "crispen_dev", "gari_gari", "gari_dev"],
                shares: 15,
              });
              setFiles(null);
              alert("Done!!")
            });
        }).catch(error=>console.log(error));
    } else {
      alert("Failed to post a video try again!!");
    }
  };

  return (
    <div className="videosidebar">
      <div className="videosidebar__item">
        <input
          accept="video/*"
          className="videosidebar__input"
          id="icon-button-file"
          type="file"
          onChange={upload}
        />
        <label htmlFor="icon-button-file">
          <IconButton aria-label="upload picture" component="span">
            <AddAPhoto className="videosidebar__cameraIcon" />
          </IconButton>
        </label>
      </div>
      <div className="videosidebar__item">
        {liked ? (
          <Favorite onClick={handleLike} />
        ) : (
          <FavoriteBorder onClick={handleLike} />
        )}
        <span>{like}</span>
      </div>
      <div className="videosidebar__item">
        <Comment />
        <span>{comments}</span>
      </div>
      <div className="videosidebar__item">
        <Share />
        <span>{shares}</span>
      </div>
      <Avatar className="videosidebar__avatar" src={imgurl} alt={imgurl} />
    </div>
  );
}
export default VedioSideBar;
