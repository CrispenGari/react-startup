import React from "react";

import "./Home.css";
import Main from "./Main";
import Header from "./Header";
import SideBar from "./SideBar";
const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Header />
      </div>
      <div className="home__sidebarMain">
        <SideBar />
        <Main />
      </div>
    </div>
  );
};
export default Home;
