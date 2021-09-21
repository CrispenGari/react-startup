import React, { useState, useEffect } from "react";
import "./Post.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  PhotoCamera,
  ColorLens,
  Gif,
  Redo,
  ThumbUpAlt,
  MoreHoriz,
  Comment,
  InsertEmoticon,
  People,
} from "@material-ui/icons";
import { database } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
function Post({ id, data }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [{ user }] = useStateValue();
  const handleComment = (event) => {
    event.preventDefault();
    database.collection("posts").doc(id).collection("comments").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      comment: comment,
      commenter: user?.displayName,
      commenter_avatar: user?.photoURL,
    });
    setComment("");
  };

  useEffect(() => {
    const unsubscribe = database
      .collection("posts")
      .doc(id)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });

    return () => {
      unsubscribe();
    };
  }, [id]);
  console.log(data, id);
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={data?.username_url} />
        <div className="post__usernameTime">
          <h4>{data?.username}</h4>
          <div className="post__timestampPublic">
            <small>
              {new Date(
                data?.timestamp ? data?.timestamp.toDate() : ""
              ).toDateString()}
            </small>{" "}
            <p>•</p>
            <People />
          </div>
        </div>
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </div>
      <small>{data?.caption}</small>
      <div className="post__body">
        {data?.image_url ? <img src={data?.image_url} alt="post" /> : ""}
      </div>
      <div className="post__bottom">
        <div className="post__likescomments">
          <small>4 likes</small>
          <small>4 comments</small>
        </div>
        <div className="post__buttons">
          <IconButton>
            <ThumbUpAlt />
          </IconButton>
          <IconButton>
            <Comment />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
        </div>
        <form className="post__comemtsInput">
          <Avatar />
          <div className="input__field">
            <input
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="input__fieldIcons">
              <IconButton className="input__fieldIconButton">
                <InsertEmoticon className="input__fieldIcon" />
              </IconButton>
              <IconButton className="input__fieldIconButton">
                <PhotoCamera className="input__fieldIcon" />
              </IconButton>
              <IconButton className="input__fieldIconButton">
                <Gif className="input__fieldIcon" />
              </IconButton>

              <IconButton className="input__fieldIconButton">
                <ColorLens className="input__fieldIcon" />
              </IconButton>
            </div>
          </div>
          <button type="submit" onClick={handleComment}></button>
        </form>
        <div className="post__commentContainer">
          {comments.map((comment, i) => (
            <div className="post__comment">
              <Avatar
                className="post__commentAvatar"
                src={comment.commenter_avatar}
                alt={comment.commenter}
              />
              <p key={i}>
                <strong>{comment.commenter}</strong>
                <small>{comment.comment}</small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
