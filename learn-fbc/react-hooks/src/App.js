import { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "increment":
      return { count: state.count + value };
    case "decrement":
      return { count: state.count - value };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({
      type: "increment",
      value: 5,
    });
  };

  const decrement = () => {
    dispatch({
      type: "decrement",
      value: 3,
    });
  };
  return (
    <div className="app">
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default App;

// document.getElementById().getAttribute();
