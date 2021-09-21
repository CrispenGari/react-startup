import React from "react";
import "./Main.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";
function Main({ spotify }) {
  return (
    <div className="main">
      <div className="main__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Main;
