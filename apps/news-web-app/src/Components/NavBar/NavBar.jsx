import React from "react";

import "./NavBar.css";
import CATEGORY from "../../data/endpoints";
const NavBar = ({ setCategory, selected, setSelected }) => {
  const selectCategory = (category) => {
    category && setCategory(category);
    setSelected(category);
    return;
  };
  return (
    <div className="navbar">
      {CATEGORY.sort().map((category, index) => {
        return (
          <h1
            className={selected === category ? "navbar--active" : ""}
            key={index}
            onClick={() => selectCategory(category)}
          >
            {category}
          </h1>
        );
      })}
    </div>
  );
};
export default NavBar;
