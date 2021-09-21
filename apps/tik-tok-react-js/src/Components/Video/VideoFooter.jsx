import React from "react";
import "./VideoFooter.css";
import { Audiotrack } from "@material-ui/icons";
function VideoFooter({ caption, tags, music, username }) {
  return (
    <div className="videofooter">
      <h5>{username} </h5>
      <p className="videofooter__caption">
        <small>{caption}</small>
      </p>
      <p className="videofooter__tags">
        {" "}
        {tags.map((tag) => (
          <small>@{tag} </small>
        ))}
      </p>
      <div className="videofooter__music">
        <Audiotrack className="videofooter__musicIcon" />
        <marquee behavior="" direction="" loop>
          <p>{music}</p>
        </marquee>
        {/* Insteard of using a maque we can use ticker 
    import Ticker from "react-ticker";
     <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
     */}
        <img
          className="videofooter__albumIcon"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default VideoFooter;
