import React, { useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import {
  Basket,
  Footer,
  New,
  Header,
  Home,
  Specials,
  Authentication,
} from "./Components";

import { auth } from "./firebase-backend/firebase";

import { useDispatch } from "react-redux";
import { setUser } from "./actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(authUser));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/basket">
            <Header />
            <Basket />
            <Footer />
          </Route>
          <Route path="/new">
            <Header />
            <New />
            <Footer />
          </Route>
          <Route path="/specials">
            <Header />
            <Specials />
            <Footer />
          </Route>
          <Route path="/authentication">
            <Authentication />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
