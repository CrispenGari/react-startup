import React, { useState, useEffect } from "react";
import styles from "./Post.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import ShowMoreText from "react-show-more-text";
import { Avatar, Input, Button } from "@material-ui/core";
import firebase from "firebase";

import {
  Home,
  Search,
  FavoriteBorder,
  AddCircleOutline,
  CameraAlt,
  Send,
  AddAlertOutlined,
  ChatBubbleOutlineRounded,
} from "@material-ui/icons";
function Post({
  post: { username, caption, imgurl, location },
  postId,
  db,
  user,
}) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    var unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      comment: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  const deletePost = () => {
    db.collection("posts").doc(postId).delete();
    alert("Deleted");
  };

  const deleteComment = () => {
    // db.collection("posts")
    //   .doc(postId)
    //   .collection("comments")
    //   .doc(doc.id)
    //   .delete();
  };
  return (
    <div className="container">
      <div className={styles.container__post}>
        <div className={styles.poster_user}>
          <Avatar alt={username} src={imgurl} />
          <div className={styles.user_location}>
            <h6 className={styles.username}>{username}</h6>
            <small>{location}</small>
          </div>
        </div>
        <div className={styles.post_container}>
          <img src={imgurl} alt="Post" className={styles.post_image} />
        </div>
        <div className={styles.post_caption}>
          <div className={styles.post_reactions}>
            <div className={styles.left_icons}>
              <div className={styles.post_icons_control}>
                <FavoriteBorder color="action" />
              </div>
              <div className={styles.post_icons_control}>
                <ChatBubbleOutlineRounded color="action" />
              </div>
              <div className={styles.post_icons_control}>
                <Send className={styles.send_icon} color="action" />
              </div>
            </div>
            <div className={styles.post_icons_control}>
              <AddAlertOutlined color="action" onClick={deletePost} />
            </div>
          </div>
          <strong className={styles.username}>{username} </strong>{" "}
          <small id={styles.caption_main}>{caption} </small>
          <div className={styles.comment_container}>
            <span className={styles.comment_count}>
              {comments ? comments.length : "loading..."} Comments
            </span>
            <br></br>
            <ShowMoreText
              lines={3}
              more="More comments..."
              less="Less comments..."
              anchorClass=""
              // onClick={() => alert("expanded")}
              expanded={false}
              // width={280}
            >
              {comments.map((comment) => (
                <p className={styles.comment}>
                  <b>{comment.username}</b> {comment.comment}{" "}
                  <DeleteIcon color="action" onClick={deleteComment} />
                </p>
              ))}
            </ShowMoreText>
          </div>
        </div>
        <div className={styles.comment_form_container}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={styles.comment_form}
          >
            <input
              type="text"
              placeholder="Add a comment..."
              className={styles.post_input}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <button
              type="submit"
              disabled={comment ? false : true}
              className={styles.button_post}
              onClick={postComment}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Post;
