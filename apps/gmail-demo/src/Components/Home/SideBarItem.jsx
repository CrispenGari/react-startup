import React from "react";

import "./SideBarItem.css";
const SideBarItem = ({ Icon, label, active, expandMore, handleExpandMore }) => {
  return (
    <div
      className={`sidebarItem ${active && "active"}`}
      onClick={() => {
        expandMore && handleExpandMore();
      }}
    >
      <Icon color="action" className={`sidebarItem__icon`} />
      <div className="sidebarItem__item">{label}</div>
    </div>
  );
};

export default SideBarItem;
