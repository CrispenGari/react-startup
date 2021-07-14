import React, { createContext, useReducer, Dispatch } from "react";

type UserType = {
  name: string;
  id: number;
} | null;

type InitialStateType = {
  user: UserType;
  counter: number;
};

const initialState = {
  user: null,
  counter: 0,
};

const AppContext = createContext<any>({
  state: initialState,
  dispatch: () => null,
});

const combinedReducers = () => ({
  user: null,
  counter: null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
