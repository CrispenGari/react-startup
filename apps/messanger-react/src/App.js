import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import Header from "./Header";
import {
  FormControl,
  InputLabel,
  Input,
  IconButton,
  Avatar,
} from "@material-ui/core";
import "./App.css";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(prompt("Please enter your username!!"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username ? username : "Uknown user",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, input]); This is appending messages to the messages array
    // setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };
  return (
    <div className="app">
      <Header username={username} messages={messages} />
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message
            key={id}
            messages={message}
            username={username ? username : "Uknown user"}
          />
        ))}
      </FlipMove>
      <div className="app__messageForm">
        <form>
          <FormControl className="app__formControl">
            <InputLabel>{input ? "typing.." : "type a message"}</InputLabel>
            <Input
              aria-describedby="my-helper-text"
              type="text"
              placeholder="type a message..."
              value={input}
              className="app__messageInput"
              onChange={(e) => setInput(e.target.value)}
            />
            <IconButton
              color="primary"
              type="submit"
              className="app_sendButton"
              onClick={sendMessage}
              disabled={!input}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>
    </div>
  );
}
export default App;
