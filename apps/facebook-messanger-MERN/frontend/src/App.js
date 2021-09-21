import React, { useEffect } from "react";
import "./App.css";
import { Login, Chat } from "./Components";
import Pusher from "pusher-js";
import axios from "./data/axios";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase/firebase";
function App() {
  const [{ user }, dispatch] = useStateValue();
  const [messages, setMessages] = React.useState([]);
  useEffect(() => {
    axios.get("/api/v1/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  // useffect for authentication

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          name: actionType.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          name: actionType.SET_USER,
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  useEffect(() => {
    const pusher = new Pusher("8b324f23cdde5b51d413", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("message");
    channel.bind("insert", (message) => {
      console.log(JSON.stringify(message));
      setMessages([...messages, message]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  // console.log(messages);
  return user ? (
    <div className="app">
      <Chat messages={messages} />
    </div>
  ) : (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
