import React from "react";

import { Menu, Search, Apps, Settings, HelpOutline } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import "./Header.css";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu color="action" className="header__icon" />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"
          alt="gmail-logo"
        />
      </div>
      <div className="header__center">
        <IconButton>
          <Search color="action" className="header__icon" />
        </IconButton>
        <input type="text" placeholder="Search Mail" />
      </div>
      <div className="header__left">
        <IconButton>
          <HelpOutline color="action" className="header__icon" />
        </IconButton>{" "}
        <IconButton>
          <Settings color="action" className="header__icon" />
        </IconButton>{" "}
        <IconButton>
          <Apps color="action" className="header__icon" />
        </IconButton>
        <Avatar
          src="../../images.png"
          alt={user?.displayName}
          title="Sign Out"
          className="header__avatar_"
          onClick={() => {
            auth.signOut();
            history.replace("/");
          }}
        />
      </div>
    </div>
  );
};

export default Header;
