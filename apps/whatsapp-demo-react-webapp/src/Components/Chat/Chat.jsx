import React from "react";
import { Avatar } from "@material-ui/core";
import { DoneAll } from "@material-ui/icons";
import Truncate from "react-truncate";

import { database } from "../../firebase";
import { useHistory } from "react-router-dom";
import "./Chat.css";
function Chat({ id, data }) {
  const random = Math.random();
  const [messages, setMessages] = React.useState([]);
  const history = useHistory();
  const handleSelectRoom = () => {
    if (id) {
      history.push(`messages/${id}`);
    }
  };
  React.useEffect(() => {
    const unsubscribe = database
      .collection("rooms")
      .doc(id)
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
  }, []);
  {
    console.log(new Date(messages[0]?.data.timestamp.toDate()));
  }
  return (
    <div className="chat" onClick={handleSelectRoom}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${random}.svg`} />
      <div className="chat__right">
        <div className="chat__rightTop">
          <h2>{data.name}</h2>
          <small>
            {messages[0]?.data.timestamp
              ? new Date(
                  messages[messages.length - 1]?.data.timestamp.toDate()
                ).getHours() +
                ":" +
                new Date(
                  messages[messages.length - 1]?.data.timestamp.toDate()
                ).getMinutes()
              : "now"}
          </small>
        </div>
        <div className="chat__rightBottom">
          <small>
            <Truncate lines={1}>
              {messages[messages.length - 1]?.data.message}
            </Truncate>
          </small>
          <DoneAll />
        </div>
      </div>
    </div>
  );
}

export default Chat;
