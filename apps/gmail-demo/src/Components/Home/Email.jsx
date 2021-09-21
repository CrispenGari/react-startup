import React from "react";

import {
  StarBorder,
  Delete,
  WatchLater,
  Drafts,
  MoveToInbox,
} from "@material-ui/icons";
import { Checkbox, IconButton } from "@material-ui/core";
import "./Email.css";
const Email = ({ title, emailer, body }) => {
  return (
    <div className="email">
      <div className="email__left">
        <Checkbox />
        <IconButton>
          <StarBorder color="action" />
        </IconButton>
      </div>
      <div className="email__center">
        <b>{emailer}</b>
        <b>{title}</b>
        <div>{body}</div>
      </div>
      <div className="email__right">
        <IconButton>
          <MoveToInbox color="action" />
        </IconButton>
        <IconButton>
          <Delete color="action" />
        </IconButton>
        <IconButton>
          <Drafts color="action" />
        </IconButton>
        <IconButton>
          <WatchLater color="action" />
        </IconButton>
      </div>
    </div>
  );
};
export default Email;
