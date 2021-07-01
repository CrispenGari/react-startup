import constants from "../utils";

const setUser = (payload: any) => {
  return {
    type: constants.SET_USER,
    payload,
  };
};

const actions = {
  setUser,
};

export default actions;
