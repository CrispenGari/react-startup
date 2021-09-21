import React from "react";

import { Avatar } from "@material-ui/core";
import TextTruncate from "react-text-truncate";
import "./Email.css";
import {
  CheckCircleOutline,
  DeleteOutline,
  DraftsOutlined,
  FlagOutlined,
} from "@material-ui/icons";
const Email = ({ email }) => {
  const [icons, setIcons] = React.useState(false);
  return (
    <div
      className="email"
      onMouseEnter={() => setIcons(true)}
      onMouseLeave={() => setIcons(false)}
    >
      <div className="email__left">
        {!icons ? (
          <Avatar
            src="./images/image.png"
            alt={email?.data.client}
            className="email__avatar"
          />
        ) : (
          <CheckCircleOutline />
        )}
      </div>
      <div className="email__right">
        <div className="email__right--bottom--top">
          <h3>{email?.data.client}</h3>
          <div>
            <div className={`email__icons ${!icons && "email__icons--hide"}`}>
              <DeleteOutline />
              <DraftsOutlined />
              <FlagOutlined />
            </div>
          </div>
        </div>
        <div className="email__right--bottom">
          <h3>{email?.data.subject}</h3>
          <TextTruncate
            line={1}
            element="small"
            truncateText="…"
            text={`${email?.data.body}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Email;
