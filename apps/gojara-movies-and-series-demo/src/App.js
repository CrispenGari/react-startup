import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Home, Movies, Series } from "./Components";

function App() {
  const [category, setCategory] = React.useState("new");
  return (
    <div className="app">
      <Router>
        <Header setCategory={setCategory} />
        <Switch>
          <Route path="/movies">
            <Movies category={category} />
          </Route>
          <Route path="/series">
            <Series category={category} />
          </Route>
          <Route path="/">
            <Home category={category} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
