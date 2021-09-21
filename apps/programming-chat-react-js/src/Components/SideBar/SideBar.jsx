import React, { useState, useEffect } from "react";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import Channel from "./Channel/Channel";
import DirectChat from "./DirectChat/DirectChat";
import "./SideBar.css";
import firebase from "firebase";
import { useStateValue } from "../../StateProvider";
import { database } from "../../firebase";
import { MoreVert, ExpandLess, ExpandMore, Add } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function SideBar() {
  const [{ user }, dispatch] = useStateValue();
  const [showmore, setShowmore] = useState(false);
  const [showmoremsgs, setShowmoremsgs] = useState(false);
  const [channel, setChanel] = useState("");

  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const unsubscribe = database
      .collection("direct-messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = database.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleShowmore = () => {
    showmore ? setShowmore(false) : setShowmore(true);
  };
  const handleShowmoreMessages = () => {
    showmoremsgs ? setShowmoremsgs(false) : setShowmoremsgs(true);
  };

  const addChanell = () => {
    const channelname = prompt(
      "PLEASE ENTER A CHANNELL NAME WITH AT LEAST 5 CHARACTERS!!"
    );

    if (channelname.length >= 5) {
      database.collection("rooms").add({
        name: channelname,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        creator: user.displayName,
      });
    } else {
      alert("Invalid chanel name");
    }
  };
  return (
    <div className="sidebar">
      <SideBarHeader />
      <div className="sidebar__menu">
        <IconButton title="More" className="sidebar__iconbtnLarge">
          <MoreVert />
        </IconButton>
        <h2>More</h2>
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__chanellsheader">
          <div className="sidebar__chanellsheaderLeft">
            <IconButton
              onClick={handleShowmore}
              title={showmore ? "Hide Channels" : "Expand Channels"}
              className="sidebar__iconbtn"
            >
              {showmore ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <h2>Channels</h2>
          </div>
          <IconButton
            onClick={addChanell}
            title="Add Channel"
            className="sidebar__iconbtn"
          >
            <Add />
          </IconButton>
        </div>
        {showmore && (
          <div className="sidebar__channelscontainer">
            {channels.map(({ id, name }) => (
              <Channel id={id} name={name} key={id} />
            ))}
          </div>
        )}
      </div>
      <div className="sidebar__dirrectMessages">
        <div className="sidebar__directMessagesheader">
          <div className="sidebar__directMessagessheaderLeft">
            <IconButton
              onClick={handleShowmoreMessages}
              title={showmore ? "Hide Messages" : "Expand Messages"}
              className="sidebar__iconbtn"
            >
              {showmore ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <h2>Direct Messages</h2>
          </div>
          <IconButton title="New Chat" className="sidebar__iconbtn">
            <Add />
          </IconButton>
        </div>
        {showmoremsgs && (
          <div className="sidebar__directMessagescontainer">
            {messages.map(({ id, data }) => (
              <DirectChat key={id} username={data.username} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
