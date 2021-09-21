import React from "react";
import "./Menus.css";
const Menus = () => {
  return (
    <div className="menus">
      <div className="menu__left">
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Insert</p>
        <p>Cell</p>
        <p>Kernel</p>
        <p>Widgets</p>
        <p>Help</p>
      </div>
      <div className="menu__right">
        <button>Not Trusted</button>|<h1>JavaScript</h1>
      </div>
    </div>
  );
};

export default Menus;
