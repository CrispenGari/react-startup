import React, { useEffect, useState } from "react";
import "./ChatHeader.css";
import { IconButton } from "@material-ui/core";
import {
  Star,
  StarBorder,
  Info,
  Link,
  PersonAdd,
  Notifications,
  NotificationsOff,
} from "@material-ui/icons";
function ChatHeader({ name, creator, timestamp }) {
  const [mute, setMute] = useState(false);
  const [star, setStar] = useState(false);

  const starFuction = () => {
    star ? setStar(false) : setStar(true);
  };
  const muteFuction = () => {
    mute ? setMute(false) : setMute(true);
  };
  return (
    <div className="chatheader">
      <div className="chatheader__left">
        <h2>
          #{name}
          <IconButton
            onClick={starFuction}
            className="chatheader__iconbtnSmall"
            title={!star ? "Star Room" : "UnStar Room"}
          >
            {star ? <Star /> : <StarBorder />}
          </IconButton>
        </h2>
        <p>
          Created by <strong>{creator}</strong> on{" "}
          {new Date(timestamp?.toDate()).toUTCString()}
        </p>
      </div>
      <div className="chatheader__right">
        <IconButton className="chatheader__iconbtn" title="Copy Link">
          <Link />
        </IconButton>
        <IconButton
          onClick={muteFuction}
          className="chatheader__iconbtn"
          title={mute ? "UnMute Notifications" : "Mute Notifications"}
        >
          {mute ? <NotificationsOff /> : <Notifications />}
        </IconButton>
        <IconButton className="chatheader__iconbtn" title="Invite">
          <PersonAdd />
        </IconButton>
        <IconButton className="chatheader__iconbtn" title="Room Info">
          <Info />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
