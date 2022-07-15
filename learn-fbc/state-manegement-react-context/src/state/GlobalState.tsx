import React, { createContext, useReducer } from "react";
import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";

export const GlobalContext = createContext<any>({});
const GlobalState: React.FC<{ children: any }> = ({ children }) => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);
  const [user, userDispatch] = useReducer(userReducer, null);
  return (
    <GlobalContext.Provider
      value={{
        counter,
        counterDispatch,
        userDispatch,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
