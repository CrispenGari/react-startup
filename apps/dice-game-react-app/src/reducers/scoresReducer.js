import constants from "../utils";
const scoresReducer = (state = [], action) => {
  switch (action.type) {
    case constants.SET_SCORE:
      return [...state, action.value];
    case constants.RESTORE_SCORE:
      return (state = []);
    default:
      return state;
  }
};
export default scoresReducer;
