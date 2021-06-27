import React from "react";

function Test({ increment }) {
  return (
    <div>
      <h1>Another component</h1>
      <button onClick={() => increment(7)}>Change Counter</button>
    </div>
  );
}

export default Test;
