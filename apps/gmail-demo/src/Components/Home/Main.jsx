import React from "react";

import Email from "./Email";
import MainHeader from "./MainHeader";
import "./Main.css";
import { Inbox, People, Label } from "@material-ui/icons";
const Main = () => {
  return (
    <div className="main">
      <MainHeader />
      <div className="main__navigators">
        <div className="main__navLeft">
          <Inbox color="action" className="main__icons" />
          Primary
        </div>
        <div className="main__navcenter">
          <People color="action" className="main__icons" />
          Social
        </div>
        <div className="main__navRight">
          <Label color="action" className="main__icons label" />
          Promotion
        </div>
      </div>
      <div className="main__emails">
        <Email
          body="Hi Crispen,
Become a premium member today..."
          emailer="
SportMonks "
          title="Last call"
        />
        <Email
          body="Thanks for signing up with Heroku! You must follow this link..."
          emailer="

          Heroku"
          title="Security"
        />
      </div>
    </div>
  );
};

export default Main;
