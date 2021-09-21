import React from "react";

import { Avatar, IconButton } from "@material-ui/core";

import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import {
  FiberManualRecord,
  Search,
  ExitToApp,
  AccessTime,
  HelpOutline,
} from "@material-ui/icons";
import "./Header.css";
function Header() {
  const [{ user }, dispatch] = useStateValue();

  const logout = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton title="Help">
          <HelpOutline className="header__Icon" />
        </IconButton>

        <IconButton title="History">
          <AccessTime className="header__Icon" />
        </IconButton>
      </div>
      <div className="header__center">
        <input
          type="text"
          placeholder="Search"
          className="header__searchInput"
        />
        <Search className="header__Icon" title="Search Room" />
      </div>
      <div className="header__right">
        <IconButton title="Logout" onClick={logout}>
          <ExitToApp className="header__Icon" />
        </IconButton>
        <div className="header__avatar">
          <Avatar
            title={user?.displayName}
            src={user?.photoURL}
            alt={user?.displayName}
            className="header__avatarProfile"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
