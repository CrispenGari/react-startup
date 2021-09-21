import React from "react";
import "./Header.css";
const Header = ({ category }) => {
  return (
    <div className="header">
      <h1>Crisp News</h1>
      <h1>{category}</h1>
      <time>{new Date(Date.now()).toDateString()}</time>
    </div>
  );
};

export default Header;
