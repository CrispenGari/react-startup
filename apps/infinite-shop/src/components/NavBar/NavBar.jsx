import React from "react";
import "./NavBar.css";
import { NavBarItem } from "../../components";
import categories from "../../utils/categories";
const NavBar = () => {
  return (
    <div className="navbar">
      {categories
        .filter((cat) => cat.toLocaleLowerCase() !== "searches")
        .map((category, index) => {
          return <NavBarItem key={index} category={category} />;
        })}
    </div>
  );
};

export default NavBar;
