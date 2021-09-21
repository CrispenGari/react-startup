import constants from "../../utils/constants";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case constants.SET_USERS:
      return (state = [...action.payload]);
    default:
      return state;
  }
};

export default usersReducer;
