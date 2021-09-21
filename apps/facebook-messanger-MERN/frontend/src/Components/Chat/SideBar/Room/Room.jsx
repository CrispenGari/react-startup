import React from "react";
import "./Room.css";
import { Avatar } from "@material-ui/core";

import { useStateValue } from "../../../../StateProvider";
function Room() {
  const [{ user }] = useStateValue();

  return (
    <div className="room">
      <Avatar
        alt={user?.displayName}
        src={user?.photoURL}
        title={user?.email}
      />
      <div className="room__info">
        <h4>{user?.displayName}</h4>
        <small className="room__message">
          <span> private-message </span>
          <span>•</span>
          <span>now</span>
        </small>
      </div>
    </div>
  );
}

export default Room;
