import React from "react";
import "./App.css";
import { Authentication, Header, Main } from "./Components";
import { auth } from "./backend/firebase";
import { useStateValue } from "./StateProvider";

import { actionName } from "./reducer";
function App() {
  const [{ user }, dispatch] = useStateValue();
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          name: actionName.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          name: actionName.SET_USER,
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  if (user) {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Authentication />
      </div>
    );
  }
}

export default App;
// https://accounts.google.com/b/0/DisplayUnlockCaptcha
