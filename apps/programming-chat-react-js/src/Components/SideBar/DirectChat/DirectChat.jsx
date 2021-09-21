import React from "react";

import { FiberManualRecord } from "@material-ui/icons";
import "./DirectChat.css";
function DirectChat({ id, username }) {
  return (
    <div className="directchat">
      <FiberManualRecord />
      <h2>{username}</h2>
    </div>
  );
}

export default DirectChat;
