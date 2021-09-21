import constants from "../utils";

const lastScoreReducer = (state = 0, action) => {
  switch (action.type) {
    case constants.LAST_SCORE:
      return (state = action.value);
    default:
      return state;
  }
};

export default lastScoreReducer;
