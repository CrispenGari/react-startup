import React from "react";
import "./MenuItems.css";

import { GiShoppingCart } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Badge, IconButton, Avatar } from "@material-ui/core";
const MenuItems = ({ user, basket, history, isSeller }) => {
  return (
    <div className="menuiterms">
      {isSeller ? <h1>Seller</h1> : <h1>Buyer</h1>}
      <div
        className="menuitems__item__container"
        onClick={() => history.push("/notifications")}
      >
        <IconButton className="menuiterms__icon__button">
          <Badge
            color="primary"
            badgeContent=" "
            variant="dot"
            className="menuiterms__badge"
          >
            <IoMdNotificationsOutline />
          </Badge>
        </IconButton>
        <h1>Notifications</h1>
      </div>
      <div
        className="menuitems__item__container"
        onClick={() => history.push("/basket")}
      >
        <IconButton className="menuiterms__icon__button">
          <Badge
            color="primary"
            badgeContent={basket?.length}
            className="menuiterms__badge"
            size="small"
            max={10}
          >
            <GiShoppingCart />
          </Badge>
        </IconButton>
        <h1>Shopping Cart</h1>
      </div>
      <hr />
      {user ? (
        <div
          className="menuiterms__user"
          onClick={() => history.push("/admin")}
        >
          <Avatar
            src={user?.photoURL}
            alt={user?.displayName}
            className="header__user__avatar"
          />
          <h1>{user?.displayName?.split(/\s/)[0]}</h1>
        </div>
      ) : (
        <button
          onClick={() => history.push("/login")}
          className="menuiterms__login__button"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default MenuItems;
