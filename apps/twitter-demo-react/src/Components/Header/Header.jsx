import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Twitter, PhotoFilter } from "@material-ui/icons";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
function Header() {
  const history = useHistory();
  const [{ userinfo, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Avatar
        className="header__avatar"
        onClick={() => history.push("/profile")}
        src="../images/imh.png"
        alt={user?.username}
      />
      <Twitter className="header__twiterIcon" />
      <PhotoFilter
        className="header__filterIcon"
        onClick={() => auth.signOut()}
      />
    </div>
  );
}

export default Header;
