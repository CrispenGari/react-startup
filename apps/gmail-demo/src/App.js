import React from "react";
import { Login, Home, UseAnotherAccount, RemoveAccount } from "./Components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import SignIn from "./Components/SignIn/SignIn";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ userinfo, user }, dispatch] = useStateValue();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        if (authUser.displayName) {
          authUser.updateProfile({
            displayName: authUser.displayName,
          });
        } else {
          authUser.updateProfile({
            displayName: `${userinfo?.firstname} ${userinfo?.lastname}`,
          });
        }
        dispatch({
          name: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          name: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userinfo, user]);
  console.log(user);
  console.log(userinfo?.firstname);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/use_another_account">
            <UseAnotherAccount />
          </Route>
          <Route path="/remove_account">
            <UseAnotherAccount />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <SignIn />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
