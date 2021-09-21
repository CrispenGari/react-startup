import React from "react";
import "./ChatFooter.css";
import {
  Settings,
  Search,
  PersonAdd,
  VideoCallTwoTone,
  CreateTwoTone,
} from "@material-ui/icons";
function ChatFooter() {
  return (
    <div className="chatfooter">
      <Search className="chatfooter__icon" />
      <input placeholder="Search" />
      <Settings className="chatfooter__icon" />
      <PersonAdd className="chatfooter__icon" />
      <VideoCallTwoTone className="chatfooter__icon" />
      <CreateTwoTone className="chatfooter__icon" />
    </div>
  );
}

export default ChatFooter;
