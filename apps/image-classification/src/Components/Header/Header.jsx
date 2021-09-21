import React from "react";
import "./Header.css";

import { FontDownload, Done, History, Eco } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <FontDownload />
        <h1>IC</h1>
        <Eco />
      </div>
      <div className="header__center">
        <h1>Image Classification</h1>
        <Done />
      </div>
      <div className="header__right">
        <IconButton title="History">
          <History className="header__icon-history" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
