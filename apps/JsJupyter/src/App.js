import React, { useState } from "react";
import "./App.css";

import { Header, Main } from "./Components";
const App = () => {
  const [lines, setLines] = useState([null]);
  const [textType, setTextType] = useState("code");
  return (
    <div className="app">
      <Header
        setLines={setLines}
        lines={lines}
        setTextType={setTextType}
        textType={textType}
      />
      <Main lines={lines} setTextType={setTextType} textType={textType} />
    </div>
  );
};
console.clear();
export default App;
