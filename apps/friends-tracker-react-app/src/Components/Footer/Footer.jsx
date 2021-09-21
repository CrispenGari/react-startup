import React from "react";

import "./Footer.css";
import { Avatar, Badge } from "@material-ui/core";
const Footer = ({ user, users }) => {
  return (
    <div className="footer">
      <h2>
        <span>Friends Online</span> <span>{users?.length} online</span>
        <span>{user?.displayName}</span>
      </h2>
      <div className="footer__users">
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          badgeContent={<div className="footer__user--active"></div>}
        >
          <Avatar
            className="footer__avatar"
            title="you"
            src={user?.photoURL}
            alt={user?.displayName}
            title={user?.email}
          />
        </Badge>
        {users.map((user_info, i) =>
          user_info.username === user.displayName ? (
            <div></div>
          ) : (
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              badgeContent={<div className="footer__user--active"></div>}
            >
              <Avatar
                className="footer__avatar"
                title="you"
                src={user_info?.image_url}
                alt="U"
                title={user_info?.username}
              />
            </Badge>
          )
        )}
      </div>
    </div>
  );
};

export default Footer;
