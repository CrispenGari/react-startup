import React, { forwardRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import { Avatar } from "@material-ui/core";
import "./Message.css";
const Message = forwardRef(({ messages, username }, ref) => {
  const isUser = messages.username === username;
  return (
    <div className="message">
      <div className={`message_guest_user ${isUser && "message___user___me"}`}>
        <div className="message__usernameTimestamp">
          <span className="message_username">
            <small>
              <strong>{messages.username}</strong>
            </small>
          </span>
          <small className="message_timestamp">
            {messages.timestamp
              ? new Date(messages.timestamp.seconds * 1000).toLocaleTimeString()
              : "now"}
          </small>
        </div>
        <div className="message__conatiner">
          <div className="message__avatar">
            <Avatar src="./images/profile" alt={messages.username} />
          </div>
          <div className="message__body">
            <span>{messages.message}</span>
          </div>
        </div>
        <div className="message__status">
          <small className="message_seen">delivered</small>
        </div>
      </div>
    </div>
  );
});
export default Message;
