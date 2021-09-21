import React from "react";

import {
  Apps,
  HelpOutline,
  Search,
  SelectAll,
  Settings,
  RvHookup,
  ArrowBack,
} from "@material-ui/icons";
import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import "./Header.css";
import { auth } from "../../backend/firebase";

import { useStateValue } from "../../StateProvider";
const Header = () => {
  const [{ user }] = useStateValue();
  const [expand, setExpand] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Apps className="header__icon" />
        </IconButton>
      </div>
      <div className="header__center">
        <div
          className={`search__input ${expand ? "expand" : ""}`}
          onClick={() => {
            !expand ? setExpand(true) : setExpand(false);
          }}
        >
          <Search className="header__searchIcons" />
          <input type="text" placeholder="Search" />

          {expand && (
            <div
              onClick={() => {
                setExpand(false);
              }}
            >
              <ArrowBack className="header__searchIcons" />
            </div>
          )}
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <SelectAll className="header__icon" />
        </IconButton>
        <IconButton>
          <RvHookup className="header__icon" />
        </IconButton>
        <IconButton>
          <Settings className="header__icon" />
        </IconButton>
        <IconButton>
          <HelpOutline className="header__icon" />
        </IconButton>
        <div onClick={handleClick} onMouseEnter={handleClick}>
          <Avatar
            className="header__avatar"
            src={user?.photoURL}
            alt={user?.displayName || user?.email}
          />
        </div>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className="emailheader__menu"
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <hr />
          <MenuItem
            onClick={() => {
              handleClose();
              auth.signOut();
            }}
          >
            Sign Out
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
