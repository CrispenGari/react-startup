import React from "react";
import "./Header.css";
import {
  Search,
  People,
  Message,
  Notifications,
  Facebook,
  ArrowDropDown,
  Help,
} from "@material-ui/icons";
import { Avatar, IconButton, Badge } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Facebook className="header__facebooklogo" />
        <div className="header__leftInput">
          <input type="text" placeholder="Search" />
          <div className="header__searchIcon">
            <Search />
          </div>
        </div>
      </div>
      <div className="header__left">
        <div className="header__leftInfo">
          <Avatar src={user?.photoURL} alt={user?.displayName} />
          <h4>{user?.displayName}</h4>
        </div>
        <h4>Home</h4>
        <h4>Create</h4>
        <div className="header__leftIcons">
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <People className="header__icon" titleAccess="Friend Request" />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <Message className="header__icon" titleAccess="Messages" />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <Notifications
                className="header__icon"
                titleAccess="Notifications"
              />
            </Badge>
          </IconButton>
        </div>
        <div className="header__left2">
          <IconButton className="header__left2IconBtn">
            <Help />
          </IconButton>
          <IconButton className="header__left2IconBtn">
            <ArrowDropDown />
          </IconButton>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
