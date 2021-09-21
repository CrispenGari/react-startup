import { Avatar, Button, IconButton } from "@material-ui/core";
import {
  MoreHoriz,
  Add,
  ThumbUpAltOutlined,
  CommentOutlined,
  SendOutlined,
  ReplyOutlined,
  Favorite,
  ThumbUp,
  CameraAltOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";
import { Comment } from "../../Components";
import { database } from "../../backend/firebase";
import firebase from "firebase";
const Post = ({ id, data, user }) => {
  const vidRef = React.useRef();
  const [playing, setPlaying] = React.useState(false);
  const [comments, setComments] = React.useState([]);

  const [comment, setComment] = React.useState("");
  const [showcomment, setShowComment] = React.useState(false);
  const sendComment = (e) => {
    e.preventDefault();
    database.collection("posts").doc(id).collection("comments").add({
      comment: comment,
      username: user?.displayName,
      userAvatar: user?.photoURL,
      userEmail: user?.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  const playVid = () => {
    if (playing) {
      vidRef.current.pause();
      setPlaying(false);
    } else {
      vidRef.current.play();
      setPlaying(true);
    }
  };

  React.useEffect(() => {
    const unsubscribe = database
      .collection("posts")
      .doc(id)
      .collection("comments")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });

    return () => unsubscribe();
  }, [id]);
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__topTop">
          <Avatar
            className="post__avatar"
            alt={data?.username}
            src={data?.userAvatar}
            title={data?.userEmail}
          />
          <div className="post__info">
            {data?.username}
            <small>
              1,386 followers
              <span>Promoted</span>
            </small>
          </div>
          <div className="post__right">
            <Button
              variant="contained"
              color="primary"
              className="post__button"
              startIcon={<Add />}
            >
              Follow
            </Button>
            <IconButton>
              <MoreHoriz />
            </IconButton>
          </div>
        </div>
        <div className="post__topBottom">
          <small>{data?.caption}</small>
        </div>
        <small className="post__seeMore">
          <span></span>
          <span>...see more</span>
        </small>
      </div>
      {data?.imgurl ? (
        <img
          src={data?.imgurl}
          alt="post"
          loading="lazy"
          className="post__media"
        />
      ) : data?.docUrl ? (
        <iframe title={id} src={data?.docUrl} className="post__media"></iframe>
      ) : data?.vidUrl ? (
        <video
          onClick={playVid}
          src={data?.vidUrl}
          ref={vidRef}
          loop
          muted={false}
          className="post__media"
        ></video>
      ) : (
        <></>
      )}

      <div className="post__likes">
        <ThumbUp className="post__like" />
        <Favorite className="post__like" />

        <small>367 likes</small>
      </div>
      <div className="post__controlls">
        <Button
          variant="contained"
          color="primary"
          className="post__button"
          startIcon={<ThumbUpAltOutlined />}
        >
          Like
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="post__button"
          startIcon={<CommentOutlined />}
          onClick={() => setShowComment(true)}
        >
          Comment
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="post__button"
          startIcon={<ReplyOutlined />}
        >
          Share
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="post__button"
          startIcon={<SendOutlined />}
        >
          Send
        </Button>
      </div>
      <hr style={{ marginTop: 10, marginBottom: 10 }} />
      <div className="post__bottom" onClick={() => setShowComment(true)}>
        <small>Be the first to comment on this</small>
      </div>
      {showcomment && (
        <React.Fragment>
          <form className="post__comment">
            <div>
              <Avatar
                alt={user?.displayName}
                title={user?.email}
                className="post__commentAvatar"
                src={user?.photoURL}
              />
              <div className="post__input">
                <input
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <CameraAltOutlined />
              </div>
            </div>

            {comment && (
              <button type="submit" onClick={sendComment}>
                Post
              </button>
            )}
          </form>
          <div className="post__comments">
            {comments.map((comment, i) => (
              <Comment key={i} comment={comment} user={user} />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Post;
