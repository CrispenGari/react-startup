import React from "react";
import "./Video.css";
import { useRef, useState } from "react";
const Video = ({ data }) => {
  const vidRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleClick = () => {
    if (playing) {
      vidRef.current.pause();
      setPlaying(false);
    } else {
      vidRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <div className="video__userInfo">
        <h1>{data?.username}</h1>
        <h1>{data?.timestamp}</h1>
        <h1>{data?.likes}</h1>
      </div>
      <video
        ref={vidRef}
        src={data?.url}
        loop
        className="video__self"
        onClick={handleClick}
      />
    </div>
  );
};

export default Video;
