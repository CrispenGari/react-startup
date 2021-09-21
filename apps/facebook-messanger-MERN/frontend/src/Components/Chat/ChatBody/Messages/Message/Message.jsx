import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../../../../StateProvider";
function Message({ message }) {
  const [{ user }] = useStateValue();
  return (
    <div className={"message"}>
      {message?.username !== user?.displayName && (
        <Avatar
          className="message__avatar"
          src={message?.photoURL}
          alt={message?.username}
        />
      )}

      <p
        className={` message__container ${
          message?.username === user?.displayName && "message--me"
        }`}
      >
        <small>{message?.message}</small>
      </p>
    </div>
  );
}

export default Message;
