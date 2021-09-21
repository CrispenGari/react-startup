import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import { Account } from "../../Components";

import "./HeaderNav.css";
const HeaderNav = ({ user, text, Icon, active }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  if (Icon) {
    return (
      <div className={`headerNav ${active && "headerNav--active"}`}>
        {Icon}
        <small>{text}</small>
      </div>
    );
  } else {
    return (
      <div className="headerNav">
        <Avatar
          src={user?.photoURL}
          className="headerNavAvatar"
          alt={user?.displayName}
        />
        <small>
          {text} <ArrowDropDown onClick={handleClick} />
          <Menu
            className="headerNavMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Account user={user} />
            </MenuItem>
          </Menu>
        </small>
      </div>
    );
  }
};

export default HeaderNav;
