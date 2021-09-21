import React from "react";
import "./Main.css";

import { SideBar, Emails, EmailReader } from "../../Components";
import MainHeader from "../MainHeader/MainHeader";
const Main = () => {
  const [target, setTarget] = React.useState("");

  const [email, setEmail] = React.useState([]);
  return (
    <div className="main">
      <MainHeader setTarget={setTarget} />
      <div className="main__body">
        <div className="main__sidebar">
          <SideBar />
        </div>
        <div className="main__emails">
          <Emails setTarget={setTarget} setEmail={setEmail} />
        </div>
        <div className="main__emailreader">
          <EmailReader target={target} setTarget={setTarget} email={email} />
        </div>
      </div>
    </div>
  );
};

export default Main;
