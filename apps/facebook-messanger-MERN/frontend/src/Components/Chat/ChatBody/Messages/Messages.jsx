import React, { useState } from "react";

import Message from "./Message/Message";
import "./Messages.css";
import {
  ThumbUp,
  EmojiEmotions,
  Gif,
  AddBox,
  AddCircle,
  Image,
} from "@material-ui/icons";
import axios from "../../../../data/axios";
import { useStateValue } from "../../../../StateProvider";
function Messages({ messages }) {
  const [{ user }] = useStateValue();
  const [msg, setMsg] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (msg !== "") {
      await axios.post("/api/v1/messages", {
        username: user?.dispayName,
        timestamp: new Date().getDate().toString(),
        message: msg,
        photoURL: user?.photoURL,
      });
    }
    setMsg("");
  };
  return (
    <div className="messages">
      {messages.map((message) => (
        <Message message={message} key={message?._id} />
      ))}
      <div className="messages__input">
        <div className="messages__inputleft">
          <AddCircle />
          <Gif />
          <AddBox />
          <Image />
        </div>
        <form className="messages__inputcenter">
          <input
            placeholder="Type a message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <EmojiEmotions />
          <button
            type="submit"
            onClick={sendMessage}
            style={{ display: "none" }}
          ></button>
        </form>
        <div className="messages__inputright">
          <ThumbUp />
        </div>
      </div>
    </div>
  );
}

export default Messages;
