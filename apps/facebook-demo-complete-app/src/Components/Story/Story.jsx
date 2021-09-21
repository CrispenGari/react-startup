import React from "react";

import "./Story.css";
import { Avatar } from "@material-ui/core";
function Story({ avatar_src, bgsrc }) {
  return (
    <div
      className="story"
      style={{
        backgroundImage: `url(${bgsrc})`,
        backgroundRepeat: "no-repeat",
        width: 700,
      }}
    >
      <Avatar src={avatar_src} className="story__avatar" />
    </div>
  );
}

export default Story;
