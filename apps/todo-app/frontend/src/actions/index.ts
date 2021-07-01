import constants from "../utils";

const setUser = (payload: any) => {
  return {
    type: constants.SET_USER,
    payload,
  };
};

const setTodos = (payload: any) => {
  return {
    type: constants.SET_TODO,
    payload,
  };
};

const actions = {
  setUser,
  setTodos,
};

export default actions;
