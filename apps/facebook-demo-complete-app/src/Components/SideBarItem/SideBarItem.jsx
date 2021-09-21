import React from "react";
import "./SideBarItem.css";
import { Avatar } from "@material-ui/core";
function SideBarItem({ Icon, src, title, color }) {
  return (
    <div className="sidebaritem">
      {Icon ? (
        <Icon style={{ color: color }} />
      ) : (
        <Avatar src={src} className="sidebaritem__avatar" />
      )}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarItem;
