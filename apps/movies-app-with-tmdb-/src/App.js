import React, { useState } from "react";
import "./App.css";
import { Header, Nav, Container } from "./Components";
import endpoints from "./endpoints";
function App() {
  const [optionalEndPoint, setoptionalEndPoint] = useState(endpoints.topRated);
  return (
    <div className="app">
      <Header />
      <Nav setoptionalEndPoint={setoptionalEndPoint} />
      <Container optionalEndPoint={optionalEndPoint} />
    </div>
  );
}

export default App;
