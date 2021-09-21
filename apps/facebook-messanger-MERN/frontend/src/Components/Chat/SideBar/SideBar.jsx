import React from "react";
import "./SideBar.css";
import Room from "./Room/Room";
import { VideoCall, Settings, Create, Search } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

import { useStateValue } from "../../../StateProvider";
function SideBar() {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebar">
      <div className="sidebar__topheader">
        <div className="sidebar__top">
          <div className="sidebar__topleft">
            <Avatar
              src={user?.photoURL}
              alt={user?.displayName}
              title={user?.email}
            />
            <h2>Chats</h2>
          </div>
          <div className="sidebar__topright">
            <IconButton className="sidebar__toprightIconBtn">
              <Settings className="sidebar__toprightIcon" />
            </IconButton>
            <IconButton className="sidebar__toprightIconBtn">
              <VideoCall className="sidebar__toprightIcon" />
            </IconButton>
            <IconButton className="sidebar__toprightIconBtn">
              <Create className="sidebar__toprightIcon" />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__topInput">
          <Search />
          <input type="text" placeholder="Search Messenger" />
        </div>
      </div>
      <div className="sidebar__roomcontainer">
        <Room />
      </div>
    </div>
  );
}

export default SideBar;
