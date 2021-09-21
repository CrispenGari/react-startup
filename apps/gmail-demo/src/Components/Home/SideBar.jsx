import React from "react";

import {
  Star,
  FormatQuote,
  LabelImportant,
  Sms,
  Mail,
  Add,
  Person,
  Phone,
  Inbox,
  Videocam,
  CancelScheduleSend,
  Label,
  Delete,
  ExpandLess,
  Error,
  Keyboard,
  WatchLater,
  Send,
  InsertDriveFile,
  ExpandMore,
  Settings,
} from "@material-ui/icons";
import SideBarItem from "./SideBarItem";
import { useStateValue } from "../../StateProvider";
import "./SideBar.css";
import { Avatar, IconButton } from "@material-ui/core";
const SideBar = () => {
  const [expandMore, setExpandMore] = React.useState(false);
  const [{ user }, dispatch] = useStateValue();
  const handleExpandMore = () => {
    if (expandMore) {
      setExpandMore(false);
    } else {
      setExpandMore(true);
    }
  };
  console.log({ user });
  return (
    <div className="sidebar">
      <div className="sidebar__buttonContainer">
        <button className="sidebar__button">Compose</button>
      </div>
      <div className="sidebar__top">
        <SideBarItem Icon={Inbox} active label="Inbox" />
        <SideBarItem Icon={Star} label="Starred" />
        <SideBarItem Icon={WatchLater} label="Snoozed" />
        <SideBarItem Icon={Send} label="Sent" />
        <SideBarItem Icon={InsertDriveFile} label="Drafts" />
        {!expandMore ? (
          <SideBarItem
            Icon={ExpandMore}
            label="More"
            expandMore
            handleExpandMore={handleExpandMore}
          />
        ) : (
          <SideBarItem
            Icon={ExpandLess}
            label="Less"
            expandMore
            handleExpandMore={handleExpandMore}
          />
        )}
        {expandMore && (
          <div className="sidebar__more">
            <SideBarItem Icon={LabelImportant} label="Important" />
            <SideBarItem Icon={Sms} label="Chats" />
            <SideBarItem Icon={CancelScheduleSend} label="Scheduled" />
            <SideBarItem Icon={Mail} label="All Mail" />
            <SideBarItem Icon={Error} label="Spam" />
            <SideBarItem Icon={Delete} label="Bin" />
            <SideBarItem Icon={Label} label="Categories" />
            <SideBarItem Icon={Settings} label="Manage labels" />
            <SideBarItem Icon={Sms} label="Create new label" />
          </div>
        )}
      </div>

      <div className="sidebar__meeting">
        <p>Meet</p>
        <SideBarItem Icon={Videocam} label="Start a meeting" />
        <SideBarItem Icon={Add} label="Join a meeting" />
      </div>

      <div className="sidebar__hangouts">
        <p>Hangouts</p>
        <div className="sidebar__avatarAdd">
          <div className="sidebar__AvatarUserName">
            <Avatar
              alt={user?.displayName}
              className="sidebar__avatar"
              src="../images/images.png"
            />
            <p>{user?.displayName}</p>
          </div>
          <IconButton>
            <Add color="action" />
          </IconButton>
        </div>
        <div className="sidebar__chatsArea">
          <p>No recent chats</p>
          <p>Start a new one</p>
        </div>
      </div>

      <div className="sidebar__footer">
        <div></div>
        <div className="sidebar__footerIcons">
          <Person color="action" className="sidebar__footerIcon" />
          <FormatQuote color="action" className="sidebar__footerIcon" />
          <Phone color="action" className="sidebar__footerIcon" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideBar;
