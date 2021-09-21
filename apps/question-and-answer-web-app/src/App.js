import React, { useState } from "react";
import "./App.css";
import { Header, Main } from "./Components";
const App = () => {
  var loc = window.location.pathname;
  console.log(loc);
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Main />
      </div>
    </div>
  );
};

export default App;
