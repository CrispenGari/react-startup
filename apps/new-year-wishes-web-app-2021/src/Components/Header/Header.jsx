import React from "react";
import { FcLike } from "react-icons/fc";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <FcLike className="header__icon" />
      <h1>Happy new year Friends</h1>
      <FcLike className="header__icon" />
    </div>
  );
};

export default Header;
