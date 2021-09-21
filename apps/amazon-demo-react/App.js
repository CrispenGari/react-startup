import React, { useEffect } from "react";
import "./App.css";
import { Header, Head, Barner, Home, Login } from "./Components";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    // detemining if the user is logged in or not
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // do some clean up
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkouts">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Barner />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
