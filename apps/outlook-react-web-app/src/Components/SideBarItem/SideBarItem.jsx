import React from "react";

import "./SideBarItem.css";
const SideBarItem = ({ Icon, active, title }) => {
  return (
    <div
      className={`sidebaritem ${!Icon && "sidebaritem--add"} ${
        active && "sidebaritem--active"
      }`}
    >
      {Icon}
      <h5>{title}</h5>
    </div>
  );
};

export default SideBarItem;
