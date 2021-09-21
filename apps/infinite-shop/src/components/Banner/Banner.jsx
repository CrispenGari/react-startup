import React from "react";
import "./Banner.css";
import { NavBar } from "../../components";
const Banner = () => {
  return (
    <div className="banner">
      <NavBar />
      <div className="banner__main">
        <h1>Hello, What are you looking for?</h1>
        <button
          onClick={() =>
            window.document.querySelector(".products").scrollIntoView()
          }
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Banner;
