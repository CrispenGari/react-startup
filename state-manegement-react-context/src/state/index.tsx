import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  count: 0,
};
type ActionType = "increment" | "decrement";
type StateType = typeof initialState;
type DispatchType = (action: ActionType) => void;

const CounterContext = createContext<{
  state: StateType;
  dispatch: DispatchType;
} | null>(null);
const counterReducer = (state: StateType, action: ActionType) => {
  switch (action) {
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "increment":
      return {
        count: state.count + 1,
      };
    default:
      return {
        count: state.count,
      };
  }
};

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  return context;
};
