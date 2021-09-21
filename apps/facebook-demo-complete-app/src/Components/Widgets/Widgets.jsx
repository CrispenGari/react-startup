import React from "react";
import "./Widgets.css";
import Iframe from "react-iframe";
function Widgets() {
  return (
    <div className="widgets">
      <Iframe
        // url="https://www.instagram.com/crispen_gari_/"
        url="http://www.youtube.com/embed/xDMP3i36naA"
        width="100%"
        height="100%"
        id="myId"
        className="widgets__iframe"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </div>
  );
}

export default Widgets;
