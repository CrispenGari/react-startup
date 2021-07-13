import React, { useContext, useReducer, useState } from "react";

import "./App.css";
import { CounterProvider, useCounter } from "./state";

function App() {
  const counter = useCounter();
  return (
    <CounterProvider>
      <div>
        <h1>Counter: {counter?.state}</h1>
        <button onClick={() => counter?.dispatch("increment")}>
          INCREMENT
        </button>
        <button onClick={() => counter?.dispatch("decrement")}>
          DECREMENT
        </button>
      </div>
    </CounterProvider>
  );
}

export default App;
