import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((previousState) => previousState + 1);
  };
  return (
    <div className="app">
      <h1>{counter}</h1>
      <button onClick={increment}>Counter</button>
    </div>
  );
}

export default App;
