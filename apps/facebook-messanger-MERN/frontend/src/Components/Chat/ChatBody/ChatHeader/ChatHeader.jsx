import React from "react";

import "./ChatHeader.css";
import { Avatar, IconButton } from "@material-ui/core";
import { Videocam, Info, Phone } from "@material-ui/icons";
import { useStateValue } from "../../../../StateProvider";
import { auth } from "../../../../firebase/firebase";

function ChatHeader() {
  const [{ user }] = useStateValue();
  return (
    <div className="chatheader">
      <div className="chatheader__left">
        <Avatar
          alt={user?.displayName}
          src={user?.photoURL}
          title={user?.email}
        />
        <div className="chatheader__leftInfo">
          <h2>{user?.displayName}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="chatheader__right">
        <Phone />
        <Videocam />
        <IconButton onClick={() => auth.signOut()}>
          <Info />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
