import React, { useEffect, useState } from "react";

import Message from "./Message/Message";
import MessageInput from "./MessageInput/MessageInput";
import "./ChatMessageContainer.css";

import { database } from "../../../firebase";
import { useParams } from "react-router-dom";
function ChatMessageContainer() {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, [roomId]);

  return (
    <div className="chatmessagecontainer">
      <div className="chatmessagecontainer__msg">
        {messages.map(({ id, data }) => (
          <Message
            key={id}
            avatar={data.imageUrl}
            username={data.username}
            timestamp={data.timestamp}
            message={data.message}
          />
        ))}
      </div>

      <div className="chatmessagecontainer__input">
        <MessageInput roomId={roomId} />
      </div>
    </div>
  );
}
export default ChatMessageContainer;
