import React from "react";
import "./NavItem.css";

function NavItem({ title }) {
  return (
    <div className="navitem">
      <h1>{title}</h1>
    </div>
  );
}

export default NavItem;
