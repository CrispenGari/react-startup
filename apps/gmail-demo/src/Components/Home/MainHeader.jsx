import React from "react";

import {
  Refresh,
  MoreVert,
  NavigateNext,
  NavigateBefore,
} from "@material-ui/icons";
import { IconButton, Checkbox } from "@material-ui/core";

import "./MainHeader.css";
const MainHeader = () => {
  return (
    <div className="mainheader">
      <div className="mainheader__left">
        <Checkbox title="Select" />
        <IconButton>
          <Refresh color="action" titleAccess="Refresh" />
        </IconButton>
        <IconButton>
          <MoreVert color="action" titleAccess="More" />
        </IconButton>
      </div>
      <div className="mainheader__right">
        <div className="mainheader__messageCounter">
          <small>1 - 20 of 20</small>{" "}
        </div>
        <IconButton>
          <NavigateBefore color="action" titleAccess="Newer" />
        </IconButton>
        <IconButton>
          <NavigateNext color="action" titleAccess="Older" />
        </IconButton>
      </div>
    </div>
  );
};

export default MainHeader;
