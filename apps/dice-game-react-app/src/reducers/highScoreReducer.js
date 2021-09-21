import constants from "../utils";

const highScoreReducer = (state = 0, action) => {
  switch (action.type) {
    case constants.HIGH_SCORE:
      return (state = action.value);
    default:
      return state;
  }
};

export default highScoreReducer;
