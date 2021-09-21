import React from "react";
import { SideBarLeft, Feed, SideBarRight } from "../../Components";

import "./Home.css";
const Home = ({ user }) => {
  return (
    <div className="home">
      <SideBarLeft user={user} />
      <Feed user={user} />
      <SideBarRight />
    </div>
  );
};

export default Home;
