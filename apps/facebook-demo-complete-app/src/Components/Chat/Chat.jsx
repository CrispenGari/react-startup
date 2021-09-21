import React from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";
function Chat({ username, src }) {
  return (
    <div className="chat">
      <Avatar src={src} alt={username} />
      <h4>{username}</h4>
    </div>
  );
}

export default Chat;
