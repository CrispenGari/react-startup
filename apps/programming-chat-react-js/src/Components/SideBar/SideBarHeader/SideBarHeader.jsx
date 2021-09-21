import React from "react";

import "./SideBarHeader.css";

import { Group } from "@material-ui/icons";
function SideBarHeader() {
  return (
    <div className="sidebarheader">
      <div className="sidebarheader__top">
        <h2>Programming Comunity</h2>
        <Group />
      </div>
      <p>Developed by Crispen Gari #strawbery.com</p>
    </div>
  );
}

export default SideBarHeader;
