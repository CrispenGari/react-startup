import React, { useState, useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VedioSideBar from "./VedioSideBar";
import {
  Audiotrack,
  Album,
  Home,
  AddBox,
  Search,
  Person,
  ChatBubbleOutline,
} from "@material-ui/icons";
function Video({
  vidUrl,
  postId,
  username,
  comments,
  likes,
  music,
  caption,
  tags,
  shares,
}) {
  const [play, setPlay] = useState(false);
  const vidRef = useRef(null);

  const handleClick = () => {
    if (play) {
      vidRef.current.play();
      setPlay(!true);
    } else {
      vidRef.current.pause();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      <div className="video__container">
        <video
          src={vidUrl}
          ref={vidRef}
          onClick={handleClick}
          className="video__video"
          loop
        ></video>
      </div>
      <VedioSideBar
        likes={likes}
        comments={comments}
        shares={shares}
        imgurl={username}
        postId = {postId}
      />
      <VideoFooter caption={caption} tags={tags} music={music} username={username}/>
    </div>
  );
}

export default Video;
