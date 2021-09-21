import React from "react";
import "./App.css";
import { Header, Main, History } from "./Components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__main">
          <Switch>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
