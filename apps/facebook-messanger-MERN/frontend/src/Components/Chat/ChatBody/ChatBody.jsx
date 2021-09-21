import React from "react";
import "./ChatBody.css";
import ChatHeader from "./ChatHeader/ChatHeader";
import Messages from "./Messages/Messages";
import Profile from "./Profile/Profile";
function ChatBody({ messages }) {
  return (
    <div className="chatbody">
      <ChatHeader />
      <div className="chatbody__main">
        <Messages messages={messages} />
        <Profile />
      </div>
    </div>
  );
}

export default ChatBody;
