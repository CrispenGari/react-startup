import React, { useEffect, useState } from "react";
import "./Chats.css";
import Chat from "../Chat/Chat";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../reducer";
import { database } from "../../firebase";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
const Chats = () => {
  const [{ user, userId }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = database
      .collection("rooms")

      .onSnapshot((snapshot) =>
        setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (userId) {
      const unsubscribe = database
        .collection("rooms")
        .doc(userId)
        .collection("messages")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
      // if the room has no messages create a new room
      if (messages.length === 0) {
        const room_name = prompt("Enter a room name");
        database.collection("rooms").add({
          name: room_name,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        history.push(`/`);
      }
      // redirect to the messages
      history.push(`messages/${userId}`);

      // remove an id to allow back handling
      dispatch({
        name: actionType.SET_USERID,
        userId: null,
      });
      return () => {
        unsubscribe();
      };
    }
  }, [userId]);
  return (
    <div className="chats">
      {rooms.map(({ id, data }) => (
        <Chat id={id} key={id} data={data} />
      ))}
    </div>
  );
};

export default Chats;
