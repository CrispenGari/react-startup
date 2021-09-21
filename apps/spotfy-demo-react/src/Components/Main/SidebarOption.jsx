import React from "react";

import "./SidebarOption.css";
function SidebarOption({ label, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon fontSize="large" className="sidebarOption__Icon" />}
      {Icon ? <h4>{label}</h4> : <p>{label}</p>}
    </div>
  );
}
export default SidebarOption;
