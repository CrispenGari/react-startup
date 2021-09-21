import React from "react";
import { Avatar, Badge } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";

import "./Header.css";
const defaultProps = {
  color: "secondary",
  children: <MailIcon />,
};
function Header({ username, messages }) {
  return (
    <div className="header">
      <div className="header__right">
        <Avatar
          className="header__logo"
          src="http://pngimg.com/uploads/strawberry/strawberry_PNG2635.png"
          alt="strawberry chart"
        />
        <div>
          <h2>Welcome, </h2>
          <span>
            <small>{username ? username : "Uknown user"}</small>
          </span>
        </div>
      </div>
      <div className="header__messages">
        <Badge badgeContent={messages.length} max={999} {...defaultProps} />
      </div>
    </div>
  );
}

export default Header;
