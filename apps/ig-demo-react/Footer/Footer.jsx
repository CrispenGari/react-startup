import React from "react";
import styles from "./Footer.module.css";
import {
  Home,
  Search,
  FavoriteBorder,
  AddCircleOutline,
} from "@material-ui/icons";
import post_2 from "../../Posts/sq_img_7.jpg";
import { Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";

function Footer() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      border: "1px solid",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        <div className={styles.footer_icon_wraper}>
          <Home color="action" className={styles.footer_icons} />
        </div>
        <div className={styles.footer_icon_wraper}>
          <Search color="action" className={styles.footer_icons} />
        </div>
        <div className={styles.footer_icon_wraper}>
          <FavoriteBorder color="action" className={styles.footer_icons} />
        </div>
        <div className={styles.footer_icon_wraper}>
          <AddCircleOutline color="action" className={styles.footer_icons} />
        </div>
        <div className={styles.footer_icon_wraper}>
          <Avatar
            small
            alt="Me"
            src={post_2}
            className={styles.avata_me}
            onClick={handleClick}
            aria-describedby={id}
          />
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className={classes.paper}>
              <button>Login</button>
            </div>
          </Popper>
        </div>
      </div>
    </div>
  );
}

export default Footer;
