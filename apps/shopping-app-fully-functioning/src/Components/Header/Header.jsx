import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import {
  AccountCircle,
  Search,
  ShoppingCartOutlined,
  LocationOnOutlined,
  Help,
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";

import { auth } from "../../firebase-backend/firebase";
import { useSelector } from "react-redux";
function Header() {
  const user = useSelector((state) => state.authentication?.value);
  const addedIterms = useSelector((state) => state.addtobasket);
  const history = useHistory();
  console.log(user);

  const signOutHandler = () => {
    auth.signOut();
  };
  const logInHandler = () => {
    history.push("/authentication");
  };
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top-left">
          <h1>ShopName</h1>
        </div>
        <div className="header__top-right">
          <div className="header__top-right_icons">
            {user ? (
              <h5 onClick={signOutHandler} title="Logout">
                Logout
              </h5>
            ) : (
              <h5 onClick={logInHandler} title="Login">
                Login
              </h5>
            )}
            <AccountCircle />
          </div>
          <div className="header__top-right_icons">
            <h5>Help</h5>
            <Help />
          </div>
          <div
            onClick={() => history.push("/basket")}
            className="header__top-right_icons"
          >
            <Badge
              max={99}
              badgeContent={addedIterms?.length}
              color="secondary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              showZero
            >
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom--top">
          <div className="header__bottom--topLocation">
            <small>Location</small>
            <LocationOnOutlined />
          </div>
          <div className="header__bottom--search">
            <input type="text" placeholder="Find products and special" />
            <Search />
          </div>
          <Avatar
            className="header__bottom--avatar"
            title={user?.displayName || user?.email}
            alt={user?.displayName || user?.email}
            src={user?.photoURL}
          />
        </div>
        <div className="header__bottom--bottomNav">
          <Link className="header__bottom-navs" to="/">
            <p>Home</p>
          </Link>
          <Link className="header__bottom-navs" to="/specials">
            <p>Specials</p>
          </Link>
          <Link className="header__bottom-navs" to="/new">
            <p>New</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
