import React, { useState } from "react";
import { Detector } from "./Components";
import { EmojiObjects } from "@material-ui/icons";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <h1>Object Detector</h1>
          <small>Developed by --Crispen Gari</small>
          <EmojiObjects />
        </div>
        <Detector />
      </div>
    </div>
  );
};

export default App;
