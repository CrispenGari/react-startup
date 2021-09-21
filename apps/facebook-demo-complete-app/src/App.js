import React from "react";

import { Home, Header, SideBar, Chats, Widgets, Login } from "./Components";
import "./App.css";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";
import { auth } from "./firebase";
function App() {
  const [{ user }, dispatch] = useStateValue();
  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
  }, [user, dispatch]);
  console.log(user);
  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Home />
            <Widgets />
            <Chats />
          </div>
        </>
      ) : (
        <div className="login">
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
