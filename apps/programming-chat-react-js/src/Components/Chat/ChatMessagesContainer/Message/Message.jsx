import React from "react";
import "./Message.css";

import { Avatar } from "@material-ui/core";

import { DoneAll } from "@material-ui/icons";
function Message({ avatar, username, timestamp, message }) {
  return (
    <div className="message">
      <Avatar src={avatar} alt={username} className="message__avatar" />
      <div className="message__textContainer">
        <h2>{username}</h2>
        <p>{message} </p>
        <small>
          on {new Date(timestamp?.toDate()).toUTCString()}
          <DoneAll className="message__sendIcon" />
        </small>
      </div>
    </div>
  );
}

export default Message;
