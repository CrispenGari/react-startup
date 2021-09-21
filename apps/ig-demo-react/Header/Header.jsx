import React from "react";
import styles from "./Header.module.css";
import {
  Home,
  Search,
  FavoriteBorder,
  AddCircleOutline,
  CameraAlt,
  Send,
  AddAlertOutlined,
} from "@material-ui/icons";
import inst_icon from "./inst.png";
const Header = () => {
  return (
    <div className={styles.main_header}>
      <div className={styles.header_class}>
        <div className={styles.inst_icon}>
          <CameraAlt color="action"  className={styles.left_icons}/>
          <img src={inst_icon} alt="inst" />
        </div>
        <div className={styles.message_icon}>
          <AddAlertOutlined color="action"  className={styles.rigth_icons}/>
          <Send color="action"  className={styles.rigth_icons}  id={styles.send_button}/>
        </div>
      </div>
    </div>
  );
};
export default Header;
