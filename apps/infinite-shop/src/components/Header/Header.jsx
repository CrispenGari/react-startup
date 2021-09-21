import React, { useEffect, useState } from "react";
import "./Header.css";
import { GiOverInfinity } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Badge, IconButton, Avatar, Popover } from "@material-ui/core";
import { Form, MenuItems } from "../../components";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

const Header = () => {
  const user = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);
  const history = useHistory();
  const [isSeller, setIsSeller] = useState(!false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => setIsSeller(false), []);
  return (
    <div className="header">
      <div className="header__left" onClick={() => history.replace("/")}>
        <GiOverInfinity className="header__left__icon" />
        <h1>Shops</h1>
      </div>
      {location?.pathname === "/" && (
        <div className="header__center">
          <Form />
        </div>
      )}
      <div className="header__right">
        {isSeller ? <h1>Seller</h1> : <h1>Buyer</h1>}
        <IconButton
          className="header__right__icon__button"
          onClick={() => history.push("/notifications")}
        >
          <Badge
            color="primary"
            badgeContent=" "
            variant="dot"
            className="header__right__badge"
          >
            <IoMdNotificationsOutline />
          </Badge>
        </IconButton>
        <IconButton
          className="header__right__icon__button"
          onClick={() => history.push("/basket")}
        >
          <Badge
            color="primary"
            badgeContent={basket?.length}
            className="header__right__badge"
            size="small"
            max={10}
          >
            <GiShoppingCart />
          </Badge>
        </IconButton>
        {user ? (
          <div
            className="header__right__user"
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
            className="header__right__login__button"
          >
            Login
          </button>
        )}
      </div>
      <div className="header__right__menu">
        <IconButton onClick={handleOpen}>
          <FiMenu className="" />
        </IconButton>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          className="header__right__popover"
        >
          <MenuItems
            isSeller={isSeller}
            user={user}
            basket={basket}
            history={history}
          />
        </Popover>
      </div>
    </div>
  );
};

export default Header;
