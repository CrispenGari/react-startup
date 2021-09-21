import React from "react";
import "./Header.css";

import { FontDownload, Done, History, Eco } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__left" onClick={() => history.push("/")}>
        <FontDownload />
        <h1>TT</h1>
        <Eco />
      </div>
      <div className="header__center">
        <h1>Text Toxicity</h1>
        <Done />
      </div>
      <div className="header__right">
        <IconButton title="History" onClick={() => history.push("/history")}>
          <History className="header__icon-history" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
