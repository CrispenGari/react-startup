import React from "react";
import "./Header.css";

import { DiJavascript } from "react-icons/di";
import { Menus, Controls } from "../../Components";
const Header = ({ setLines, lines, textType, setTextType }) => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__left">
          <h2>JsJupyter</h2>
          <h1>Untitled</h1>
          <p>Last Checkpoint: 4 hours ago (autosaved)</p>
        </div>
        <div className="header__top__right">
          <DiJavascript className="header__icon" />
          <button>Logout</button>
        </div>
      </div>
      <hr />
      <Menus />
      <Controls
        setLines={setLines}
        lines={lines}
        setTextType={setTextType}
        textType={textType}
      />
    </div>
  );
};

export default Header;
