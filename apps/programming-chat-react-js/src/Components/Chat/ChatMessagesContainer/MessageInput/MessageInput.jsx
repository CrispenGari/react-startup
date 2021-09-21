import React, { useState } from "react";

import {
  Send,
  CameraAlt,
  FormatItalic,
  Code,
  EmojiEmotions,
  Link,
  FormatBold,
} from "@material-ui/icons";

import "./MessageInput.css";
import { IconButton } from "@material-ui/core";

import { database } from "../../../../firebase";

import { useStateValue } from "../../../../StateProvider";

import firebase from "firebase";
function MessageInput({ roomId }) {
  const [{ user }, dispatch] = useStateValue();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    database.collection("rooms").doc(roomId).collection("messages").add({
      username: user.displayName,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      imageUrl: user.photoURL,
    });
    setMessage("");
  };
  return (
    <form className="messageinput">
      <div className="messageinput__top">
        <input
          className="messageinput_input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="type a message"
        />
      </div>
      <div className="messageinput__bottom">
        <div className="messageinput__bottomLeft">
          <IconButton title="Files" className="messageinput__iconbtn">
            <CameraAlt color="action" />
          </IconButton>
          <IconButton title="Code" className="messageinput__iconbtn">
            <Code />
          </IconButton>
          <IconButton title="Link" className="messageinput__iconbtn">
            <Link />
          </IconButton>
          <IconButton title="Italic" className="messageinput__iconbtn">
            <FormatItalic />
          </IconButton>
          <IconButton title="Bold" className="messageinput__iconbtn">
            <FormatBold />
          </IconButton>
        </div>
        <div className="messageinput__bottomRight">
          <IconButton title="Emoji" className="messageinput__iconbtn">
            <EmojiEmotions />
          </IconButton>
          <IconButton
            type="submit"
            onClick={sendMessage}
            title="Send"
            disabled={!message}
            className="messageinput__iconbtn"
          >
            <Send />
          </IconButton>
        </div>
      </div>
    </form>
  );
}

export default MessageInput;
