import React, { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";

import { database } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
import Message from "./Message/Message";
import "./Messages.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  MoreVert,
  Videocam,
  Call,
  ArrowBack,
  EmojiEmotions,
  AttachFile,
  CameraAlt,
  Mic,
  Send,
  EmojiEmotionsOutlined,
} from "@material-ui/icons";
function Messages() {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [roomname, setRoomname] = useState([]);
  const history = useHistory();
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      const username = user?.displayName;
      database.collection("rooms").doc(roomId).collection("messages").add({
        username: username,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setMessage("");
  };
  useEffect(() => {
    const unsubscribe = database
      .collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomname(snapshot.data()?.name));
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = database
      .collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    return () => {
      unsubscribe();
    };
  }, [roomId]);
  const random = Math.random();
  return (
    <div className="messages">
      <div className="messages__header">
        <div className="messages__headerright">
          <IconButton className="messages__iconButton">
            <ArrowBack
              onClick={() => {
                history.replace("/");
              }}
            />
          </IconButton>
          <Avatar
            src={`https://avatars.dicebear.com/api/human/${random}.svg`}
          />
        </div>
        <div className="messages__headercenter">
          <h1>{roomname}</h1>
          <p>
            last seen at{" "}
            {new Date(
              messages[messages.length - 1]?.data.timestamp?.toDate()
            ).toUTCString()}
            {console.log(messages[0]?.data.timestamp)}
          </p>
        </div>
        <div className="messages__headerleft">
          <IconButton className="messages__iconButton">
            <Videocam />
          </IconButton>
          <IconButton className="messages__iconButton">
            <Call />
          </IconButton>
          <IconButton className="messages__iconButton">
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="messages__container">
        {messages.map(({ id, data }) => (
          <Message key={id} data={data} />
        ))}
      </div>
      <div className="messages__inputContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="messages__inputSelf">
            <IconButton>
              <EmojiEmotionsOutlined />
            </IconButton>

            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="type a message..."
              value={message}
            />
            <IconButton className="messages__inputAtachFileB">
              <AttachFile className="messages__inputAtachFile" />
            </IconButton>
            <IconButton>
              <CameraAlt />
            </IconButton>
          </div>

          <div className="messages__inputAtachSend">
            {message ? (
              <IconButton
                onClick={sendMessage}
                type="submit"
                className="messages__iconButton"
              >
                <Send className="messages__iconSend" />
              </IconButton>
            ) : (
              <IconButton type="submit" className="messages__iconButton">
                <Mic onClick={sendMessage} className="messages__iconSend" />
              </IconButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Messages;
