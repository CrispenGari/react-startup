import React from "react";
import "./Footer.css";
import {
  HomeOutlined,
  Search,
  NotificationsOutlined,
  MailOutline,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
function Footer() {
  const history = useHistory();
  return (
    <div className="footer">
      <HomeOutlined
        onClick={() => history.push("/home")}
        className="footer__icons footer__activeIcon"
      />
      <Search
        className="footer__icons"
        onClick={() => history.push("/search")}
      />
      <NotificationsOutlined
        className="footer__icons"
        onClick={() => history.push("/notifications")}
      />
      <MailOutline
        className="footer__icons"
        onClick={() => history.push("/messages")}
      />
    </div>
  );
}
export default Footer;
