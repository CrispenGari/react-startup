import React from "react";
import "./NewTweet.css";
import { Avatar } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import firebase from "firebase";
import { database } from "../../firebase";
import { useStateValue } from "../../StateProvider";
function NewTweet() {
  const [{ userinfo, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [tweet, setTweet] = useState("");
  const l = Math.round(Math.random() * 1000);
  const [tags, setTags] = useState([]);
  const [likes, setLikes] = useState(l);
  const [comments, setComments] = useState([]);
  const [retweets, setRetweets] = useState([]);
  const [isRetweet, setIsRetweet] = useState(false);

  const sendTweet = () => {
    if (user?.username) {
      database
        .collection("tweets")
        .add({
          username: user?.username,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          tweet: tweet,
          tags: tags,
          likes: likes,
          comments: comments,
          retweets: retweets,
          retweter: "crispen_dev",
          isRetweet: isRetweet,
        })
        .then(() => {
          setTweet("");
          history.push("/home");
        })
        .catch((error) => alert(error.message));
    } else {
      history.push("/");
    }
  };
  return (
    <div className="newtweet">
      <header className="newtweet__header">
        <CloseRounded
          className="newtweet__closeIcon"
          onClick={() => history.push("/home")}
        />
        <button className="newtweet__button" onClick={sendTweet}>
          Tweet
        </button>
      </header>
      <div className="newtweet__post">
        <Avatar
          className="newtweet__avatar"
          src="./images/img.png"
          alt={user?.username}
        />
        <textarea
          className="newtweet__textArea"
          placeholder="What's happening?"
          spellCheck={false}
          value={tweet}
          cols="30"
          onChange={(e) => setTweet(e.target.value)}
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}

export default NewTweet;
