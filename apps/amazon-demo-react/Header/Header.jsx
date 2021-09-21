import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { auth } from "../../firebase";

import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../../StateProvider";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(user);

  const logoutFuction = () => {
    auth.signOut();
  };
  return (
    <nav className="header_nav">
      <Link to="/">
        <img
          className="image_nav"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="search_bar">
        <input type="text" className="seach_input" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_right">
        {user ? (
          <Link to="/" className="header_links">
            <div className="header_option">
              <span>Hello, {/*user ? user.email : ""*/}</span>
              <span onClick={logoutFuction}>Logout</span>
            </div>
          </Link>
        ) : (
          <Link to="/login" className="header_links">
            <div className="header_option">
              <span>Hello, {user ? user.email : ""}</span>
              <span>Sign In</span>
            </div>
          </Link>
        )}

        <Link to="/login" className="header_links">
          <div className="header_option">
            <span>Return</span>
            <span>& Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header_links">
          <div className="header_option">
            <span>Your,</span>
            <span>Prime</span>
          </div>
        </Link>
        {user ? (
          <Link to="/checkouts" className="header_links">
            <div className="header_option cart">
              <span>
                <AddShoppingCartIcon />
              </span>
              <span>{basket?.length}</span>
            </div>
          </Link>
        ) : (
          <Link to="/login" className="header_links">
            <div className="header_option cart">
              <span>
                <AddShoppingCartIcon />
              </span>
              <span>{basket?.length}</span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
