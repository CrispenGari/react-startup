import React from "react";
import { GlobalContext } from "./state/GlobalState";

const App = () => {
  const { user, counter, counterDispatch, userDispatch } =
    React.useContext(GlobalContext);

  return (
    <div>
      {!user ? (
        <button
          onClick={() => {
            userDispatch({
              type: "SET_USER",
              payload: {
                username: "username",
                age: 5,
              },
            });
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            userDispatch({
              type: "SET_USER",
              payload: null,
            });
          }}
        >
          Logout
        </button>
      )}

      <h1>Counter: {counter}</h1>

      <button
        onClick={() => {
          counterDispatch({
            type: "INCREMENT",
            payload: 5,
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          counterDispatch({
            type: "DECREMENT",
            payload: 3,
          });
        }}
      >
        Decrement
      </button>
      <pre>{JSON.stringify({ type: "user", user: user }, null, 2)}</pre>
    </div>
  );
};

export default App;
