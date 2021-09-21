import React, { useState } from "react";
import "./App.css";
import { Header, Main } from "./Components";
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Main />
      </div>
    </div>
  );
};

console.clear();
export default App;
