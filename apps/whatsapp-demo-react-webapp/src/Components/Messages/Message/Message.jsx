import React from "react";

import "./Message.css";
import { DoneAll } from "@material-ui/icons";
import { useStateValue } from "../../../StateProvider";
function Message({ data }) {
  const [{ user }] = useStateValue();
  return (
    <div
      className={`message ${data.username === user.displayName && "messageme"}`}
    >
      <p>
        {data.message}
        <DoneAll className="messagesent" />
      </p>
    </div>
  );
}

export default Message;
