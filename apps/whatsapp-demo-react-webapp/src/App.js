import React, { useState, useEffect } from "react";
import "./App.css";
import { IconButton } from "@material-ui/core";
import {
  Comment,
  CameraAlt,
  Create,
  Videocam,
  AddIcCall,
} from "@material-ui/icons";
import {
  Auth,
  Chats,
  Header,
  Messages,
  Camera,
  Calls,
  Status,
} from "./Components";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import { auth } from "./firebase";

import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  const newChat = () => {
    const userid = prompt("CREATE A NEW CHAT", "ENTER A USER ID");
    if (userid) {
      dispatch({
        name: actionType.SET_USERID,
        userId: userid,
      });
    }
  };

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
  }, []);
  console.log(user);
  return (
    <div className="app">
      {!user ? (
        <>
          <Auth />
        </>
      ) : (
        <>
          <Router>
            <Switch>
              <Route path="/calls">
                <Header />
                <Calls />
                <IconButton className="app__addchat">
                  <div className="app__addchatWrapper">
                    <AddIcCall className="app__addchatIcon" />
                  </div>
                </IconButton>
                <IconButton className="app__addcalls">
                  <div className="app__addcallsWrapper">
                    <Videocam className="app__addchatIcon" />
                  </div>
                </IconButton>
              </Route>
              <Route path="/status">
                <Header />
                <Status />
                <IconButton className="app__addchat">
                  <div className="app__addchatWrapper">
                    <CameraAlt className="app__addchatIcon" />
                  </div>
                </IconButton>
                <IconButton className="app__addcalls">
                  <div className="app__addcallsWrapper">
                    <Create className="app__addchatIcon" />
                  </div>
                </IconButton>
              </Route>
              <Route path="/camera">
                <Camera />
              </Route>
              <Route path="/messages/:roomId">
                <Messages />
              </Route>
              <Route path="/">
                <Header />
                <Chats />
                <IconButton onClick={newChat} className="app__addchat">
                  <div className="app__addchatWrapper">
                    <Comment className="app__addchatIcon" />
                  </div>
                </IconButton>
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
