import React from "react";

import {
  Apps,
  BusinessCenter,
  Forum,
  Home,
  NotificationsOutlined,
  PeopleAlt,
  Search,
} from "@material-ui/icons";
import "./Header.css";
import HeaderNav from "../HeaderNav/HeaderNav";
const Header = ({ user }) => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://lh3.googleusercontent.com/proxy/CPEVQYVElkLX8MSqEMEiIAUX_IuLtJJnAZJif-l3i0VGF_TBNz6_wrQMFYNzXirAAWVWnvLnN0IcNY_m2uugZDUwr4BgcWaNwNQTmYjFdVQFc470qpk
"
          alt=""
        />
        <div className="header__searchBar">
          <Search />
          <input type="text" placeholder="Unemployed" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__rightLeft">
          <HeaderNav Icon={<Home />} text={"Home"} active />
          <HeaderNav Icon={<PeopleAlt />} text={"My Network"} />
          <HeaderNav Icon={<BusinessCenter />} text={"Jobs"} />
          <HeaderNav Icon={<Forum />} text={"Messaging"} />
          <HeaderNav Icon={<NotificationsOutlined />} text={"Notifications"} />
          <HeaderNav user={user} text={"Me"} />
        </div>
        <div className="header__rightRight">
          <HeaderNav Icon={<Apps />} text={"Work"} />
          <small>Try Premium free for 1 Month</small>
        </div>
      </div>
    </div>
  );
};

export default Header;
