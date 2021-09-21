import { IconButton, Button } from "@material-ui/core";
import React from "react";

import { Undo, Menu, DraftsOutlined } from "@material-ui/icons";
import "./MainHeader.css";
const MainHeader = ({ setTarget }) => {
  return (
    <div className="mainheader">
      <div className="mainheader__left">
        <IconButton>
          <Menu />
        </IconButton>
        <Button className="mainheader__button" onClick={() => setTarget("new")}>
          New Message
        </Button>
      </div>
      <div className="mainheader__right">
        <Button
          variant="contained"
          className="mainheader__btn2"
          startIcon={<DraftsOutlined />}
        >
          Mark all as read
        </Button>
        <Button
          variant="contained"
          className="mainheader__btn2"
          disabled
          startIcon={<Undo />}
        >
          Mark all as read
        </Button>
      </div>
    </div>
  );
};

export default MainHeader;
