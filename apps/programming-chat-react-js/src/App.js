import React, { useEffect, useState } from "react";
import { auth, googleProvider, facebookProvider, database } from "./firebase";
import { Login, Header, Chat, SideBar } from "./Components";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { actionType } from "./reducer";
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          name: actionType.SET_USER,
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          name: actionType.SET_USER,
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  console.log(user);
  return (
    <div className="app">
      {user ? (
        <>
          <Router>
            <Header />
            <div className="app__body">
              <SideBar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>WELCOME!!!</h1>
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
