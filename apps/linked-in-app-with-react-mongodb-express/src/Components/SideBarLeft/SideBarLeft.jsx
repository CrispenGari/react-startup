import { Avatar } from "@material-ui/core";
import { PersonAdd, Add, TurnedInNot } from "@material-ui/icons";
import React from "react";
import "./SideBarLeft.css";
const SideBarLeft = ({ user }) => {
  return (
    <div className="sidebarLeft">
      <div className="sidebarLeft__top">
        <div className="sidebarLeft__info">
          <div className="sidebarLeft__infoTop"></div>
          <Avatar
            src={user?.photoURL}
            className="sidebarLeft__Avatar"
            alt={user?.displayName ? user.displayName : user.email}
            title={user?.email}
          />
          <h2>{user?.displayName ? user.displayName : user.email}</h2>
          <small>Unemployed at None</small>
        </div>
        <hr />
        <div className="sidebarLeft__connections">
          <small>
            Connections <PersonAdd />
          </small>
          <small>Grow your network</small>
        </div>
        <div className="sidebarLeft__connections access">
          <small>Access exclusive tools & insights</small>
          <small> Try Premium Free for 1 Month</small>
        </div>
        <hr style={{ marginTop: 10 }} />
        <div className="sidebarLeft__saved">
          <TurnedInNot />
          <small>Saved Items</small>
        </div>
      </div>
      <div className="sidebarLeft__bottom">
        <small>Groups</small>
        <small>
          Events <Add />
        </small>
        <small>Followed Hashtags</small>
        <hr />
        <div className="sidebarLeft__bottomBottom">
          <small>Discover more</small>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeft;
