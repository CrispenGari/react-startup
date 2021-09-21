import { CheckCircleOutline, ExpandMore } from "@material-ui/icons";
import React from "react";
import { MenuItem, Menu } from "@material-ui/core";

import "./EmailsHeader.css";
const EmailsHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="emailheader">
      <div className="emailheader__left">
        <CheckCircleOutline />
        <h3 className="emailheader--focused">Focused</h3>
        <h3>Other</h3>
      </div>
      <div className="emailheader__right" onClick={handleClick}>
        <h3>Filter</h3>
        <ExpandMore />
      </div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="emailheader__menu"
      >
        <MenuItem onClick={handleClose}>All</MenuItem>
        <MenuItem onClick={handleClose}>Unread</MenuItem>
        <MenuItem onClick={handleClose}>To me</MenuItem>
        <MenuItem onClick={handleClose}>Flagged</MenuItem>
        <MenuItem onClick={handleClose}>Mentions</MenuItem>
        <MenuItem onClick={handleClose}>Attachments</MenuItem>
        <hr />
        <MenuItem onClick={handleClose}>Sort</MenuItem>
      </Menu>
    </div>
  );
};

export default EmailsHeader;
