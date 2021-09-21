import React from "react";

import "./Chat.css";
import SideBar from "./SideBar/SideBar";
import ChatBody from "./ChatBody/ChatBody";

function Chat({ messages }) {
  return (
    <div className="chat">
      <SideBar />
      <ChatBody messages={messages} />
    </div>
  );
}

export default Chat;
