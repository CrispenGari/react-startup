import React from "react";
import { Search, MoreVert, CameraAlt } from "@material-ui/icons";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { IconButton, Badge } from "@material-ui/core";
function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__top">
        <h1>WhatsApp</h1>
        <div className="header__top">
          <IconButton className="header__iconButton">
            <Search />
          </IconButton>
          <IconButton className="header__iconButton">
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="header__bottom">
        <IconButton
          onClick={() => history.push("/camera")}
          className="header__iconButton"
        >
          <CameraAlt />
        </IconButton>
        <h1
          className="header__bottomH1 activetab"
          onClick={() => history.push("/")}
        >
          CHATS
        </h1>
        <h1
          className="header__bottomH1"
          onClick={() => history.push("/status")}
        >
          STATUS
        </h1>
        <h1 className="header__bottomH1" onClick={() => history.push("/calls")}>
          CALLS
        </h1>
        <div className="header__bottomSelected"></div>
      </div>
    </div>
  );
}

export default Header;
