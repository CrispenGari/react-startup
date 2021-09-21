import { Avatar } from "@material-ui/core";
import { CommentOutlined, ThumbUpOutlined } from "@material-ui/icons";
import React from "react";
import "./Comment.css";
const Comment = ({ comment, user }) => {
  return (
    <div className="comment">
      <div className="comment__container">
        <Avatar
          className="comment__Avatar"
          title={comment?.userEmail}
          src={comment?.userAvatar}
          alt={comment?.username}
        />
        <div className="comment__body">
          <small>
            <span>
              {comment?.username ? comment?.username : comment?.userEmail} •
            </span>{" "}
            <span className="comment__you">
              {comment?.username === user?.displayName ? "You" : "Someone"}
            </span>
          </small>
          <small>Unemployed at none</small>
          <small>{comment?.comment}</small>
        </div>
      </div>
      <ThumbUpOutlined />
      <CommentOutlined />
    </div>
  );
};

export default Comment;
