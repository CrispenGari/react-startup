import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatMessageContainer from "./ChatMessagesContainer/ChatMessageContainer";
import ChatSideBar from "./ChatSidebar/ChatSidebar";
import { database } from "../../firebase";
function Chat() {
  const { roomId } = useParams();
  const [roomInfo, setRoomInfo] = useState(null);

  useEffect(() => {
    const unsubscribe = database
      .collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => {
        setRoomInfo(snapshot.data());
      });
    return () => {
      unsubscribe();
    };
  }, [roomId]);
  // console.log(useParams());
  return (
    <div className="chat">
      <ChatHeader
        name={roomInfo?.name}
        creator={roomInfo?.creator}
        timestamp={roomInfo?.timestamp}
      />
      <div className="chat__body">
        <ChatMessageContainer />
        <ChatSideBar members={roomInfo?.members} admin={roomInfo?.creator} />
      </div>
    </div>
  );
}

export default Chat;
