import React from "react";
import {
  Home,
  FlashOn,
  ScreenShare,
  LibraryAddCheck,
  Search,
  Person,
  Cast,
} from "@material-ui/icons";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__leftButton header__leftButton--active">
          <Home />
          <p>Home</p>
        </div>
        <div className="header__leftButton">
          <FlashOn />
          <p>Flash On</p>
        </div>
        <div className="header__leftButton">
          <ScreenShare />
          <p>Share Screen</p>
        </div>
        <div className="header__leftButton">
          <LibraryAddCheck />
          <p>Library</p>
        </div>
        <div className="header__leftButton">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__leftButton">
          <Person />
          <p>Account</p>
        </div>
        <div className="header__leftButton">
          <Cast />
          <p>Cast</p>
        </div>
      </div>
      <div className="header__right">
        <h1>Movies</h1>
      </div>
    </div>
  );
}

export default Header;
