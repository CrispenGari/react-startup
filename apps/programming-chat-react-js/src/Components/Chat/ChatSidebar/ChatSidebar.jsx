import React from "react";
import "./ChatSidebar.css";
import { People } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
function ChatSidebar({ admin, members }) {
  return (
    <div className="chatsidebar">
      <div className="chatsidebar__header">
        <h2>
          ROOM MEMBERS <small>({members?.length}) members</small>
        </h2>
        <IconButton>
          <People />
        </IconButton>
      </div>
      <div className="chatsidebar__member">
        {members?.map((member) => (
          <div className="chatsidebar__memberPerson">
            <Avatar className="chatsidebar__memberAvatar" />
            <h2>
              #
              {member === admin ? (
                <>
                  {member}
                  <small> (admin)</small>
                </>
              ) : (
                member
              )}
            </h2>
          </div>
        ))}
        {members?.map((member) => (
          <div className="chatsidebar__memberPerson">
            <Avatar className="chatsidebar__memberAvatar" />
            <h2>
              #
              {member === admin ? (
                <>
                  {member}
                  <small> (admin)</small>
                </>
              ) : (
                member
              )}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
